import mongoose from "mongoose";
import dbConnect from "@/lib/mongodb";
import Product from "@/models/Product";

const categoryAccents = {
  accessories: "from-amber-400 to-orange-500",
  laptops: "from-cyan-500 to-blue-600",
  smartphones: "from-fuchsia-500 to-violet-600",
};

function formatProduct(product) {
  return {
    ...product,
    _id: product._id.toString(),
    accent:
      categoryAccents[product.category] ??
      "from-slate-500 to-slate-700",
  };
}

export async function getProducts() {
  await dbConnect();
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();

  return products.map(formatProduct);
}

export async function getProductById(id) {
  if (!mongoose.isObjectIdOrHexString(id)) {
    return null;
  }

  await dbConnect();
  const product = await Product.findById(id).lean();

  return product ? formatProduct(product) : null;
}
