import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { TopBar } from "@/components/side-card"
import { SideMenu } from "./side-menu"
import {
  LayoutDashboard,
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
      <SidebarHeader>
        <TopBar />
      </SidebarHeader>

      <SidebarContent className="text-sm">
        <SideMenu icon={<LayoutDashboard />} title="DASHBOARD" />
        <SideMenu title="RESEARCH" subItems={[{ title: "Projects" , itemIcon: <FolderKanban />}, { title: "Updates" , itemIcon: <FileChartColumnIncreasing />}, { title: "Reports" , itemIcon: <ChartColumn /> }]} />
        <SideMenu title="COUNTRIES" subItems={[{ title: "Country Overview" , itemIcon: <Earth />}, { title: "Champions" , itemIcon: <Users />}, { title: "Learning Hub" , itemIcon: <ZapIcon /> }]} />
        <SideMenu title="COMMUNICATIONS" subItems={[{ title: "Messages" , itemIcon: <MessageSquareText />}, { title: "WhatsApp Automations" , itemIcon: <BotMessageSquare />}, { title: "Message Templates" , itemIcon: <FileBraces /> }]} />
        <SideMenu title="MONITORING" subItems={[{ title: "Activity Feeds" , itemIcon: <Activity />}, { title: "Delayed Responses" , itemIcon: <Clock />}, { title: "Response Tracker" , itemIcon: <SquareCheck /> }]} />
        <SideMenu title="ADMINISTRATION" subItems={[{ title: "Users" , itemIcon: <User />}, { title: "Settings" , itemIcon: <Settings />}, { title: "System Overview" , itemIcon: <ZapIcon /> }]} />
      </SidebarContent>
    </Sidebar>
  )
}