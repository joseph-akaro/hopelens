import React from 'react'
import { Button } from '@/components/ui/button'


interface buttonProps{
    buttonTitle?: string;
    icon?: React.ReactNode;
    pref?: string;
    title?: string;
}
export const ButtonMain = ({...props}: buttonProps) => {
  return (
    <Button
                        variant="outline" size="sm"
                        className={"bg-blue-700 p-2 flex flex-row gap-2 text-slate-50 hover:text-slate-50 hover:bg-blue-800 cursor-pointer"}
                        >
                        <span className='w-4 h-4'>{props.icon}</span>
                        {`${props.pref} `}
                        {props.title}
    </Button>
  )
}
