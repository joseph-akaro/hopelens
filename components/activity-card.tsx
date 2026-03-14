import React from 'react'
import { Card, CardDescription, CardTitle } from './ui/card'

interface ActivityCardProps {
    title: string;
    description?: string;
}

export const ActivityCard = ({ title, description }: ActivityCardProps) => {
  return (
    <Card className='flex w-full md:aspect-3/1 aspect-auto p-4 text-foreground border-1 border-muted gap-4 rounded-md h-xsm overflow-hidden'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </Card>
  )
}
