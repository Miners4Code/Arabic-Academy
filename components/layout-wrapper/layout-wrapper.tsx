"use client"

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface LayoutSessionWrapperProps {
    children: ReactNode;
}

export const LayoutSessionWrapper = ({ children }: LayoutSessionWrapperProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}