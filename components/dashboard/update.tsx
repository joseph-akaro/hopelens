import React from 'react'
import { Card } from '../ui/card';

interface UpdateProps {
    title: string;
    component?: React.ReactNode;
}

export const Update = ({ title, component }: UpdateProps) => {
  return (
    <Card className='flex flex-col w-full p-8 text-foreground bg-background gap-4 rounded-md h-sm overflow-hidden'>
      <h2>{title}</h2>
      <div className='flex flex-col gap-2'>
        {component}
      </div>
    </Card>
  )
}
