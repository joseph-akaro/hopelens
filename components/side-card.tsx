import Image from 'next/image'

interface sideCardProps {
  icon: React.ReactNode;
  name: string;
  subtitle: string;
}

export const SideCard = ({icon, name, subtitle }: sideCardProps) => {
  return (
    <div className='flex flex-row w-full h-16 border-b border-muted p-4 items-start justify-start align-center gap-4 dark:bg-muted bg-sky-950'>
        <div className='rounded-full flex items-center justify-center p-2 bg-muted'>
            {icon}
        </div>
        <div className='flex flex-col items-start justify-center'>
            <span className='text-sm dark:text-foreground text-white font-bold'>{name}</span>
            <span className='text-xs text-muted-foreground'>{subtitle}</span>
        </div>
    </div>
  )
}
