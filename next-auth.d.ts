export type ExtendUser = DefaultSession["user"] & {
}

declare module "next-auth" {
    interface Session {
        user: ExtendUser;
    }
}