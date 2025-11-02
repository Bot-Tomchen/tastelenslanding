"use client";
import { useEffect } from "react";

export default function BasicRedirect() {
  useEffect(() => {
    window.location.href = "/upload";
  }, []);

  return <p>Redirecting to setup...</p>;
}
