
"use client";

import { useState } from "react";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function increaseQuantity() {
    setQuantity((current) => current + 1);
  }

  return (
    <div className="mt-6">
      <p className="mb-2 text-sm font-medium">Quantity</p>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={quantity === 1}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Decrease quantity"
        >
          −
        </button>

        <span className="min-w-6 text-center font-semibold">
          {quantity}
        </span>

        <button
          type="button"
          onClick={increaseQuantity}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}