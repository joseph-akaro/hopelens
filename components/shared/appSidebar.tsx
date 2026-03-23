import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { TopBar } from "@/components/shared/sideCard"
import { SideMenu } from "./sideMenu"
import {
  FolderKanban,
  FileChartColumnIncreasing, 
  ChartColumn,
  Earth,
  Users,
  Settings,
  ZapIcon,
  User,
  Activity,
  Clock,
  SquareCheck,
  BotMessageSquare,
  MessageSquareText,
  FileBraces,
  Globe,
  LayoutDashboard,
  Map,
} from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-slate-950 dark:bg-muted">
        <TopBar />
      </SidebarHeader>

      <SidebarContent className="text-sm bg-slate-950 dark:bg-muted p-4">
        <Link href="/" className="w-full h-sm flex items-center justify-start text-xs px-4 mb-1 text-slate-200">
          <LayoutDashboard  size={18} className="mr-2"/>
          Dashboard
        </Link>
        <Link href="/" className="w-full h-sm flex items-center justify-start text-xs px-4 py-1 mb-2 text-slate-200">
          <Map  size={18} className="mr-2"/>
          Map View
        </Link>
        <SideMenu title="PROJECTS" subItems={[{ title: "Projects" , routeLink: "/projects", itemIcon: <FolderKanban size={18}/>}, { title: "Updates" , routeLink: "/updates", itemIcon: <FileChartColumnIncreasing size={18}/>}, { title: "Reports" , routeLink: "/reports", itemIcon: <ChartColumn size={18}/> }]} />
        <SideMenu title="COUNTRIES" subItems={[{ title: "Country Overview" , routeLink: "/overview", itemIcon: <Earth size={18}/>}, { title: "Champions" , routeLink: "/champions", itemIcon: <Users size={18}/>}, { title: "Learning Hub" , routeLink: "/learning-hub", itemIcon: <ZapIcon size={18}/> }]} />
        <SideMenu title="COMMUNICATIONS" subItems={[{ title: "Messages" , routeLink: "/messages", itemIcon: <MessageSquareText size={18}/>}, { title: "Automations" , routeLink: "/automations", itemIcon: <BotMessageSquare size={18}/>}, { title: "Templates" , routeLink: "/templates", itemIcon: <FileBraces size={18}/> }]} />
        <SideMenu title="MONITORING" subItems={[{ title: "Feeds" , routeLink: "/monitoring/feeds", itemIcon: <Activity size={18}/>}, { title: "Responses" , routeLink: "/monitoring/responses", itemIcon: <Clock size={18}/>}, { title: "Tracker" , routeLink: "/tracker", itemIcon: <SquareCheck size={18}/> }]} />
        <SideMenu title="ADMINISTRATION" subItems={[{ title: "Users" , routeLink: "/users", itemIcon: <User size={18}/>}, { title: "Settings" , routeLink: "/settings", itemIcon: <Settings size={18}/>}, { title: "System Overview" , routeLink: "/system-overview", itemIcon: <ZapIcon size={18}/> }]} />
      </SidebarContent>
    </Sidebar>
  )
}