import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title is too short.",
    })
    .min(1, {
      message: "Title is required",
    }),
});
