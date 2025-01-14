"use server";

import { CreateProfileSchema } from "@/schema";
import { db } from "@/lib/db";
import { z } from "zod";

export const Create = async (values: z.infer<typeof CreateProfileSchema>, email: string) => {
  const validatedFields = CreateProfileSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { firstname, secondname, username, country } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return { error: "User not found" };
  }

  const updatedUser = await db.user.update({
    where: { email },
    data: {
      firstname,
      secondname,
      name: username,
      country,
      updatedAt: new Date(),
    },
  });

  return { success: "Profile updated successfully", user: updatedUser };
};
