import React from "react"
import { Reports } from "@/components/reports/reports"
import DashboardLayout from "@/components/shared/sideBar"

export default function Page() {
  return (
    <DashboardLayout children={<Reports />}/>
  )
}