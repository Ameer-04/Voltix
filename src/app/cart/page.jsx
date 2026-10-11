import Link from "next/link";

export default function CartPage() {
  return (
    <section className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Your bag</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Your cart is ready for good decisions.</h1>
      <p className="mt-4 text-slate-600">Cart persistence will be connected when the store database is added. Your future picks will live here.</p>
      <Link href="/products" className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-600">Continue shopping</Link>
    </section>
  );
}