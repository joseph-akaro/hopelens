"user client"
import React from 'react'
import { usePathname } from 'next/navigation';

interface ViewTitleProps {
  title?: string;
  description?: string;
  childButton?: React.ReactNode;
}

export const ViewTitle = ({...props}: ViewTitleProps) => {
    const pathname = usePathname().split("/")[1].charAt(0).toUpperCase() + usePathname().split("/")[1].slice(1);

  return (
    <div>
        <div className="flex flex-row justify-between gap-4 md:gap-6 md:py-6">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl text-primary font-bold tracking-tight">{pathname || props.title}</h2>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
            {props.childButton}
        </div>
    </div>
  )
}
