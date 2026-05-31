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

    const platforms = Array.isArray(data.platforms)
      ? (data.platforms as unknown as string[]).join(', ')
      : (data.platforms || '')

    const prompt = `You are an expert profile writer for Indian content creators. Generate a creator profile written in FIRST PERSON — as if the creator is writing about themselves. Use "I", "my", "me". Never write in 3rd person. Return ONLY valid JSON, no markdown, no backticks.

Creator details:
Name: ${data.full_name || 'Creator'}
City: ${data.city || 'India'}
Niche: ${data.niche || 'Content Creation'}
Platforms: ${platforms}
Instagram: ${data.instagram_followers || ''} followers
YouTube: ${data.youtube_subscribers || ''} subscribers
Avg views: ${data.avg_views || ''}
Brands worked with: ${data.brands_worked || ''}
Best campaign: ${data.best_campaign || ''}
Content vibe: ${data.vibe || 'Professional'}
Languages: ${data.languages || 'Hindi, English'}

Write the bio in FIRST PERSON like the creator wrote it. Make it feel personal, genuine, confident. 2-3 sentences max.

Good example: "I create business content that helps young Indians build their entrepreneurial mindset. With 27K+ followers across Instagram and YouTube, I break down complex concepts into simple, actionable steps my audience can actually use. Brands trust me to deliver campaigns that connect — not just impress."

Bad example (DO NOT DO THIS): "Anil Prajapati is a business creator from Palanpur who educates..."

Return ONLY this JSON with no extra text:
{"bio":"2-3 sentence first-person bio","tagline":"Short punchy 7-8 word tagline"}`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 400,
      messages: [{ role: 'user', content: prompt }]
    })

    const text = message.content
      .filter((b: { type: string }) => b.type === 'text')
      .map((b: { type: string; text?: string }) => b.text || '')
      .join('')
      .replace(/```json|```/g, '')
      .trim()

    const result = JSON.parse(text)

    return NextResponse.json({
      bio: result.bio || '',
      tagline: result.tagline || ''
    })

  } catch (error) {
    console.error('Generate API error:', error)
    const name = data.full_name || 'Creator'
    const niche = data.niche || 'content creation'
    const city = data.city || 'India'
    const ig = data.instagram_followers || ''
    const yt = data.youtube_subscribers || ''
    const followers = ig && yt ? `${ig} on Instagram and ${yt} on YouTube` : ig || yt || 'a growing audience'

    return NextResponse.json({
      bio: `I create ${niche.toLowerCase()} content that genuinely connects with my audience. With ${followers}, I've built a community that trusts my recommendations and engages with everything I put out. Based in ${city}, I work with brands to create content that feels real — because that's the only kind that actually works.`,
      tagline: `${niche} creator making content that connects.`
    })
  }
}
