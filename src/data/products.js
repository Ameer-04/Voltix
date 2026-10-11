export const products = [
  {
    id: "laptop-pro",
    name: "Laptop Pro",
    category: "laptops",
    price: 1299,
    description: "A fast, focused laptop for demanding work and creative projects.",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "wireless-headphones",
    name: "Wireless Headphones",
    category: "accessories",
    price: 149,
    description: "Comfortable, clear wireless audio for workdays and commutes.",
    accent: "from-amber-400 to-orange-500",
  },
  {
    id: "smartphone-x",
    name: "Smartphone X",
    category: "smartphones",
    price: 799,
    description: "A bright, capable everyday phone with all-day battery life.",
    accent: "from-fuchsia-500 to-violet-600",
  },
];

export function formatPrice(price) {
  return `$${price.toLocaleString("en-US")}`;
}