import React from 'react'
import { Card } from '../ui/card';

interface chartCardProps{
    component: React.ReactNode;
    title?: string;
}

export const ChartCard = ({...props}: chartCardProps) => {
  return (
    <Card className='aspect-3/3 p-4 flex items-start justify-between gap-1 w-full'>
        <span className='text-sm font-semibold text-foreground text-left'>{props.title}</span>
        {props.component}
    </Card>
  )
}
