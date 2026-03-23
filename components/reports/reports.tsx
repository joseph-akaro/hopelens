import React from 'react'
import { DashHeader } from '../shared/subHeader'

export const Reports = () => {
  return (
     <div className='flex flex-col w-full h-full flex-1 gap-4'>
        <DashHeader description='Research Projects in the region' buttonTitle='Add Project' buttonvisibility={true} />
     </div>
  )
}
