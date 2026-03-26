import React from "react"
import { AdminView } from "@/components/views/adminView"
import DashboardLayout from "@/components/shared/sideBar"

export default function Page() {
  return (
    <DashboardLayout  children={<AdminView />}/>
  )
}