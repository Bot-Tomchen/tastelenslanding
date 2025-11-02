'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
{ href: '/', label: 'Home' },
{ href: '/upload', label: 'Upload' },
{ href: '/pricing', label: 'Pricing' }
]


export default function Navbar() {
const pathname = usePathname()
return (
<header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
<div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
<Link href="/" className="font-semibold">TasteLens</Link>
<nav className="flex items-center gap-6 text-sm">
{links.map(l => (
<Link key={l.href} href={l.href} className={
`hover:text-brand-accent ${pathname===l.href? 'text-brand-accent font-medium':'text-gray-700'}`
}>
{l.label}
</Link>
))}
<Link href="/upload" className="px-3 py-1.5 rounded-xl bg-black text-white text-sm">Get Started</Link>
</nav>
</div>
</header>
)
}
