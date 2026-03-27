import React from "react"
import DashboardLayout from "../../components/shared/sideBar"
import { Champions } from "@/components/champion/champions"

export default function Page() {
  return (
    <DashboardLayout children={<Champions />}/>
  )
}