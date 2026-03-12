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
    <Card className='flex flex-col w-full p-4 gap-2 rounded-md text-foreground hover:bg-muted transition-colors'>
       <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardAction className='bg-green-50 rounded-md border border-green-500 px-2 py-1 flex items-center justify-center'>
                <p className='text-sm text-green-500'>{status}</p>
            </CardAction>
       </CardHeader>
        <CardFooter className="gap-1 flex-row items-center justify-start text-muted-foreground">
            <p className='text-xs '>{country}</p>
            <Dot />
            <p className='text-xs'>{project}</p>
            <Dot />
            <p className='text-xs'>{timeAgo}</p>
        </CardFooter>
    </Card>
  )
}
