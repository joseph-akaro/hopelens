
"use client"

import React from 'react'
import  Link  from 'next/link'
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from '../ui/sidebar'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../ui/collapsible'


interface sideMenuProps {
    title?: string | null;
    subItems?: { title: string; routeLink?: string; itemIcon?: React.ReactNode }[];
}

export const SideMenu = ({title, subItems} : sideMenuProps) => {

  return (
     <div className="flex flex-col gap-2">
        <SidebarMenuItem className='list-none p-0 m-0 w-full'>
          <Collapsible defaultOpen={true} className="w-full">
            <CollapsibleTrigger className="w-full h-full flex items-center hover:bg-slate-950 dark:hover:bg-muted font-medium justify-start text-xs text-muted-foreground px-4 py-2 cursor-pointer">
                {title}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  {
                    subItems?.map((item, index) => (
                      <Link key={index} href={item.routeLink ? item.routeLink : "#"} className="w-full h-full flex items-center justify-start text-slate-200 hover:bg-slate-600 rounded-md text-sm px-4 py-2">
                        <div className="mr-2 text-xs">{item.itemIcon}</div>
                        {item.title}
                      </Link>
                    ))
                  }
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        </SidebarMenuItem>
      </div>
    )
  }
