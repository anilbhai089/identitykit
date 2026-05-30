import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export const r2 = new S3Client({
  region: 'auto',
  endpoint: process.env.R2_S3_API!,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
})

export const R2_PUBLIC_URL = 'https://pub-fd2cd796dcdc4dff9656bd4b07dcb0d7.r2.dev'

export async function uploadToR2(file: Buffer, key: string, contentType: string) {
  await r2.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: key,
    Body: file,
    ContentType: contentType,
  }))
  return `${R2_PUBLIC_URL}/${key}`
}
