export default function Footer(){
return (
<footer className="border-t mt-16">
<div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-500 flex items-center justify-between">
<p>© {new Date().getFullYear()} TasteLens</p>
<p>Made for MVP testing</p>
</div>
</footer>
)
}
