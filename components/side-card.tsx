import Image from 'next/image'

interface sideCardProps {
  icon: React.ReactNode;
  name: string;
  subtitle: string;
}

export const SideCard = ({icon, name, subtitle }: sideCardProps) => {
  return (
    <div className='flex flex-row w-full border-b border-slate-700 px-8 py-2 items-center justify-start align-center gap-4 dark:bg-muted bg-slate-900'>
        <div className='w-8 h-8 rounded-md flex items-center justify-center p-2 dakr:bg-muted bg-slate-700 text-foreground text-slate-100'>
            {icon}
        </div>
        <div className='flex flex-col w-sm items-start justify-center'>
            <span className='text-sm dark:text-foreground text-white font-bold'>{name}</span>
            <span className='text-xs text-muted-foreground'>{subtitle}</span>
        </div>
    </div>
  )
}
