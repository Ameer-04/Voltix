
"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartView() {
  const {
    cartItems,
    isCartLoaded,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();

        if (!data.success || !Array.isArray(data.products)) {
          throw new Error("Invalid response from the products API.");
        }

        setProducts(data.products);
      } catch (error) {
        setError(error.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (!isCartLoaded || isLoading) {
    return (
      <main className="mx-auto max-w-5xl p-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <p className="mt-6">Loading your cart...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-5xl p-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <p className="mt-6 text-red-600">{error}</p>
      </main>
    );
  }

  const cartProducts = cartItems.map((item) => ({
    ...item,
    product: products.find(
      (product) => product._id === item.productId
    ),
  }));

  const availableItems = cartProducts.filter(
    (item) => item.product
  );

  const unavailableItems = cartProducts.filter(
    (item) => !item.product
  );

  const total = availableItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  function formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  }

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-6 text-gray-600">
          Your cart is empty.
        </p>
      ) : (
        <div className="mt-8 space-y-6">
          {unavailableItems.length > 0 && (
            <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
              <p className="font-medium">
                Some products are no longer available.
              </p>

              {unavailableItems.map((item) => (
                <div
                  key={item.productId}
                  className="mt-3 flex items-center justify-between gap-4"
                >
                  <span className="text-sm">
                    Product ID: {item.productId}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.productId)}
                    className="text-sm font-medium text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          {availableItems.map((item) => (
            <div
              key={item.productId}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-gray-200 p-5"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {item.product.name}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  {item.product.category}
                </p>

                <p className="mt-2 font-medium">
                  {formatPrice(item.product.price)} each
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  Subtotal:{" "}
                  {formatPrice(
                    item.product.price * item.quantity
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.productId,
                      item.quantity - 1
                    )
                  }
                  disabled={item.quantity <= 1}
                  className="h-9 w-9 rounded border disabled:opacity-40"
                  aria-label={`Decrease quantity of ${item.product.name}`}
                >
                  −
                </button>

                <span className="min-w-6 text-center">
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.productId,
                      item.quantity + 1
                    )
                  }
                  disabled={item.quantity >= item.product.stock}
                  className="h-9 w-9 rounded border disabled:opacity-40"
                  aria-label={`Increase quantity of ${item.product.name}`}
                >
                  +
                </button>

                <button
                  type="button"
                  onClick={() => removeFromCart(item.productId)}
                  className="ml-2 text-sm font-medium text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="rounded-xl bg-gray-100 p-5 text-right">
            <p className="text-sm text-gray-600">
              Total for available products
            </p>

            <p className="mt-1 text-2xl font-bold">
              {formatPrice(total)}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
