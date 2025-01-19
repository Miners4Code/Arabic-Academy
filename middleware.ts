import NextAuth from "next-auth"
import { NextResponse } from "next/server";
import authConfig from "./auth.config"


const { auth } = NextAuth(authConfig);


import {
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
    authRoutes,
} from "@/routes"
export default auth ((req) => { 
    const { nextUrl }  = req;
    const isLoggedIn = !!req.auth;
    const url = req.nextUrl.clone();

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);


    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL (DEFAULT_LOGIN_REDIRECT,url));
        }
        return;
    }

    if (!isLoggedIn && !isPublicRoute) {
        return NextResponse.redirect(new URL ("/",url));
    }

    return;
    
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
      ],
}