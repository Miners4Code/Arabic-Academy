// actions/login.ts
"use server";

import { LoginSchema } from "@/schema";
import { z } from "zod";
import { AuthError } from "next-auth";
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { redirect } from "next/navigation";
import { getUserByEmail } from "@/data/user";

export const login = async (
  values: z.infer<typeof LoginSchema>,
) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  try {
    const existingUser = await getUserByEmail(email);
    
    if (!existingUser || !existingUser.password) {
      return { error: "الايميل المكتوب غير مسجل" }
    }

    // Sign in without redirect
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // If we get here, authentication was successful
    redirect(DEFAULT_LOGIN_REDIRECT);
    
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    
    throw error;
  }
};