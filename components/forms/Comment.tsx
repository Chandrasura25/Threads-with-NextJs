"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem, 
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.action";
interface Props{
    threadId:string;
    currentUserImg:string;
    currentUserId:string;
}
const Comment =({threadId, currentUserImg, currentUserId}:Props)=>{
    return(
        <div>
            <h1 className='text-white'>Comment Form</h1>
        </div>
    )
}
export default Comment;