"use client"
export const dynamic = "force-dynamic"

import { NeonAuthUIProvider } from "@neondatabase/auth/react/ui"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"
import { authClient } from "@/lib/auth/client"


export function Providers({ children }: { children: ReactNode }) {

    const router = useRouter()

    return (
        <NeonAuthUIProvider
            authClient={authClient}
            navigate={router.push}
            replace={router.replace}
            onSessionChange={() => {
                router.refresh()
            }}
            organization
            social={{
                providers: ["google"]
            }}
            redirectTo="/"
            Link={Link}
            credentials={{
                forgotPassword: true,
            }}
            signUp={{
                fields : ["name"],
            }}
        >
            {children}
        </NeonAuthUIProvider>
    )
}