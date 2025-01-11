"use server";

import { SignupSchema } from "@/schema";
import { error } from "console";
import { z } from "zod";


export const Register = async (values: z.infer<typeof SignupSchema>) => {
    const validatedFields = SignupSchema.safeParse(values);

    if(!validatedFields.success){
        return{error: "invalid fields" }
    }
    return{success: "Regestred" }
}