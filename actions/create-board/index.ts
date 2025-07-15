import { db } from "@/lib/db";

import { InputType, ReturnType } from "./types";
import { auth } from "@clerk/nextjs/server";
import { boardsTable } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = await auth();

  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }

  const { title } = data;

  let board;
  try {
    [board] = await db.insert(boardsTable).values({ title }).returning();
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to create.",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
