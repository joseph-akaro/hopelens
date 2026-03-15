import React from 'react'
import { DashHeader } from '../dash-header'

export const Projects = () => {
  return (
     <div className='flex flex-col w-full h-full flex-1 gap-4'>
        <DashHeader description='Manage research projects across countries' buttonTitle='New Project' buttonvisibility={true} />
     </div>
  )
}
