import { NextRequest, NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export async function POST(req: NextRequest) {
  try {
    // Log all env vars to debug
    console.log('R2_S3_API:', process.env.R2_S3_API)
    console.log('R2_ACCOUNT_ID:', process.env.R2_ACCOUNT_ID)
    console.log('R2_BUCKET_NAME:', process.env.R2_BUCKET_NAME)
    console.log('R2_ACCESS_KEY_ID:', process.env.R2_ACCESS_KEY_ID ? 'SET' : 'MISSING')
    console.log('R2_SECRET_ACCESS_KEY:', process.env.R2_SECRET_ACCESS_KEY ? 'SET' : 'MISSING')

    const formData = await req.formData()
    const file = formData.get('file') as File
    const key = formData.get('key') as string

    console.log('File:', file?.name, file?.size, file?.type)
    console.log('Key:', key)

    if (!file || !key) {
      return NextResponse.json({ error: 'Missing file or key' }, { status: 400 })
    }

    if (!process.env.R2_S3_API || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
      console.error('R2 env vars missing!')
      return NextResponse.json({ error: 'R2 not configured' }, { status: 500 })
    }

    const r2 = new S3Client({
      region: 'auto',
      endpoint: process.env.R2_S3_API!,
      credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID!,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
      },
    })

    const buffer = Buffer.from(await file.arrayBuffer())
    console.log('Buffer size:', buffer.length)

    const uploadResult = await r2.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME!,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    }))

    console.log('R2 upload result:', uploadResult.$metadata.httpStatusCode)

    const publicUrl = `https://pub-fd2cd796dcdc4dff9656bd4b07dcb0d7.r2.dev/${key}`
    console.log('Public URL:', publicUrl)

    return NextResponse.json({ url: publicUrl, success: true })

  } catch (err: unknown) {
    console.error('R2 upload FULL error:', err)
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
