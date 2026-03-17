import React from 'react'
import { PenBoxIcon, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

interface countryCardProps{
    iconColor?: string;
    icon?: React.ReactNode;
    title: string;
    description?: string;
    buttonOn?: "" | "hidden";
}

export const LocationCard = ({...props} : countryCardProps) => {
  return (
    <div className='flex flex-row w-full border border-muted rounded-lg p-2 hover:bg-muted transitions-colors items-center justify-between'>
        <div className='flex flex-row items-center justify-center gap-4 pl-2'>
            <span className={`${props.iconColor} text-sm`}>
                {props.icon}
            </span>
            <div>
                <h1 className='text-md text-foreground font-semibold'>{props.title}</h1>
                <p className='text-muted-foreground'>{props.description}</p>
            </div>
        </div>
        <div className={`${props.buttonOn} flex items-center justify-center gap-2`}>
            <Button variant={"outline"}>Edit</Button>
            <Button variant={"destructive"}><Trash2 /></Button>
        </div>
    </div>
  )
}
