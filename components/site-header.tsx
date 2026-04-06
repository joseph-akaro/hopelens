"use client"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-provider"
import { NotificationSheets } from "@/components/notification-sheets"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const path = usePathname().split('/')

  return (
    <header className="flex flex-row h-(--header-height) shrink-0 items-center justify-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 h-4 data-vertical:self-auto"
        />
        <h1 className="text-base font-medium">{path}</h1>
      </div>
      <div className="flex items-center justify-between align-middle sm:space-x-4 space-x-2 px-4 mr-2 lg:px-6">
        <ThemeToggle />
        <NotificationSheets />
      </div>
    </header>
  )
}
