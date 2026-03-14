import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { TopBar } from "@/components/side-card"
import { SideMenu } from "./side-menu"
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
  FileBraces
} from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="bg-background dark:bg-muted">
        <TopBar />
      </SidebarHeader>

      <SidebarContent className="text-sm bg-cyan-900 dark:bg-muted p-4">
        <SideMenu title="RESEARCH" subItems={[{ title: "Projects" , itemIcon: <FolderKanban size={18}/>}, { title: "Updates" , itemIcon: <FileChartColumnIncreasing size={18}/>}, { title: "Reports" , itemIcon: <ChartColumn size={18}/> }]} />
        <SideMenu title="COUNTRIES" subItems={[{ title: "Country Overview" , itemIcon: <Earth size={18}/>}, { title: "Champions" , itemIcon: <Users size={18}/>}, { title: "Learning Hub" , itemIcon: <ZapIcon size={18}/> }]} />
        <SideMenu title="COMMUNICATIONS" subItems={[{ title: "Messages" , itemIcon: <MessageSquareText size={18}/>}, { title: "Automations" , itemIcon: <BotMessageSquare size={18}/>}, { title: "Templates" , itemIcon: <FileBraces size={18}/> }]} />
        <SideMenu title="MONITORING" subItems={[{ title: "Feeds" , itemIcon: <Activity size={18}/>}, { title: "Responses" , itemIcon: <Clock size={18}/>}, { title: "Tracker" , itemIcon: <SquareCheck size={18}/> }]} />
        <SideMenu title="ADMINISTRATION" subItems={[{ title: "Users" , itemIcon: <User size={18}/>}, { title: "Settings" , itemIcon: <Settings size={18}/>}, { title: "System Overview" , itemIcon: <ZapIcon size={18}/> }]} />
      </SidebarContent>
    </Sidebar>
  )
}