import { sql } from "drizzle-orm";
import { real, int, sqliteTable, text, primaryKey } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users", {
    user_id: int().primaryKey({ autoIncrement: true }),
    user_name: text().notNull(),
    user_email: text().notNull().unique(),
    user_password: text().notNull(),
    user_create_at: text().default(sql`CURRENT_TIMESTAMP`),
});

export const productTable = sqliteTable("product", {
    product_id: int().primaryKey({ autoIncrement: true }),
    product_name: text().notNull(),
    product_price: real().notNull(),
    product_created_at: text().default(sql`CURRENT_TIMESTAMP`),
});

export const userProductTable = sqliteTable("user_product", {
    user_id: int().notNull(),
    product_id: int().notNull(),
    purchase_date: text().default(sql`CURRENT_TIMESTAMP`),
}, (table) => ({
    pk: primaryKey(table.user_id, table.product_id),
}));
