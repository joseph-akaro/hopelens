import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
} from "@/components/ui/sidebar"
import { LayoutDashboard, Search, Map, FolderKanban, ChartColumnBig } from "lucide-react"

import { SideCard }  from "@/components/side-card"
import { SideMenu } from "@/components/side-menu"

export function AppSidebar() {
  return (
    <Sidebar>
        <SideCard icon={<Search />} name="HopeLens" subtitle="Research Tool" />
        <SidebarContent className="bg-slate-800 pt-4">
          <SideMenu icon={<LayoutDashboard />} routeLink={"/"} title={"Dashboard"}/>
          <SideMenu icon={<Map />} routeLink={"/mapview"} title={"Map View"}/>
          <SideMenu icon={<FolderKanban />} routeLink={"/projects"} title={"Projects"}/>
          <SideMenu icon={<ChartColumnBig />} routeLink={"/updates"} title={"Updates"}/>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  )
}