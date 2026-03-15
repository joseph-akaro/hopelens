import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Updates } from "@/components/updates/updates"

export default function Page() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <Updates />
      </SidebarInset>
    </SidebarProvider>
  )
}