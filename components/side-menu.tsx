
import React from 'react'
import Link from 'next/link';
import { SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel } from './ui/sidebar';
import { LayoutDashboard } from 'lucide-react';

interface sideMenuProps {
    icon?: React.ReactNode;
    title?: string;
    routeLink?: string;
}

export const SideMenu = ({icon, title, routeLink} : sideMenuProps) => {
  return (
    <SidebarGroup className='p-2'>
        <SidebarGroupLabel className='flex gap-1 flex-row justify-center'>
            <Link href={`${routeLink}`} className='flex items-start gap-2 justify-start hover:bg-slate-600 w-full p-2 rounded-md'>
                <span className='w-2 h-2  text-sm text-slate-100 mx-4'>{icon}</span>
                <span className='text-sm font-medium text-slate-100'>{title}</span>
            </Link>
        </SidebarGroupLabel>
        <SidebarGroupContent></SidebarGroupContent>
    </SidebarGroup>
  )
}