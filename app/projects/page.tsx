import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/shared/appSidebar"
import Projects  from "@/components/project/projecstHeader"

export default function Page() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <Projects />
      </SidebarInset>
    </SidebarProvider>
  )
}