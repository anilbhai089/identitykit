import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! })

export async function POST(req: NextRequest) {
  const data = await req.json()

  const prompt = `You are an expert profile writer for Indian content creators. Generate a professional creator profile based on the details below. Return ONLY valid JSON.

Creator details:
Name: ${data.full_name}
City: ${data.city}
Niche: ${data.niche}
Languages: ${data.languages}
Platforms: ${data.platforms?.join ? data.platforms.join(', ') : data.platforms}
Instagram: ${data.instagram_followers} followers ${data.instagram_handle}
YouTube: ${data.youtube_subscribers} subscribers - ${data.youtube_channel}
Avg views: ${data.avg_views}
Engagement: ${data.engagement_rate}
Audience: ${data.audience_gender}, ${data.audience_age}, Top cities: ${data.top_cities}
Brands worked with: ${data.brands_worked}
Best campaign: ${data.best_campaign}
Awards: ${data.awards}
Content vibe: ${data.vibe}
Turnaround: ${data.turnaround}

Return ONLY this JSON (no markdown, no backticks):
{
  "bio": "A compelling 3-sentence professional bio in 3rd person, India-context aware, ${data.vibe} tone",
  "tagline": "A punchy 8-word tagline describing the creator"
}`

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1000,
    messages: [{ role: 'user', content: prompt }]
  })

  const text = message.content.map((b: any) => b.text || '').join('')
  const clean = text.replace(/```json|```/g, '').trim()
  const result = JSON.parse(clean)

  return NextResponse.json(result)
}
