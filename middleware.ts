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
    /*
     * Match all request paths except:
     * 1. _next/static (static files)
     * 2. _next/image (image optimization files)
     * 3. favicon.ico (favicon file)
     * 4. public folder files
     * 5. public assets
     * But include:
     * 1. API routes
     * 2. Authentication routes
     */
    '/((?!_next/static|_next/image|favicon.ico|public/|assets/).*)',
    '/api/:path*',
  ]
};
