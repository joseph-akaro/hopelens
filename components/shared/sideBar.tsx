"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import { usePathname } from "next/navigation"

import {
  Users,
  Settings,
  Blend,
  FolderKanban,
  Rss,
  ChartNoAxesCombined,
  Earth,
  GraduationCap,
  Bot,
  FileChartColumn,
  Activity,
  LogOut,
  MessagesSquare,
  FileTypeCornerIcon,
  FileClockIcon,
  LayoutDashboard
} from "lucide-react"
import { redirect } from "next/navigation"
import Link from "next/link"

const menuItems = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Projects", href: "/projects", icon: FolderKanban },
  { title: "Updates", href: "/updates", icon: FileChartColumn },
  { title: "Reports", href: "/reports", icon: ChartNoAxesCombined},
  { title: "Country", href: "/country", icon: Earth },
  { title: "Champions", href: "/champions", icon: Users },
  { title: "Learning Hub", href: "/learning-hub", icon: GraduationCap},
  { title: "Messages", href: "/messages", icon: MessagesSquare },
  { title: "WhatsApp Automations", href: "/automation", icon: Bot },
  { title: "Message Templates", href: "/templates", icon: FileTypeCornerIcon},
  { title: "Activity Feeds", href: "/feeds", icon: Rss },
  { title: "Delayed Responses", href: "/delayed", icon: FileClockIcon },
  { title: "Response Tracker", href: "/tracker", icon: Activity},
  { title: "Settings", href: "/settings", icon: Settings},
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/40">

        {/* SIDEBAR */}
        <Sidebar collapsible="icon" className="border-r">
          
          {/* HEADER */}
          <SidebarHeader className="h-14 flex flex-row mb-2 bg-slate-950 items-center gap-3 px-4 group-data-[collapsible=icon]:justify-center">
            <Blend className="h-10 w-10 p-2 text-primary animate-pulse shrink-0 text-slate-50 dark:invert bg-blue-600 rounded-md" />
            <span className="text-2xl text-muted-foreground font-semibold tracking-tight group-data-[collapsible=icon]:hidden">
              HOPELENS
            </span>
          </SidebarHeader>

          {/* CONTENT */}
           <SidebarContent className="px-1">
              <SidebarMenu
                className="
                  space-y-1

                  [&_[data-sidebar=menu-button]]:relative
                  [&_[data-sidebar=menu-button]]:pl-4
                  [&_[data-sidebar=menu-button]]:pr-3
                  [&_[data-sidebar=menu-button]]:py-2.5
                  [&_[data-sidebar=menu-button]]:text-[15px]
                  [&_[data-sidebar=menu-button]]:font-medium
                  [&_[data-sidebar=menu-button]]:rounded-md
                  [&_[data-sidebar=menu-button]]:transition-all
                  [&_[data-sidebar=menu-button]]:duration-200

                  hover:[&_[data-sidebar=menu-button]]:bg-muted/50

                  [&_[data-sidebar=menu-button][data-active=true]]:bg-primary/10
                  [&_[data-sidebar=menu-button][data-active=true]]:text-primary

                  group-data-[collapsible=icon]:[&_[data-sidebar=menu-button]]:pl-0
                  group-data-[collapsible=icon]:[&_[data-sidebar=menu-button]]:justify-center
                "
              >
                {menuItems.map((item) => {
                  const isActive = pathname === item.href

                  return (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton
                        tooltip={item.title}
                        data-active={isActive}
                      >
                        <Link href={item.href} className="flex items-center gap-3">

                          {/* 🔥 Animated Left Indicator */}
                          <span
                            className={`
                              absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-md bg-primary
                              transition-all duration-300
                              ${isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}
                              group-data-[collapsible=icon]:hidden
                            `}
                          />

                          {/* Icon */}
                          <item.icon className="h-5 w-5 shrink-0" />

                          {/* Label */}
                          <span className="group-data-[collapsible=icon]:hidden">
                            {item.title}
                          </span>

                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarContent>

          {/* FOOTER */}
          <SidebarFooter className="p-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Logout" onClick={() => redirect('/auth/sign-out')}>
                  <LogOut className="h-5 w-5 shrink-0" />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Log Out
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        {/* MAIN AREA */}
        <div className="flex flex-1 flex-col">

          {/* HEADER */}
          <header className="h-14 flex items-center gap-3 border-b bg-background px-4">
            <SidebarTrigger />
            <h1 className="text-base font-semibold tracking-tight">
              Dashboard
            </h1>
          </header>

          {/* CONTENT */}
          <main className="flex-1 p-6">
            {children}
          </main>

        </div>
      </div>
    </SidebarProvider>
  )
}