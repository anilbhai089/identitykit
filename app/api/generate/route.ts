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
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY is not set!')
      throw new Error('API key not configured')
    }

    const anthropic = new Anthropic({ apiKey })

    const platforms = Array.isArray(data.platforms)
      ? (data.platforms as unknown as string[]).join(', ')
      : (data.platforms || '')

    const prompt = `You are an expert profile writer for Indian content creators. Generate a professional creator profile. Return ONLY valid JSON, no markdown, no backticks, no extra text.

Creator:
Name: ${data.full_name || 'Creator'}
City: ${data.city || 'India'}
Niche: ${data.niche || 'Content Creation'}
Platforms: ${platforms}
Instagram: ${data.instagram_followers || ''} followers
YouTube: ${data.youtube_subscribers || ''} subscribers
Brands worked with: ${data.brands_worked || 'Various brands'}
Content vibe: ${data.vibe || 'Professional'}

Return ONLY this JSON:
{"bio":"3-sentence professional bio in 3rd person","tagline":"Punchy 8-word tagline"}`

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

    console.log('Claude response:', text)

    const result = JSON.parse(text)

    return NextResponse.json({
      bio: result.bio || '',
      tagline: result.tagline || ''
    })

  } catch (error) {
    console.error('Generate API error:', error)

    // Return a sensible fallback so the profile still gets created
    const name = data.full_name || 'This creator'
    const niche = data.niche || 'content creation'
    const city = data.city || 'India'

    return NextResponse.json({
      bio: `${name} is a ${niche} creator based in ${city}, crafting content that resonates with a growing audience across social media platforms. Known for their authentic style and consistent engagement, they bring brands to life through compelling storytelling. Their work spans multiple platforms, making them a versatile and impactful voice in the Indian creator economy.`,
      tagline: `${niche} creator making an impact.`
    })
  }
}
