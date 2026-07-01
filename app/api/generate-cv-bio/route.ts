import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  let data: Record<string, string> = {}

  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return NextResponse.json({ bio: buildFallback(data) })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 300,
        messages: [{
          role: 'user',
          content: `You are ghostwriting a bio for an Indian content creator's professional CV — it must sound like the creator wrote it themselves, in their own voice. Brands reading this should feel like they're hearing directly from the person.

Creator details:
Name: ${data.name || 'the creator'}
Niche: ${data.niche || 'Content Creation'}
Primary platform: ${data.platform || 'Instagram'}
City: ${data.city || 'India'}
Followers: ${data.followers || 'a growing audience'}
Engagement rate: ${data.engagementRate ? data.engagementRate + '%' : 'strong'}
Years active: ${data.yearsActive || 'several'} years
Past brand collaborations: ${data.pastBrands || 'various brands'}
Achievements: ${data.achievements || ''}
Languages: ${data.languages || 'Hindi, English'}

Rules:
- Write in FIRST PERSON ("I create...", "I've worked with...")
- 3-4 sentences, 55-80 words total
- Open with who they are and what they create — confident, not boastful
- Mention past brands naturally if provided
- Close with what they bring to a collaboration
- Sound like a real person, not a LinkedIn summary
- No emojis, no hashtags, no generic filler phrases
- Do not invent numbers or brands not given above

Return ONLY the bio paragraph as plain text. No quotes, no markdown.`
        }]
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Anthropic API error:', response.status, err)
      return NextResponse.json({ bio: buildFallback(data) })
    }

    const result = await response.json()
    const bio = result.content
      ?.filter((b: any) => b.type === 'text')
      ?.map((b: any) => b.text || '')
      ?.join('')
      ?.trim()
      ?.replace(/^[\"']|[\"']$/g, '')

    if (!bio) return NextResponse.json({ bio: buildFallback(data) })

    return NextResponse.json({ bio })

  } catch (error) {
    console.error('CV bio generation error:', error)
    return NextResponse.json({ bio: buildFallback(data) })
  }
}

function buildFallback(data: Record<string, string>): string {
  const niche = (data.niche || 'content creation').toLowerCase()
  const city = data.city || 'India'
  const followers = data.followers
  const engagement = data.engagementRate
  const brands = data.pastBrands

  let bio = `I create ${niche} content from ${city}`
  if (followers) bio += ` for an audience of ${followers}`
  bio += '.'
  if (engagement) bio += ` My engagement rate is around ${engagement}%, which I credit to staying consistent and genuinely connecting with my audience.`
  if (brands) {
    const brandList = brands.split(',').map((b: string) => b.trim()).filter(Boolean).slice(0, 3).join(', ')
    if (brandList) bio += ` I've worked with brands like ${brandList} and care deeply about partnerships that feel authentic.`
  }
  bio += " If you're looking for a creator who shows up consistently and delivers real results, I'd love to connect."
  return bio
}
