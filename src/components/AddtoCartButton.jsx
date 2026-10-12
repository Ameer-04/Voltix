"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ productId }) {
const { addToCart, isCartLoaded } = useCart();

function handleAddToCart() {
addToCart(productId, 1);
}

return ( <button
   type="button"
   onClick={handleAddToCart}
   disabled={!isCartLoaded}
   className="mt-6 rounded-lg bg-black px-6 py-3 font-medium text-white disabled:opacity-50"
 >
{isCartLoaded ? "Add to Cart" : "Loading Cart..."} </button>
);
}
