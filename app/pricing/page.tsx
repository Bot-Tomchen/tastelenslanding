"use client";

import Link from "next/link";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

const tiers = [
  { name: "Basic QR", tierKey: "basic", price: "$29/mo", features: [
      "Simple QR menu access",
      "Up to 100 menu photos",
      "Basic AI menu vision",
  ]},
  { name: "QR Stickers Kit", tierKey: "stickers", price: "$49/mo", features: [
      "Everything in Basic",
      "Physical QR sticker pack",
      "Priority onboarding",
      "Restaurant branding support",
  ]},
  { name: "3D Table Stand Kit", tierKey: "stand", price: "$69/mo", features: [
      "Everything in Stickers",
      "Premium 3D-printed table stands",
      "Custom engraved restaurant logo",
      "VIP support line",
  ]},
];

export default function Pricing() {
  useEffect(() => { track("visit_pricing_page"); }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-4xl font-bold">Pricing</h2>
      <p className="mt-2 text-gray-600">Choose the plan that fits your restaurant.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.tierKey} className="rounded-2xl border p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-2 text-3xl font-bold">{t.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <Link
              href={`/go/${t.tierKey}`}
              className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-black text-white"
              onClick={() => track("pricing_click", { tier: t.tierKey })}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
