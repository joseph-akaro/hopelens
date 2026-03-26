import React from "react"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Projects  from "@/components/project/projecstHeader"
import DashboardLayout from "../../components/shared/sideBar"

export default function Page() {
  return (
    <DashboardLayout children={<Projects />}/>
  )
}