"use client"
import { useParams } from "next/navigation"

const UserProfilePage = () => {
    const useparams = useParams()
    console.log(useparams);
    
    return <h1>UserPage</h1>
}

export default UserProfilePage