import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
} from "@/components/ui/sidebar"
import { Map } from "lucide-react"

import { SideCard }  from "@/components/side-card"

export function AppSidebar() {
  return (
    <Sidebar>
        <SideCard icon={<Map />} name="OneHope Pulse" subtitle="Eastern Africa" />
        <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  )
}