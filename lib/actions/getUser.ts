"use client"

import { useEffect } from "react"
import { User } from "../schema"

type UserType = {
    user: User;
}

export const getUsers = () => {
    
    useEffect(() => {
        async function getUser(): Promise<UserType>{
            const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL!}/api/users`, {
                cache: "no-store",
            })

            if(!res.ok) throw new Error("Failed to fetch users")
            

            return res.json()
        }

        getUser()
    },[])
}