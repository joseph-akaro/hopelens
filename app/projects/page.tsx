import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SubDashboard } from "@/components/shared/subDashboard"

export default function Page() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <SubDashboard description="Manages Projects within the region" buttonOn={true}/>
      </SidebarInset>
    </SidebarProvider>
  )
}