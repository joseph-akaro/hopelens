import React, { Children } from 'react'

interface headers{
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

export const DashHeader = ({...props}: headers) => {
  return (
    <div className='flex flex-row w-full items-start w-full h-[20%] justify-center'>
        <span className='flex w-full h-full justify-start items-start'>
            <h1 className='text-blue-700 dark:invert'>{props.title}</h1>
            <p className='text-muted-foreground'>{props.description}</p>
        </span>
        {props.children}
    </div>
  )
}
