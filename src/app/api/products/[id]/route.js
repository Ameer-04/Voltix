import { NextResponse } from "next/server";
import { getProductById } from "@/lib/product-data";

export async function GET(request, { params }) {
  try {
    // Dynamic route params are asynchronous in current Next.js.
    const { id } = await params;

    const product = await getProductById(id);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Failed to fetch product:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch product",
      },
      { status: 500 }
    );
  }
}