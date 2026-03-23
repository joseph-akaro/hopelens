import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/appSidebar"
import { AdminView } from "@/components/views/adminView"
import { DashHeader } from "@/components/shared/subHeader"

export default function Page() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <AdminView />
      </SidebarInset>
    </SidebarProvider>
  )
}