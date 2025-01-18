export type ExtendUser = DefaultSession["user"] & {
    id?: string;
    firstName?: string;
    secondName?: string;
    country?: string;
    email?: string;
    name?: string;
}

declare module "next-auth" {
    interface Session {
        user: ExtendUser;
    }
}