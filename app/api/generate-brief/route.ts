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

    const objectiveMap: Record<string, string> = {
      awareness: 'Brand Awareness', launch: 'Product Launch',
      conversions: 'Drive Sales & Conversions', engagement: 'Drive Engagement',
      app_install: 'App Installs & Signups', ugc: 'UGC Content Creation',
    }
    const toneMap: Record<string, string> = {
      professional: 'Professional', fun: 'Fun & Energetic',
      educational: 'Educational', aspirational: 'Aspirational',
    }

    const prompt = `You are an expert influencer marketing strategist for Indian brands. Generate a professional influencer campaign brief.

Brand: ${data.brandName}
Industry: ${data.industry}
Product: ${data.productName}
Product Description: ${data.productDescription || 'not specified'}
Website: ${data.brandWebsite || 'not specified'}

Campaign Objective: ${objectiveMap[data.objective] || data.objective}
Platform: ${data.platform}
Content Type: ${data.contentType}
Quantity: ${data.quantity} piece(s)
Go-Live Date: ${data.goLiveDate || 'to be confirmed'}
Budget per Creator: ${data.budget ? '₹' + parseInt(data.budget).toLocaleString('en-IN') : 'to be discussed'}
Creator Tier: ${data.creatorTier}
Promo Code: ${data.promoCode || 'not applicable'}
Campaign Hashtag: ${data.campaignHashtag || 'not specified'}

Target Audience:
- Age: ${data.targetAge}
- Gender: ${data.targetGender}  
- Location: ${data.targetLocation}
- Interests: ${data.targetInterests || 'not specified'}

Creative Direction:
- Tone: ${toneMap[data.tone] || data.tone}
- Key Messages: ${data.keyMessages || 'highlight product benefits authentically'}
- Dos: ${data.dos || 'show product in use naturally'}
- Don'ts: ${data.donts || 'avoid competitor mentions'}

Write a complete, professional campaign brief with exactly these 10 sections. Start each section with the section name in CAPS followed by a colon. Use bullet points inside sections. Be specific and actionable.

Sections:
CAMPAIGN OVERVIEW
TARGET AUDIENCE
DELIVERABLES
KEY MESSAGES
CREATIVE DIRECTION
POSTING GUIDELINES (must include ASCI disclosure requirement: #ad or #collab at start of caption)
TIMELINE
COMPENSATION
APPROVAL PROCESS
NEXT STEPS

Rules:
- Total 400-600 words
- Professional but clear language
- India-specific context throughout
- Always mention ASCI disclosure in Posting Guidelines
- Be specific — no vague instructions
- Start directly with "CAMPAIGN OVERVIEW:" — no preamble`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1200,
      messages: [{ role: 'user', content: prompt }],
    })

    const brief = message.content
      .filter((b: { type: string }) => b.type === 'text')
      .map((b: { type: string; text?: string }) => b.text || '')
      .join('')
      .trim()

    return NextResponse.json({ brief })

  } catch (error) {
    console.error('Brief generation error:', error)
    // Fallback brief
    const brief = `CAMPAIGN OVERVIEW:
${data.brandName} is launching an influencer campaign for ${data.productName}. The objective is to ${data.objective === 'awareness' ? 'drive brand awareness' : data.objective === 'launch' ? 'announce a new product launch' : 'drive conversions'} among Indian consumers on ${data.platform}.

TARGET AUDIENCE:
• Age: ${data.targetAge || '18–35'}
• Gender: ${data.targetGender || 'All genders'}
• Location: ${data.targetLocation || 'Pan India'}
• Interests: ${data.targetInterests || 'aligned with brand niche'}

DELIVERABLES:
• ${data.quantity || '1'} ${data.contentType || 'Reel'} on ${data.platform}
• Go-live date: ${data.goLiveDate || 'to be confirmed'}
• Content must feature ${data.productName} prominently

KEY MESSAGES:
• ${data.keyMessages || 'Highlight the unique benefits of ' + data.productName}
• Share your authentic experience with the product
• Emphasize value for Indian consumers

CREATIVE DIRECTION:
• Tone: ${data.tone === 'fun' ? 'Fun, energetic and relatable' : data.tone === 'educational' ? 'Informative and educational' : 'Professional and aspirational'}
• Dos: ${data.dos || 'Show product in natural, authentic use'}
• Don'ts: ${data.donts || 'Avoid competitor mentions or misleading claims'}

POSTING GUIDELINES:
• Add #ad or #collab at the START of your caption (ASCI mandatory)
• Use hashtag: ${data.campaignHashtag || '#' + (data.brandName || 'BrandCampaign').replace(/\s/g, '')}
${data.promoCode ? '• Include promo code: ' + data.promoCode : ''}
• Tag @${(data.brandName || 'brand').toLowerCase().replace(/\s/g, '')} in the post

TIMELINE:
• Draft submission: 5 days before go-live date
• Brand approval: within 48 hours of submission
• Revisions: 2 rounds included
• Final go-live: ${data.goLiveDate || 'as agreed'}

COMPENSATION:
• Fee: ${data.budget ? '₹' + parseInt(data.budget).toLocaleString('en-IN') : 'as discussed'}
• Payment: 50% advance before creation, 50% after go-live
• TDS at 10% will be deducted as per Section 194J

APPROVAL PROCESS:
• Submit draft via WhatsApp or email for review
• Brand will respond within 48 hours with feedback
• Maximum 2 revision rounds included in fee
• Final approval required before posting

NEXT STEPS:
• Reply to this brief confirming you accept the terms
• Share your bank details for advance payment processing
• Receive product samples (if applicable) within 3–5 business days
• Begin content creation after advance payment is received

For questions, contact: ${data.brandWebsite || data.brandName + ' marketing team'}`

    return NextResponse.json({ brief })
  }
}
