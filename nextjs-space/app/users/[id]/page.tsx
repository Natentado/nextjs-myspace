import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface UserProfileProps {
    params: {
        id: string;
    };
};

const UserProfile = async ({params}: UserProfileProps) => {
    const user = await prisma.user.findUnique({where: {id: params.id}});
    const {name, bio, image} = user ?? {};

    return (
        <main>
            <div>
                <h1>{name}</h1>

                <img
                    width={300}
                    src={image ?? '/mememan.webp'}
                    alt={`${name}'s profile`}
                    />

                <h3>Bio</h3>
                <p>{bio}</p>
            </div>
        </main>
    )
};

export default UserProfile;

export const generateMetadata = async ({params}: UserProfileProps): Promise<Metadata> => {
    const user = await prisma.user.findUnique({where: {id: params.id}});
    return { title: `User profile of ${user?.name}`};
};