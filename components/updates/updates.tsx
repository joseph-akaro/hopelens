import React from 'react'
import { TabBox } from '../tabbox'


const tablist = [ "All","Pending","Approved"]

const Updates = () => {
  return (
     <div className='flex flex-col w-full h-full flex-1 gap-4'>
        <TabBox items={tablist}/>
     </div>
  )
}

export default Updates