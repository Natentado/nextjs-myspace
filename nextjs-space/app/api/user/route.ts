import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

export const PUT = async (req: Request) => {
    const session = await getServerSession(authOptions);
    const currentUserEmail = session?.user?.email!;

    const data = await req.json();
    data.age = +data.age;

    const user = await prisma.user.update({where: {
        email: currentUserEmail,
    },
        data,
    });

    NextResponse.json(user);
};