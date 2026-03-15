import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppMain } from "@/components/app-main"
import { DashHeader } from "@/components/dash-header"

export default function Page() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashHeader description='Research coordination overview' />
        <AppMain />
      </SidebarInset>
    </SidebarProvider>
  )
}