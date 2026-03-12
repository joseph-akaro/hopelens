import React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppMain } from "@/components/app-main"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <AppMain />
    </SidebarProvider>
  )
}