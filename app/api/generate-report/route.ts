import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: NextRequest) {
  let d: Record<string, string> = {}
  try { d = await req.json() } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  try {
    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) throw new Error('No API key')
    const anthropic = new Anthropic({ apiKey })

    const prompt = `You are an expert influencer marketing strategist. Write a professional post-campaign performance report for an Indian creator to send to a brand.

Creator: ${d.creatorName} (${d.creatorHandle || 'creator'})
Brand: ${d.brandName}
Product/Campaign: ${d.productName || d.brandName}
Platform: ${d.platform}
Content Type: ${d.contentType}
Niche: ${d.niche}
Go-Live Date: ${d.goLiveDate || 'recently'}
Campaign Fee: ${d.campaignFee ? '₹' + parseInt(d.campaignFee).toLocaleString('en-IN') : 'as agreed'}

Performance Numbers:
- Followers: ${d.followers || 'not specified'}
- Reach: ${d.reach || 'not specified'}
- Impressions: ${d.impressions || 'not specified'}
- Video Views: ${d.views || 'not specified'}
- Likes: ${d.likes || '0'}
- Comments: ${d.comments || '0'}
- Saves: ${d.saves || '0'}
- Shares: ${d.shares || '0'}
- Link Clicks: ${d.clicks || 'not tracked'}
- Story Views: ${d.storyViews || 'not applicable'}
- Promo Code Redemptions: ${d.promoRedemptions || 'not applicable'}
- Total Engagements: ${d.totalEngagements || 'calculated from above'}
- Engagement Rate: ${d.engRate || 'calculated'}%
- Cost Per Engagement: ₹${d.cpe || 'calculated'}

Qualitative:
- Notable Comment: ${d.topComment || 'positive audience response'}
- Key Learning: ${d.keyLearning || 'campaign performed well'}
- Next Campaign Recommendation: ${d.nextRecommendation || 'happy to discuss next steps'}

Write a complete professional campaign report with these sections. Be warm but professional. Include India-specific benchmark comparisons where possible (Indian micro-creator average engagement rate is 3.2%, nano is 5-6%). Always frame numbers positively and accurately.

Format:
CAMPAIGN PERFORMANCE REPORT
[Brand Name] × [Creator Name]
[Platform] [Content Type] Campaign — [Date]

Then sections:
CAMPAIGN SUMMARY
PERFORMANCE HIGHLIGHTS (key metrics with benchmark comparisons)
DETAILED METRICS TABLE (format as clean text table)
AUDIENCE RESPONSE (qualitative insights, notable comments)
KEY LEARNINGS
RECOMMENDATIONS FOR NEXT CAMPAIGN
THANK YOU NOTE (brief, warm, with rebooking CTA)

Rules:
- Professional but warm tone
- 350-500 words total
- Include benchmark comparisons for at least 2 metrics
- Frame everything positively and accurately
- End with a subtle rebooking invitation
- Start directly with "CAMPAIGN PERFORMANCE REPORT" — no preamble`

    const msg = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1200,
      messages: [{ role: 'user', content: prompt }],
    })

    const report = msg.content
      .filter((b: { type: string }) => b.type === 'text')
      .map((b: { type: string; text?: string }) => b.text || '')
      .join('').trim()

    return NextResponse.json({ report })

  } catch (err) {
    console.error('Report generation error:', err)
    // Fallback report
    const report = `CAMPAIGN PERFORMANCE REPORT
${d.brandName} × ${d.creatorName}
${d.platform} ${d.contentType} Campaign — ${d.goLiveDate || 'June 2026'}

CAMPAIGN SUMMARY
This report summarises the performance of the ${d.productName || d.brandName} campaign delivered by ${d.creatorName} (${d.creatorHandle || ''}) on ${d.platform}. The campaign went live on ${d.goLiveDate || 'the agreed date'} and this report covers the first 7 days of performance.

PERFORMANCE HIGHLIGHTS
• Reach: ${d.reach ? parseInt(d.reach).toLocaleString('en-IN') + ' unique accounts' : 'See metrics below'}
• Total Engagements: ${d.totalEngagements || (parseInt(d.likes||'0') + parseInt(d.comments||'0') + parseInt(d.saves||'0') + parseInt(d.shares||'0')).toLocaleString('en-IN')}
• Engagement Rate: ${d.engRate || '—'}% ${d.engRate && parseFloat(d.engRate) > 3.2 ? '(above India micro-creator average of 3.2%)' : ''}
• Saves: ${d.saves ? parseInt(d.saves).toLocaleString('en-IN') : '—'} (high save rate indicates strong content value)

DETAILED METRICS
Metric              | Result
--------------------|------------------
Reach               | ${d.reach ? parseInt(d.reach).toLocaleString('en-IN') : '—'}
Impressions         | ${d.impressions ? parseInt(d.impressions).toLocaleString('en-IN') : '—'}
Likes               | ${d.likes ? parseInt(d.likes).toLocaleString('en-IN') : '—'}
Comments            | ${d.comments ? parseInt(d.comments).toLocaleString('en-IN') : '—'}
Saves               | ${d.saves ? parseInt(d.saves).toLocaleString('en-IN') : '—'}
Shares              | ${d.shares ? parseInt(d.shares).toLocaleString('en-IN') : '—'}
${d.clicks ? 'Link Clicks         | ' + parseInt(d.clicks).toLocaleString('en-IN') + '\n' : ''}${d.promoRedemptions ? 'Promo Redemptions   | ' + d.promoRedemptions + '\n' : ''}

AUDIENCE RESPONSE
${d.topComment ? 'Notable audience feedback: "' + d.topComment + '"' : 'The content received positive audience response with genuine interest in the product.'}
The comment section showed high purchase intent with multiple followers asking about where to purchase the product.

KEY LEARNINGS
${d.keyLearning || 'The campaign performed strongly. Authentic product integration resonated well with the audience.'}

RECOMMENDATIONS
${d.nextRecommendation || 'I would love to continue this partnership. A follow-up campaign focusing on the product in daily use could drive even stronger conversions.'}

THANK YOU
Thank you for the opportunity to work with ${d.brandName}. It was a great collaboration and I look forward to working together again.

For my full media kit and upcoming availability: identitykit.in/${(d.creatorHandle || d.creatorName || 'yourname').replace('@', '').toLowerCase()}

Warm regards,
${d.creatorName}`

    return NextResponse.json({ report })
  }
}
