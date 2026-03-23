import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Calendar, PenBoxIcon, Trash2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface projectCardProps{
    image?: string;
    title: string;
    shortDescription: string;
    createdAt: string;
}

const projects = [
    {
        image: "./images/cct.jpg",
        title: "Call To Thrive",
        description: "This project’s goal is to evaluate the top three programs (17 Stories, Stories of Hope and Lead Today) used over the last 10 years to determine if they are still meeting their outcomes and to identify improvements needed to effectively reach children and youth in Africa with God’s Word.",
        createdAt: "Mar 18, 2026"
    }
]

const ProjectCard = () => {
  return (
    <Card className='flex flex-col w-90 h-80'>
        <CardHeader className='flex flex-col gap-2'>
            <Image alt='Youth Group' src={'/images/cct.jpg'} width={150} height={100} className='object-cover rounded-md w-full h-30'/>
            <div className='flex flex-row items-center justify-between w-full pt-2'>
                <CardTitle className='w-[60%] font-bold text-md'>Call To Thrive</CardTitle>
                <CardAction className='flex flex-row items-center justify-between gap-2'>
                    <Badge variant={"outline"} className='h-5 bg-green-50 text-green-500 border-green-500'>Completed</Badge>
                    <Button variant={"outline"} className={'w-6 h-6'}><PenBoxIcon size={18}/></Button>
                    <Button variant={"destructive"} className={'w-6 h-6'}><Trash2 size={18}/></Button>
                </CardAction>
            </div>
        </CardHeader>
        <CardContent className='mt-[-10px]'>
            <CardDescription className='text-sm text-muted-foreground'>
                This project’s goal is to evaluate the top three programs (17 Stories, Stories of Hope and Lead Today...
            </CardDescription>
        </CardContent>
        <CardFooter className='flex flex-row items-center justify-between'>
            <CardDescription className='text-xs font-normal text-muted-foreground'>
                2 Country
            </CardDescription>
            <CardDescription className='flex flex-row items-center justify-between gap-2 text-xs font-normal text-muted-foreground'>
                <Calendar size={15}/>
                <p>Mar 23, 2026</p>
            </CardDescription>
        </CardFooter>
    </Card>
  )
}

export default ProjectCard