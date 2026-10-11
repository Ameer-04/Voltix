
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/category/laptops", label: "Laptops" },
  { href: "/category/accessories", label: "Accessories" },
  { href: "/search", label: "Search" },
  { href: "/cart", label: "Cart" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-slate-950"
        >
          Voltix<span className="text-cyan-500">.</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-600">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}