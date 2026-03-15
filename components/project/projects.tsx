import React from 'react'
import { DashHeader } from '../dash-header'
import { TabBox } from '../tabbox'

export const Projects = () => {
  return (
     <div className='flex flex-col w-full h-full flex-1 gap-4'>
        <DashHeader description='Manage research projects across countries' buttonTitle='New Project' buttonvisibility={true} />
        <div className='px-4 w-full'>
         <TabBox />
        </div>
     </div>
  )
}
