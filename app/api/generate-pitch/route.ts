import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: NextRequest) {
  let data: Record<string, string> = {}
  try { data = await req.json() } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) throw new Error('API key not configured')

    const anthropic = new Anthropic({ apiKey })

    const toneMap: Record<string, string> = {
      professional: 'Professional — formal and structured',
      friendly: 'Friendly — warm and conversational',
      bold: 'Bold & Direct — confident and punchy',
      creative: 'Creative — unique and memorable',
    }
    const goalMap: Record<string, string> = {
      paid_collab: 'Paid Collaboration',
      barter: 'Barter / Product Gifting',
      ambassador: 'Brand Ambassador Program',
      affiliate: 'Affiliate / Commission Deal',
    }

    const prompt = `You are an expert at writing influencer brand pitch emails for the Indian creator economy. Generate a complete pitch email package.

Creator Details:
- Name: ${data.creatorName || 'the creator'}
- Niche: ${data.niche || 'Lifestyle'}
- Platform: ${data.platform || 'Instagram'}
- Followers: ${data.followers || 'not specified'}
- Engagement Rate: ${data.engagementRate || 'not specified'}
- Unique Angle: ${data.uniqueAngle || 'not specified'}
- Past Brand Collabs: ${data.pastBrands || 'not specified'}
- Media Kit / Identity Kit URL: ${data.identityKitUrl || 'identitykit.in/yourname'}

Brand Details:
- Brand Name: ${data.brandName}
- Product / Service: ${data.brandProduct || data.brandName}
- Industry: ${data.brandIndustry || data.niche}
- Proposed Deliverable: ${data.proposedDeliverable || '1 Instagram Reel'}

Settings:
- Tone: ${toneMap[data.tone] || 'Professional'}
- Goal: ${goalMap[data.goal] || 'Paid Collaboration'}
- Language: ${data.language === 'hinglish' ? 'Hinglish (casual Indian mix of Hindi and English words)' : 'English'}

Rules for the main email:
- 80–120 words MAXIMUM — short emails get read
- Subject line: specific, personalized, under 60 characters, no generic phrases
- NEVER open with "I hope this email finds you well" or "I am writing to"
- Open with ONE specific observation about the brand or their product
- Clearly state why your audience is perfect for their product
- Mention the Identity Kit URL naturally (e.g. "Here's my full media kit: [url]")
- ONE clear CTA at the end — either call or reply, not both
- Follow-up 1: 3–4 days later, under 40 words, just a soft reminder
- Follow-up 2: final touch under 30 words, mention moving on but leaving door open

Return ONLY valid JSON, no markdown, no backticks, no explanation:
{"subject":"subject line here","body":"email body here with \\n for line breaks","followUp1":"follow up 1 text with \\n for line breaks","followUp2":"follow up 2 text with \\n for line breaks"}`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = message.content
      .filter((b: { type: string }) => b.type === 'text')
      .map((b: { type: string; text?: string }) => b.text || '')
      .join('')
      .replace(/```json|```/g, '')
      .trim()

    const result = JSON.parse(text)
    return NextResponse.json({ result })

  } catch (error) {
    console.error('Pitch email generation error:', error)
    // Fallback
    const brand = data.brandName || 'your brand'
    const url = data.identityKitUrl || 'identitykit.in/yourname'
    return NextResponse.json({
      result: {
        subject: `${brand} × ${data.creatorName || 'Creator'} — Collab Idea`,
        body: `Hi ${brand} team,\n\nLove what you're building — your recent campaigns have been spot on for the Indian market.\n\nI create ${data.niche || 'lifestyle'} content for ${data.followers || 'a highly engaged'} audience on ${data.platform || 'Instagram'} — exactly the demographic that buys ${data.brandProduct || 'your products'}.\n\nI'd love to do ${data.proposedDeliverable || '1 Instagram Reel'} for this. Here's my full media kit and past work: ${url}\n\nCan we connect this week?\n\n${data.creatorName || 'Best'}`,
        followUp1: `Hi! Just following up on my email from a few days ago about a ${data.proposedDeliverable || 'Reel'} collab.\n\nHappy to jump on a quick 10-min call — ${url}\n\n${data.creatorName || 'Best'}`,
        followUp2: `Last follow-up from my side — would love to connect if the timing works.\n\nMy profile: ${url}\n\n${data.creatorName || 'Best'}`,
      }
    })
  }
}
