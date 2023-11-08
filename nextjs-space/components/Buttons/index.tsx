"use client";
import style from "./style.module.scss";
import { signOut, signIn, useSession  } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

export const SignInButton = () => {
    const { data: session, status } = useSession();
    console.log(session, status)
    if(status === "loading"){
        return (
            <span style={{minWidth: "158.66px"}} />
        );
    };

    if(status === "authenticated"){
        return (
            <span className={style.signOutBtn}>
                <Link href="/dashboard" className={style.userAvatar}>
                    <Image
                        src={session.user?.image ?? "https://picsum.photos/200/300"}
                        alt="User name"
                        width={36}
                        height={36}
                        objectFit="50%"
                    />
                </Link>
                <Button onClick={() => signOut()}>Sign Out</Button>
            </span>
        )
    };

    return <Button onClick={() => signIn()}>Sign In</Button>;
};

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
};

export const Button = ({children, ...props}: Button) => {
    return (
        <button 
            className={style.buttonComponent} 
            {...props}
        >
            {children}
        </button>
    );
};