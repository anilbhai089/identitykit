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

    const prompt = `You are an expert Instagram bio writer for Indian content creators. Generate exactly 3 different Instagram bio options for a creator with these details:

Name: ${data.name || 'not specified'}
Niche: ${data.niche || 'Content Creation'}
City/Location: ${data.city || 'India'}
Tone: ${data.tone || 'Professional'}
Primary Goal: ${data.goal || 'Get Brand Deals'}
Unique angle / what makes them different: ${data.uniqueAngle || 'not specified'}
Follower count: ${data.followers || 'not specified'}
Contact email: ${data.email || 'not specified'}

Rules:
- Each bio must be under 150 characters TOTAL (count every character including emojis, spaces, line breaks)
- Use \\n for line breaks — max 4 lines per bio
- Use relevant emojis naturally — 3-5 per bio
- Include a CTA on the last line (e.g. 📩 collabs: email, 👇 link in bio, DM for rates)
- Be specific to India and the Indian creator economy
- If goal is brand deals, make bio clearly signal openness to collaborations
- If followers are mentioned and above 10K, include them as social proof
- Each of the 3 bios should feel meaningfully different in structure and style
- Do NOT use hashtags in the bio

Return ONLY a JSON array with exactly 3 strings, no other text, no markdown, no backticks:
["bio one here", "bio two here", "bio three here"]`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 800,
      messages: [{ role: 'user', content: prompt }]
    })

    const text = message.content
      .filter((b: { type: string }) => b.type === 'text')
      .map((b: { type: string; text?: string }) => b.text || '')
      .join('')
      .replace(/```json|```/g, '')
      .trim()

    const bios: string[] = JSON.parse(text)
    return NextResponse.json({ bios })

  } catch (error) {
    console.error('Bio generation error:', error)
    // Fallback bios
    const niche = data.niche || 'Content Creation'
    const city = data.city || 'India'
    const email = data.email || ''
    return NextResponse.json({
      bios: [
        `📊 ${niche} tips for Indian creators\n🇮🇳 Based in ${city}\nHelping you grow smarter, not harder\n${email ? `📩 ${email}` : '👇 Link in bio'}`,
        `✨ Making ${niche.toLowerCase()} simple & actionable\n🎯 ${city} | Real talk, real results\nNew content every week\n${email ? `📩 Collabs: ${email}` : '👇 Media kit in bio'}`,
        `🚀 ${niche} creator from ${city}\nTurning insights into income for Indian creators\n${email ? `📩 ${email}` : 'DM for brand collabs 🤝'}`,
      ]
    })
  }
}
