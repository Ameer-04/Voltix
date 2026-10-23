import Link from "next/link";
import { getProducts } from "@/lib/product-data";

const featuredCategories = [
  { name: "Laptops", description: "Computing for work and play", href: "/category/laptops" },
  { name: "Accessories", description: "Upgrade your setup", href: "/category/accessories" },
  { name: "Smartphones", description: "Mobile technology", href: "/category/smartphones" },
];

export const instant = false;

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-amber-50 px-6 py-16 shadow-[0_24px_70px_-42px_rgba(14,116,144,0.45)] sm:px-12 sm:py-24">
        <p className="relative mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-700">The everyday tech edit</p>
        <h1 className="relative max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Better gear for the way you work.</h1>
        <p className="relative mt-5 max-w-xl text-lg leading-8 text-slate-600">Thoughtful electronics and accessories, selected to make busy days feel a little more effortless.</p>
        <Link href="/products" className="relative mt-9 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-600">Explore the collection</Link>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Browse your way</p><h2 className="mt-2 text-3xl font-bold tracking-tight">Shop by category</h2></div>
          <Link href="/products" className="hidden text-sm font-bold text-cyan-700 hover:text-cyan-500 sm:block">View all</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category, index) => (
            <Link key={category.href} href={category.href} className="group rounded-2xl border border-slate-200/90 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-lg">
              <span className="text-sm font-bold text-slate-400">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-black">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              <span className="mt-6 inline-block text-sm font-bold text-cyan-700 transition group-hover:translate-x-1">Shop now -&gt;</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4">
          <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Staff picks</p><h2 className="mt-2 text-3xl font-bold tracking-tight">Good choices, no guesswork</h2></div>
          <Link href="/products" className="text-sm font-bold text-cyan-700 hover:text-cyan-500">See everything -&gt;</Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link key={product._id} href={`/products/${product._id}`} className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
              <div className={`h-32 bg-gradient-to-br ${product.accent} p-5 text-right text-xs font-bold uppercase tracking-widest text-white/90`}>Voltix pick</div>
              <div className="p-5"><h3 className="font-bold">{product.name}</h3><p className="mt-2 font-black">${product.price.toLocaleString("en-US")}</p></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
