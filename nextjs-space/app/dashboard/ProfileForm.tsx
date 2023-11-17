"use client";

import { FormEvent } from "react";

const ProfileForm = ({user}: any) => {
    
    const updateUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const body = {
            name: formData.get("name"),
            bio: formData.get("bio"),
            age: formData.get("age"),
            image: formData.get("image"),
        };

        const res = await fetch("/api/user", {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });

        await res.json();
    };

    return (
        <div>
            <h2>Edit your profile</h2>
            <form onSubmit={updateUser}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" defaultValue={user?.name??""} />
                <label htmlFor="bio">Bio</label>
                <textarea 
                    name="bio"
                    cols={30}
                    rows={10}
                    defaultValue={user?.bio??""}
                />
                <label htmlFor="age">Age</label>
                <input type="text" name="age" defaultValue={user?.age??0} />
                <label htmlFor="image">Profile image URL</label>
                <input type="text" name="image" defaultValue={user?.image??""} />

                <button type="submit">Save</button>
            </form>
        </div>
    )
};

export default ProfileForm;