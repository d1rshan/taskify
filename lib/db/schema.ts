import { pgTable, varchar, uuid } from "drizzle-orm/pg-core";

export const boardsTable = pgTable("boards", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
});
