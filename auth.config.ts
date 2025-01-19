import bcrypt from "bcryptjs"

import type { NextAuthConfig } from "next-auth"

import Credentials  from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { LoginSchema } from "@/schema"
import { getUserByEmail } from "./data/user";


export default {
    providers: [
      Credentials({
        async authorize(credentials) {
          try {
            const validatedFields = LoginSchema.safeParse(credentials);
            
            if (!validatedFields.success) {
              console.log("Validation failed:", validatedFields.error);
              return null;
            }
  
            const { email, password } = validatedFields.data;
            const user = await getUserByEmail(email);
  
            if (!user || !user.password) {
              console.log("No user found or no password");
              return null;
            }
  
            const matchedPassword = await bcrypt.compare(password, user.password);
            console.log("Password match:", matchedPassword);
  
            if (matchedPassword) {
              return user;
            }
  
            return null;
          } catch (error) {
            console.error("Authorization error:", error);
            return null;
          }
        }
      })
    ],
    debug: true,
  } satisfies NextAuthConfig
