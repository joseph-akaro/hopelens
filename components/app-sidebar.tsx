"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
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
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon, Map, GraduationCap, UserStarIcon, Earth, BarChart3, Rss, TrendingUpIcon, ClockFadingIcon, BookTemplate, BotMessageSquare, MessageSquareTextIcon, RepeatIcon } from "lucide-react"

const data = {
  user: {
    name: "Joseph Akaro",
    email: "joseph@hopelens.net",
    avatar: "/onehope.png",
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
      title: "Map View",
      url: "#",
      icon: (
        <Map
        />
      ),
    },
       {
      title: "Projects",
      url: "#",
      icon: (
        <FileChartColumnIcon
        />
      ),
    },
      {
        title: "Updates",
        url: "#",
        icon: (
          <RepeatIcon
          />
      ),
    },
      {
        title: "Reports",
        url: "#",
        icon: (
        <BarChart3
        />
      ),
    },
      {
      title: "Countries",
      url: "#",
      icon: (
        <Earth
        />
      ),
    },
          {
      title: "Champions",
      url: "#",
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
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
