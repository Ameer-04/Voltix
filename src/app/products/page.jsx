
import Link from "next/link";
import { getProducts } from "@/lib/product-data";

export const instant = false;

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">The full edit</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">All products</h1>
      <p className="mt-3 text-slate-600">Explore the electronics that earn their place in your everyday setup.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product._id}
            className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/85 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`h-40 bg-gradient-to-br ${product.accent}`} />

            <div className="p-5"><h2 className="text-lg font-bold">
              {product.name}
            </h2>

            <p className="mt-2 font-black">
              ${product.price.toLocaleString("en-US")}
            </p>
            <p className="mt-3 text-sm text-slate-600">{product.description}</p>

            <Link
              href={`/products/${product._id}`}
              className="mt-5 inline-block text-sm font-bold text-cyan-700 hover:text-cyan-500"
            >
              View product -&gt;
            </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}