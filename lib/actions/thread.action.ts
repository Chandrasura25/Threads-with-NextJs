import Thread from "../models/thread.model";
import { connectToDB } from "../mongoose";
interface Params {
    text: string,
    author: string,
    path: string,
    communityId: string|null,
}
export async function createThread({ text, author, path, communityId }: Params): Promise<void> {
    try {
        connectToDB();
        const createdThread = await Thread.create();
    } catch (error: any) {
        throw new Error(`Failed to create thread: ${error.message}`);
    }
}