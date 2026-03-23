"use client"
import React from 'react'
import { SidebarHeader, SidebarTrigger } from '../ui/sidebar'
import { ToggleTheme } from '../theme-switcher'
import { usePathname } from 'next/navigation'
import { ProjectDialog } from './projectDialog'
import { UpdatesDialog } from '../updatesDialog'

interface DashHeaderProps {
    description?: string;
    buttonvisibility?: boolean;
    button?: React.ReactNode;
}

export const DashHeader = ({...props}: DashHeaderProps) => {
    const pathname = usePathname()
    const title = pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1) || 'Dashboard'


  return (
    <div className='flex flex-col w-full h-sm'>
        <SidebarHeader className='flex flex-row w-full md:items-center justify-between border-b-2 border-muted h-16 px-4'>
               <SidebarTrigger className="mt-2 items-self-start" />
               <ToggleTheme />
        </SidebarHeader>
       <div className='flex flex-row w-full p-4 items-center justify-between gap-0'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-xl font-bold text-slate-950 dark:text-blue-800'>{title}</h1>
                <p className='text-sm text-muted-foreground'>{props.description}</p>
            </div>
           {
            title == "Projects" ? (<ProjectDialog button={props.button} buttonvisibility={props.buttonvisibility}/>) : (<UpdatesDialog button={props.button} buttonvisibility={props.buttonvisibility}/>)
           }
       </div>
    </div>
  )
}
