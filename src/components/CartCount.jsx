"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartCount() {
const { totalItems, isCartLoaded } = useCart();

return ( <Link
   href="/cart"
   className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium"
 >
Cart ({isCartLoaded ? totalItems : "..."}) </Link>
);
}
