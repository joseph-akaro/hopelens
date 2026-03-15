import React from 'react'
import { DashHeader } from '../dash-header'
import { Tabs, TabsContent } from '../ui/tabs';

export const Updates = () => {
  return (
     <div className='flex flex-col w-full h-full flex-1 gap-4'>
         <div>
              <DashHeader description='Research updates submitted by champions' buttonTitle='Add Project' buttonvisibility={true} />
         </div>
     </div>
  )
}
