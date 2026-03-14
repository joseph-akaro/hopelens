
"use client"

import React from 'react'
import  Link  from 'next/link'
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from './ui/sidebar'
import { useSidebar } from "@/components/ui/sidebar"


interface sideMenuProps {
    icon?: React.ReactNode;
    title?: string | null;
    subItems?: { title: string; routeLink?: string; itemIcon?: React.ReactNode }[];
}

export const SideMenu = ({icon, title, subItems} : sideMenuProps) => {

  return (
     <div className="flex flex-col gap-2">
        <SidebarMenuItem className='list-none p-0 m-0 w-full'>
          <SidebarMenuButton>
            <div className='flex flex-row items-center gap-2 text-slate-100 hover:text-slate-800 hover:bg-muted rounded-md px-4 py-2 w-full'>
              {icon}
              <p className='text-md'>{title}</p>
            </div>
          </SidebarMenuButton>
          <SidebarMenuSub>
            <SidebarMenuSubItem>
              {
                subItems?.map((item, index) => (
                  <Link key={index} href={item.routeLink ? item.routeLink : "#"} className="w-full h-full flex items-center justify-start text-sm text-slate-200 hover:text-slate-800 hover:bg-muted rounded-md px-4 py-2">
                    <div className="mr-2 text-xs">{item.itemIcon}</div>
                    {item.title}
                  </Link>
                ))
              }
            </SidebarMenuSubItem>
          </SidebarMenuSub>
      </SidebarMenuItem>
     </div>
  )
}
