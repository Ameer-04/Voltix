import { NextResponse } from "next/server";
import { getProducts } from "@/lib/product-data";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      products: await getProducts(),
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
      },
      { status: 500 }
    );
  }
}