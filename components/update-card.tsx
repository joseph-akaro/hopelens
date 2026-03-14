import React from 'react'
import { Card, CardAction, CardTitle, CardHeader, CardFooter } from './ui/card'
import { Dot } from "lucide-react"

interface UpdateCardProps {
    title: string;
    status: string;
    country?: string;
    project?: string;
    timeAgo?: string;
}

export const UpdateCard = ({title, status, country, project, timeAgo}: UpdateCardProps) => {
  return (
    <div className='flex flex-col h-sm w-full p-4 gap-1 rounded-lg border-1 text-foreground hover:bg-muted transition-colors'>
       <div className='flex items-center justify-start gap-4'>
            <h1 className='text-md font-semibold text-foreground'>{title}</h1>
            <div className='bg-green-50 h-sm w-18 rounded-md border border-green-500 flex items-center justify-center'>
                <p className='text-sm text-green-500'>{status}</p>
            </div>
       </div>
        <div className="flex w-full sm:gap-1 sm:text-sm text-xs flex-row items-center justify-start text-muted-foreground">
            <p className='text-xs '>{country}</p>
            <Dot />
            <p className='text-xs'>{project}</p>
            <Dot />
            <p className='text-xs'>{timeAgo}</p>
        </div>
    </div>
  )
}
