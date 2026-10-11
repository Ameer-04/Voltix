
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white/70 text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; Voltix. Built for better everyday tech.
        </p>

        <div className="flex gap-4">
          <Link href="/products" className="transition hover:text-cyan-600">
            Shop
          </Link>
          <Link href="/docs/routing" className="transition hover:text-cyan-600">
            Developer Guide
          </Link>
        </div>
      </div>
    </footer>
  );    
}