export const dynamic = 'force-dynamic';

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, CircleHelpIcon, FileChartColumnIcon, GraduationCap, UserStarIcon, BarChart3,Handshake, Building2Icon, ToolCase, MessageSquareTextIcon, Settings } from "lucide-react"

import { getCurrentUserAction } from "@/app/actions/user-action"

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const user = await getCurrentUserAction() 

  const data = {
  user: {
    name: user?.name || "John Doe",
    email: user?.email ||"johndoe@example.com",
    avatar: user?.image || "./onehope.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Projects",
      url: "/projects",
      icon: (
        <FileChartColumnIcon/>
      ),
    },
    {
      title: "Users",
      url: "/users",
      icon: (
        <UserStarIcon/>
      ),
    },
       {
      title: "Partners",
      url: "/partners",
      icon: (
        <Handshake/>
      ),
    },
      {
        title: "Departments",
        url: "/departments",
        icon: (
          <Building2Icon/>
      ),
    },
      {
        title: "Reports",
        url: "/reports",
        icon: (
        <BarChart3
        />
      ),
    },
      {
      title: "Assets",
      url: "/assets",
      icon: (
        <ToolCase/>
      ),
    },
          {
      title: "Communications",
      url: "/communications",
      icon: (
        <MessageSquareTextIcon/>
      ),
    },
          {
      title: "Knowledge Base",
      url: "#",
      icon: (
        <GraduationCap/>
      ),
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: (
        <Settings
        />
      ),
    },
    {
      title: "Support",
      url: "#",
      icon: (
        <CircleHelpIcon
        />
      ),
    },
  ],
}

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="/" />}
            >
              <img src="/onehope.png" alt="Onehope primary icon" className="size-5!" />
              <span className="text-base font-semibold">HOPELENS</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} role={user.role} />
        <NavSecondary items={data.navSecondary} className="mt-auto cursor-pointer" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
