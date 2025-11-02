"use client";
import { useEffect } from "react";

export default function StickersRedirect() {
  useEffect(() => {
    window.location.href = "/upload";
  }, []);

  return <p>Redirecting to setup...</p>;
}
