const tiers = [
{ name: 'Starter', price: '$0', features: ['10 menu items', 'Basic QR page', 'Community support'] },
{ name: 'Pro', price: '$29/mo', features: ['Unlimited items', 'Branding controls', 'Priority support'] },
{ name: 'Business', price: 'Contact', features: ['Multi-location', 'Team accounts', 'SLA & onboarding'] }
]


export default function Pricing(){
return (
<div className="mx-auto max-w-6xl px-4 py-16">
<h2 className="text-4xl font-bold">Pricing</h2>
<p className="mt-2 text-gray-600">Simple plans to get you started. Upgrade as you grow.</p>
<div className="mt-10 grid md:grid-cols-3 gap-6">
{tiers.map(t => (
<div key={t.name} className="rounded-2xl border p-6">
<h3 className="text-xl font-semibold">{t.name}</h3>
<p className="mt-2 text-3xl font-bold">{t.price}</p>
<ul className="mt-4 space-y-2 text-sm text-gray-600">
{t.features.map(f => <li key={f}>• {f}</li>)}
</ul>
<a href="/upload" className="mt-6 inline-block px-4 py-2 rounded-lg bg-black text-white">Get started</a>
</div>
))}
</div>
</div>
)
}