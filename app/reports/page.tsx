import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/appSidebar"
import { Reports } from "@/components/reports/reports"

export default function Page() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <Reports />
      </SidebarInset>
    </SidebarProvider>
  )
}