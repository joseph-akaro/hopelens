import React from 'react'
import { Card } from '../ui/card';

interface UpdateProps {
    title: string;
    component?: React.ReactNode;
}

export const Update = ({ title, component }: UpdateProps) => {
  return (
    <Card className='flex flex-col w-full p-8 text-foreground gap-4 rounded-md h-xsm overflow-hidden'>
      <h2 className='text-20 font-semibold'>{title}</h2>
      <div className='flex flex-col gap-2'>
        {component}
      </div>
    </Card>
  )
}
