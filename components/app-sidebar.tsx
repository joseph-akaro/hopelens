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
import { LayoutDashboardIcon, Settings2Icon, CalendarRange, CircleHelpIcon, FileChartColumnIcon, Map, GraduationCap, UserStarIcon, Earth, BarChart3, Rss, TrendingUpIcon, ClockFadingIcon, BookTemplate, BotMessageSquare, MessageSquareTextIcon, RepeatIcon } from "lucide-react"

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
      title: "Planning",
      url: "/planning",
      icon: (
        <CalendarRange
        />
      ),
    },
       {
      title: "Projects",
      url: "/projects",
      icon: (
        <FileChartColumnIcon
        />
      ),
    },
      {
        title: "Updates",
        url: "/updates",
        icon: (
          <RepeatIcon
          />
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
      title: "Countries",
      url: "/countries",
      icon: (
        <Earth
        />
      ),
    },
          {
      title: "Champions & Users",
      url: "/champions",
      icon: (
        <UserStarIcon
        />
      ),
    },
          {
      title: "Learning Hub",
      url: "#",
      icon: (
        <GraduationCap
        />
      ),
    },
              {
      title: "Messages",
      url: "#",
      icon: (
        <MessageSquareTextIcon
        />
      ),
    },
              {
      title: "WhatsApp Automation",
      url: "#",
      icon: (
        <BotMessageSquare
        />
      ),
    },
              {
      title: "Message Templates",
      url: "#",
      icon: (
        <BookTemplate
        />
      ),
    },
                  {
      title: "Activity Feeds",
      url: "#",
      icon: (
        <Rss
        />
      ),
    },
                  {
      title: "Delayed Response",
      url: "#",
      icon: (
        <ClockFadingIcon
        />
      ),
    },
                  {
      title: "Response Tracker",
      url: "#",
      icon: (
        <TrendingUpIcon
        />
      ),
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
    },
    {
      title: "Get Help",
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
              render={<a href="#" />}
            >
              <img src="/onehope.png" alt="Onehope primary icon" className="size-5!" />
              <span className="text-base font-semibold">HOPELENS</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} role={user.role} />
        {/* <NavSecondary items={data.navSecondary} className="mt-auto cursor-pointer" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
