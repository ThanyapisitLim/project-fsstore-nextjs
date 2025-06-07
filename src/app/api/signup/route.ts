import { NextResponse } from "next/server";
import { usersTable } from "@/db/schema";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { user_name, user_email, user_password } = body;

  await db.insert(usersTable).values({
    user_name,
    user_email,
    user_password,
  });

  return NextResponse.json({ message: "User added successfully" });
}

export async function GET() {
  const users = await db.select().from(usersTable).all();
  return NextResponse.json(users);
}
