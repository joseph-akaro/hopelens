import React from 'react'
import { DashHeader } from '../shared/subHeader'
import { TabBox } from '../tabbox'
import { Plus } from 'lucide-react'
import { ButtonMain } from '../elements/buttonMain'

const tablist = [ "All","Pending","Approved"]

const Updates = () => {
  return (
     <div className='flex flex-col w-full h-full flex-1 gap-4'>
        <DashHeader description="Research updates submitted by champions" buttonvisibility={true} button={<ButtonMain icon={<Plus />} pref='Submit' title={"Update"} />}/>
        <TabBox items={tablist}/>
     </div>
  )
}

export default Updates