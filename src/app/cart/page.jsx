"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice, products } from "@/data/products";

export default function CartPage() {
  const { cartItems, isCartLoaded, removeFromCart } = useCart();

  if (!isCartLoaded) {
    return <p className="text-slate-600">Loading your cart...</p>;
  }

  const items = cartItems
    .map((cartItem) => ({
      ...cartItem,
      product: products.find((product) => product.id === cartItem.productId),
    }))
    .filter((cartItem) => cartItem.product);

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
          Your bag
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Your cart is empty.</h1>
        <Link
          href="/products"
          className="mt-8 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white shadow-lg shadow-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-600"
        >
          Continue shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Your bag</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Your cart</h1>

      <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center justify-between gap-6 p-6">
            <div>
              <h2 className="font-bold">{product.name}</h2>
              <p className="mt-1 text-slate-600">{formatPrice(product.price)} each</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">Quantity: {quantity}</p>
              <button
                type="button"
                onClick={() => removeFromCart(product.id)}
                className="mt-2 text-sm font-semibold text-cyan-700 hover:text-cyan-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}