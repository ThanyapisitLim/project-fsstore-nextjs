import { eq, and } from "drizzle-orm";
import { NextResponse } from "next/server";
import { usersTable } from "@/db/schema";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const { user_email, user_password } = await request.json();

  const result = await db
    .select()
    .from(usersTable)
    .where(
      and(
        eq(usersTable.user_email, user_email),
        eq(usersTable.user_password, user_password)
      )
    );

  const user = result[0];

  if (user) {
    return NextResponse.json({ success: true, user_name: user.user_name });
  } else {
    return NextResponse.json({ success: false, message: "Invalid credentials" });
  }
}
