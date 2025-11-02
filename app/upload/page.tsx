"use client";

import { useState, useEffect } from "react";
import { track } from "@vercel/analytics";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  // Page view track
  useEffect(() => {
    track("visit_upload_page");
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setStatus("Please choose a file");
      return;
    }

    track("menu_upload_submitted", { filename: file.name });

    const fd = new FormData();
    fd.append("file", file);

    setStatus("Uploading…");

    try {
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();

      if (!res.ok) {
        track("menu_upload_error", { error: data.message });
        setStatus(data.message || "Upload failed");
      } else {
        track("menu_upload_success", { filename: file.name });
        setStatus(data.message || "Done");
      }
    } catch (err) {
      track("menu_upload_error", { error: String(err) });
      setStatus("Error uploading file");
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h2 className="text-3xl font-bold">Upload a menu</h2>
      <p className="mt-2 text-gray-600">
        Upload an image or PDF of a text-based menu. (Demo endpoint — persistence
        disabled.)
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => {
            const f = e.target.files?.[0] ?? null;
            setFile(f);

            if (f) {
              track("menu_file_selected", {
                filename: f.name,
                size_kb: Math.round(f.size / 1024),
              });
            }
          }}
          className="block w-full"
        />

        <button className="px-4 py-2 rounded-lg bg-black text-white">
          Upload
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}

      <div className="mt-8 p-4 bg-gray-50 rounded-xl text-sm text-gray-600">
        <p>
          <strong>Next step:</strong> connect persistent storage (Vercel Blob or
          S3) and OCR pipeline.
        </p>
      </div>
    </div>
  );
}
