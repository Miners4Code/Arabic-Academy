import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { getAccountById } from "./data/accounts";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (session.user) {
        session.user.firstName = token.firstName;
        session.user.secondName = token.secondName;
        session.user.country = token.country;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserById(token.sub);
      console.log('existingUser');
      console.log(existingUser);
      if (!existingUser) return token;
      const existingAccount = await getAccountById(existingUser.id);
      console.log(existingAccount)
      token.firstName = existingUser.firstname;
      token.secondName = existingUser.secondname;
      token.country = existingUser.country;
      token.email = existingUser.email;
      token.name = existingUser.name;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
