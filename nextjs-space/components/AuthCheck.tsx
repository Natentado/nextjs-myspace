"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

export const AuthCheck = ({children}: {children: ReactNode}) => {
    const { data: session, status} = useSession();

    if(status !== "authenticated"){
        return <></>;
    };

    return <>{children}</>;
};

export default AuthCheck;