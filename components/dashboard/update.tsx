import React from 'react'
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface UpdateProps {
    title?: string;
    component?: React.ReactNode;
    buttonOn?: boolean | "hidden";
    buttonTitle?: string;
}

export const Update = ({...props }: UpdateProps) => {
  return (
    <Card className='flex flex-col w-full p-8 text-foreground gap-4 rounded-md h-xsm overflow-hidden'>
      <div className='flex flex-row items-center justify-between'>
          <h2 className='text-20 font-semibold'>{props.title}</h2>
          <Button className={`hover:bg-blue-900 bg-blue-800 text-slate-50 cursor-pointer ${props.buttonOn}`}>
            <div className='flex gap-2 items-center justify-center'>
              <Plus />
              {`New ${props.buttonTitle}`}
            </div>
          </Button>
      </div>
      <div className='flex flex-col gap-2'>
        {props.component}
      </div>
    </Card>
  )
}
