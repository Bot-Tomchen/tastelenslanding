import { NextResponse } from 'next/server'


export const runtime = 'nodejs'


export async function POST(req: Request){
const form = await req.formData()
const file = form.get('file') as File | null
if(!file){
return NextResponse.json({ ok:false, message: 'No file received' }, { status: 400 })
}
// Demo: we do not persist. For production, upload to Vercel Blob or S3 here.
return NextResponse.json({ ok:true, message: `Received: ${file.name} (${Math.round(file.size/1024)} KB)` })
}
