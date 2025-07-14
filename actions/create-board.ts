"use server";
import { db } from "@/lib/db";
import { boardsTable } from "@/lib/db/schema";
import z from "zod";
import { revalidatePath } from "next/cache";

const CreateBoard = z.object({
  title: z.string().min(1),
});

export const submitForm = async (formData: FormData) => {
  const { title } = CreateBoard.parse({
    title: formData.get("title"),
  });

  await db.insert(boardsTable).values({ title });

  revalidatePath("/organization/org_2yMnb23xUKgv2XAy4Z6RoQJYiib");
};
