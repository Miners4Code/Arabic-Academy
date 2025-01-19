"use server";

import { LoginSchema } from "@/schema";
import { z } from "zod";
import { AuthError } from "next-auth";
import { signIn } from '@/auth';
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

    // Sign in and redirect
    await signIn("credentials", {
      email,
      password,
    });
    
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "كلمه المرور خاطئه حاول مره اخرى" };
        default:
          return { error: "حدث غطأ أثناء تسجيل الدخول" };
      }
    }
    
    throw error;
  }
};