import React from "react"
import Updates from "@/components/updates/updates"
import DashboardLayout from "@/components/shared/sideBar"

export default function Page() {
  return (
    <DashboardLayout children={<Updates />}/>
  )
}