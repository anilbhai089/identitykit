import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json()

    const keyId = process.env.RAZORPAY_KEY_ID
    const keySecret = process.env.RAZORPAY_KEY_SECRET

    if (!keyId || !keySecret) {
      return NextResponse.json({ error: 'Razorpay not configured' }, { status: 500 })
    }

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64')
    const res = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount, // in paise
        currency: 'INR',
        receipt: `rate_card_${Date.now()}`,
      }),
    })

    const order = await res.json()

    if (!order.id) {
      console.error('Razorpay order creation failed:', order)
      return NextResponse.json({ error: 'Order creation failed' }, { status: 500 })
    }

    return NextResponse.json({ orderId: order.id, key: keyId })

  } catch (error) {
    console.error('Payment route error:', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
