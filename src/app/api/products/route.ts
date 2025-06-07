import { NextResponse } from "next/server";
import { productTable } from "@/db/schema";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { product_name, product_price, user_id } = body;

  await db.insert(productTable).values({
    product_name,
    product_price,
    user_id ,
  });

  return NextResponse.json({ message: "Product added successfully" });
}

export async function GET() {
  const products = await db.select().from(productTable).all();

  return NextResponse.json(products);
}