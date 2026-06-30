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

    const prompt = `You are ghostwriting a bio for an Indian content creator's professional CV — and it must sound like the creator wrote it themselves, in their own voice. Brands reading this should feel like they're hearing directly from the person, not reading a third-party description written about them.

Creator details:

Name: ${data.name || 'the creator'}
Niche: ${data.niche || 'Content Creation'}${data.subNiche ? ' (' + data.subNiche + ')' : ''}
Primary platform: ${data.platform || 'Instagram'}
City: ${data.city || 'India'}
Followers: ${data.followers || 'a growing audience'}
Engagement rate: ${data.engagementRate ? data.engagementRate + '%' : 'strong'}
Years active: ${data.yearsActive || 'multiple'} years
Past brand collaborations: ${data.pastBrands || 'none specified'}
Achievements: ${data.achievements || 'not specified'}
Languages: ${data.languages || 'Hindi, English'}

Rules:
- Write in FIRST PERSON ("I create...", "I've worked with...", "My content focuses on...") — this is the creator's own voice, not a bio written about them by someone else
- 3-4 sentences, 55-80 words total
- Open with who they are and what they create — confident, not boastful
- Weave in audience size/engagement naturally if provided, as a fact about their work, not a brag
- Mention past brand collaborations naturally if provided, the way a creator would casually reference their work history
- Close with what kind of partnership or content they're looking to do next, or what they bring to a collaboration — in their own words
- Sound like a real person talking about their work: direct, warm, a little personality, not corporate or stiff
- No emojis, no hashtags, no generic filler like "passionate content creator" or "I am thrilled to"
- Do not invent specific numbers, brand names, or achievements not given above
- Avoid sounding like a LinkedIn summary — sound like how a sharp, likeable creator would describe themselves to a brand in a quick intro

Return ONLY the bio paragraph as plain text, first person. No quotes, no markdown, no preamble.`

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
    const niche = (data.niche || 'content creation').toLowerCase()
    const city = data.city || 'India'
    const followers = data.followers
    const engagement = data.engagementRate
    const brands = data.pastBrands

    let fallback = `I create ${niche} content from ${city}`
    if (followers) fallback += ` for an audience of ${followers}`
    fallback += '.'
    if (engagement) fallback += ` My engagement rate sits around ${engagement}%, which I credit to staying consistent and actually listening to what my audience responds to.`
    if (brands) fallback += ` I've worked with brands like ${brands.split(',').slice(0, 3).join(', ')}, and I care about partnerships that feel authentic, not forced.`
    fallback += " If you're looking for a creator who shows up consistently and delivers real engagement, I'd love to talk."

    return NextResponse.json({ bio: fallback })
  }
}
