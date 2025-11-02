'use client'
import { useState } from 'react'


export default function UploadPage(){
const [file, setFile] = useState<File|null>(null)
const [status, setStatus] = useState<string>('')


const onSubmit = async (e: React.FormEvent) => {
e.preventDefault()
if(!file){ setStatus('Please choose a file'); return }
const fd = new FormData();
fd.append('file', file)
setStatus('Uploading…')
const res = await fetch('/api/upload', { method: 'POST', body: fd })
const data = await res.json()
setStatus(data.message || 'Done')
}


return (
<div className="mx-auto max-w-2xl px-4 py-12">
<h2 className="text-3xl font-bold">Upload a menu</h2>
<p className="mt-2 text-gray-600">Upload an image or PDF of a text-based menu. (Demo endpoint — persistence disabled.)</p>


<form onSubmit={onSubmit} className="mt-6 space-y-4">
<input type="file" accept="image/*,application/pdf" onChange={e=>setFile(e.target.files?.[0] ?? null)} className="block w-full"/>
<button className="px-4 py-2 rounded-lg bg-black text-white">Upload</button>
</form>


{status && <p className="mt-4 text-sm text-gray-700">{status}</p>}


<div className="mt-8 p-4 bg-gray-50 rounded-xl text-sm text-gray-600">
<p><strong>Next step:</strong> connect persistent storage (Vercel Blob or S3) and OCR pipeline.</p>
</div>
</div>
)
}