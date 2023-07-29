"use client"
import { findUserById } from "@/components-with-logic/AddPostButton/ServerFunctions"
import { User } from "@/contexts/UserContextProvider"
import { useParams } from "next/navigation"
import { useState } from "react"

const UserProfilePage = () => {
    const [user, setUser] = useState<User>()
    const userId = +useParams().userId
    findUserById(userId).then((user) => setUser(user))
    console.log(user);
    
    return <>

    </>
}

export default UserProfilePage