import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: NextRequest) {
  let data: Record<string, string> = {}

  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) throw new Error('API key not configured')

    const anthropic = new Anthropic({ apiKey })

    const prompt = `You are a professional copywriter who writes brand-ready bios for Indian content creators' CVs and media kits — the kind brand managers and marketing teams actually read before approving a collaboration.

Write ONE polished professional bio paragraph using these details:

Name: ${data.name || 'the creator'}
Niche: ${data.niche || 'Content Creation'}${data.subNiche ? ' (' + data.subNiche + ')' : ''}
Primary platform: ${data.platform || 'Instagram'}
City: ${data.city || 'India'}
Followers: ${data.followers || 'a growing audience'}
Engagement rate: ${data.engagementRate ? data.engagementRate + '%' : 'strong'}
Years active: ${data.yearsActive || 'multiple'} years
Past brand collaborations: ${data.pastBrands || 'various Indian and global brands'}
Achievements: ${data.achievements || 'not specified'}
Languages: ${data.languages || 'Hindi, English'}

Rules:
- Write in third person, professional tone — this goes in a CV a brand will read
- 3-4 sentences, 55-75 words total
- Open with who they are and their niche authority
- Mention their audience size/engagement as credibility signals if provided
- Mention past brand work naturally if provided, without just listing it
- Close with what they bring to a brand partnership (authenticity, results, consistency)
- No emojis, no hashtags, no first person ("I"), no generic filler like "passionate content creator"
- Sound like a real bio from a polished media kit, not marketing fluff
- Do not invent specific numbers, brand names, or achievements not given above

Return ONLY the bio paragraph as plain text. No quotes, no markdown, no preamble.`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 300,
      messages: [{ role: 'user', content: prompt }]
    })

    const bio = message.content
      .filter((b: { type: string }) => b.type === 'text')
      .map((b: { type: string; text?: string }) => b.text || '')
      .join('')
      .trim()
      .replace(/^["']|["']$/g, '')

    return NextResponse.json({ bio })

  } catch (error) {
    console.error('CV bio generation error:', error)
    const name = data.name || 'This creator'
    const niche = data.niche || 'content creation'
    const city = data.city || 'India'
    const followers = data.followers
    const engagement = data.engagementRate
    const brands = data.pastBrands

    let fallback = `${name} is a ${niche} creator based in ${city}`
    if (followers) fallback += `, with a following of ${followers}`
    fallback += '.'
    if (engagement) fallback += ` Known for an engagement rate of ${engagement}%, well above platform average for the niche.`
    if (brands) fallback += ` Has collaborated with brands including ${brands.split(',').slice(0, 3).join(', ')}.`
    fallback += ' Brings consistent, authentic content and measurable results to every brand partnership.'

    return NextResponse.json({ bio: fallback })
  }
}
