"use client"
import React from 'react'
import { SidebarHeader, SidebarTrigger } from './ui/sidebar'
import { ToggleTheme } from './theme-switcher'
import { usePathname } from 'next/navigation'
import { ProjectDialog } from './projectDialog'

interface DashHeaderProps {
    description?: string;
    buttonTitle?: string;
    buttonvisibility?: boolean;
}

export const DashHeader = ({ description, buttonvisibility }: DashHeaderProps) => {
    const pathname = usePathname()
    const title = pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1) || 'Dashboard'
  return (
    <div className='flex flex-col w-full h-md'>
        <SidebarHeader className='flex flex-row w-full md:items-center justify-end border-b-2 border-muted h-16 px-4'>
               <SidebarTrigger className="mt-2 md:hidden items-self-start" />
               <ToggleTheme />
        </SidebarHeader>
       <div className='flex flex-row w-full p-4 items-center justify-between'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold text-slate-950 dark:text-blue-800'>{title}</h1>
                <p className='text-sm text-muted-foreground'>{description}</p>
            </div>
           <ProjectDialog buttonTitle={`New ${title}`} buttonvisibility={buttonvisibility}/>
       </div>
    </div>
  )
}
