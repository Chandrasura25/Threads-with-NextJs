"use server"
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";
interface Params {
  text: string;
  author: string;
  path: string;
  communityId: string | null;
}
export async function createThread({
  text,
  author,
  path,
  communityId,
}: Params): Promise<void> {
  try {
    connectToDB();
    const createdThread = await Thread.create({
      text,
      author,
      community: null,
    });
    console.log(createdThread);
    await User.findByIdAndUpdate(author, {
      $push: { threads: createdThread._id },
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`);
  }
}
