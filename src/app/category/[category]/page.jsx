import Link from "next/link";
import { getProducts } from "@/lib/product-data";

export const instant = false;

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryName = category.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  const products = await getProducts();
  const categoryProducts = products.filter((product) => product.category === category);

  return (
    <section>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">Collection</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight">{categoryName}</h1>
      <p className="mt-3 max-w-xl text-slate-600">Useful tech, chosen for this part of your setup.</p>

      {categoryProducts.length ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((product) => (
            <Link key={product._id} href={`/products/${product._id}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className={`h-40 bg-gradient-to-br ${product.accent}`} />
              <div className="p-5"><h2 className="font-bold">{product.name}</h2><p className="mt-2 font-black">${product.price.toLocaleString("en-US")}</p><p className="mt-3 text-sm text-slate-600">{product.description}</p></div>
            </Link>
          ))}
        </div>
      ) : <p className="mt-10 rounded-2xl border border-dashed border-slate-300 p-8 text-slate-600">No products in this collection yet.</p>}
    </section>
  );
}