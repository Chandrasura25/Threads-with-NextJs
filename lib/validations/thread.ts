import * as z from "zod";
export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3,{message: "Minimum 3 characters"}).max(1000,{message: "Maximum 1000 characters"}),
  accountId: z.string().nonempty(),
});
export const CommentValidation = z.object({
    thread: z.string().nonempty().min(3,{message: "Minimum 3 characters"}),
  });
  