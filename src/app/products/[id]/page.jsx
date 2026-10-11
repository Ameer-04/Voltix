
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, formatPrice } from "@/data/products";

export const instant = false;

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-4xl">
      <Link
        href="/products"
        className="text-sm font-bold text-cyan-700 hover:text-cyan-500"
      >
        ← Back to products
      </Link>

      <div className="mt-6 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
        <div className={`min-h-72 bg-gradient-to-br ${product.accent}`} />

        <div className="p-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">{product.category}</p><h1 className="mt-3 text-3xl font-black">
          {product.name}
        </h1>

        <p className="mt-4 text-2xl font-black">
          {formatPrice(product.price)}
        </p>

        <p className="mt-5 leading-7 text-slate-600">{product.description}</p>
        <Link href="/cart" className="mt-8 block w-full rounded-full bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-cyan-700">Add to cart</Link></div>
      </div>
    </section>
  );
}