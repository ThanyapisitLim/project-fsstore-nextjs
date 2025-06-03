import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export const db = drizzle(
  createClient({
    url: "file:./db/Database.db", // ✅ ใช้แบบนี้แทน
    authToken: undefined, // สำหรับ local ไม่ต้องใช้ token
  })
);
