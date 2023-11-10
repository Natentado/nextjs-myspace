import style from "./style.module.scss";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession();

    if(!session){
        redirect("/api/auth/signin");
    };

    return (
        <main>
            Dashboard
        </main>
    )
};

export default Dashboard;