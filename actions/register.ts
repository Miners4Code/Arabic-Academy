"use server";

import { SignupSchema } from "@/schema";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { z } from "zod";
import { getUserByEmail } from "@/data/user";

export const Register = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existUser = await getUserByEmail(email);

  if (existUser) {
    return { error: "الايميل مستخدم بالفعل" };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return { success: "Registered", email };
};
