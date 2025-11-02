"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// ✅ Updated pricing tiers
const tiers = [
  {
    name: "Basic QR",
    tierKey: "basic_qr",
    price: "$29/mo",
    redirect: "/go/basic",
    features: [
      "Simple QR menu access",
      "Up to 100 menu photos",
      "Basic AI menu vision"
    ]
  },
  {
    name: "QR Stickers Kit",
    tierKey: "qr_stickers",
    price: "$49/mo",
    redirect: "/go/stickers",
    features: [
      "Everything in Basic",
      "Physical QR sticker pack",
      "Priority onboarding",
      "Restaurant branding support"
    ]
  },
  {
    name: "3D Table Stand Kit",
    tierKey: "table_stand",
    price: "$69/mo",
    redirect: "/go/stand",
    features: [
      "Everything in Stickers",
      "Premium 3D-printed table stands",
      "Custom engraved restaurant logo",
      "VIP support line"
    ]
  }
];

export default function Pricing() {
  // Track page visit
  useEffect(() => {
    track("visit_pricing_page");
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-4xl font-bold">Pricing</h2>
      <p className="mt-2 text-gray-600">Choose the plan that fits your restaurant.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="rounded-2xl border p-6 bg-white shadow-sm">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-2 text-3xl font-bold">{t.price}</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {t.features.map(f => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <button
              className="mt-6 w-full px-4 py-2 rounded-lg bg-black text-white"
              onClick={() => {
                track("pricing_click", { tier: t.tierKey });
                window.location.href = t.redirect;
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
