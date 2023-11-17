import style from "./style.module.scss";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import ProfileForm from "./ProfileForm";

const Dashboard = async () => {
    const session = await getServerSession(authOptions);

    if(!session){
        redirect("/api/auth/signin");
    };

    const currentUserEmail = session.user?.email!;
    const user = prisma.user.findUnique({where: {email: currentUserEmail}});

    return (
        <main>
            <h1>Dashboard</h1>
            <ProfileForm user={user} />
        </main>
    )
};

export default Dashboard;