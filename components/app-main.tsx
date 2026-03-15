import React from 'react'
import { StatusCard } from './dashboard/status'
import { Globe, FolderKanban, TrendingUp, Users } from 'lucide-react'
import { Update } from './dashboard/update'

import { UpdateCard } from './update-card'
import { ActivityCard } from './activity-card'
import { CountryCard } from './country-card'


export const AppMain = () => {
  return (
        <div className='flex flex-col w-full h-full flex-1 gap-4'>
          <div className='flex-1 p-4 items-center justify-center gap-4'>
            <div className="flex items-center justify-between md:flex-row flex-col gap-6 w-full">
              <StatusCard title="COUNTRIES" value={8} icon={<Globe size={18}/>} color={"bg-blue-100"} textColor={"text-blue-900"}/>
              <StatusCard title="CHAMPIONS" value={2} icon={<Users size={18}/>} color={"bg-green-100"} textColor={"text-green-900"}/>
              <StatusCard title="ACTIVE PROJECTS" value={9} icon={<FolderKanban size={18}/>} color={"bg-blue-100"} textColor={"text-blue-900"}/>
              <StatusCard title="PENDING UPDATES" value={50} icon={<TrendingUp size={18} />} color={"bg-orange-200"} textColor={"text-orange-800"} />
            </div>
            <div className='flex flex-col w-full items-center justify-between gap-4 mt-6 overflow-x-auto p-1'>
              <Update title="Recent Updates" component={<Updates />} />
              <Update title="Active Projects" component={<Activity />} />
              <Update title="Participating Countries" component={<ParticipatingCountries />} />
            </div>
          </div>
        </div>
   
  )
}

const Updates = () => {
  return(
    <>
      <UpdateCard title="Africa Program Evaluation" status="Approved" country="Kenya" project="African Program Evaluation" timeAgo="7 days ago" />
      <UpdateCard title="Call To Thrive" status="Approved" country="Kenya" project="African Program Evaluation" timeAgo="2 hours ago" />
      <UpdateCard title="Africa Program Evaluation" status="Approved" country="Rwanda" project="Call To Thrive" timeAgo="Now" />
      <UpdateCard title="Africa Program Evaluation" status="Approved" country="Burundi" project="Burundi GYC" timeAgo="1 hours ago" />
      <UpdateCard title="Africa Program Evaluation" status="Approved" country="Tanzania" project="African Program Evaluation" timeAgo="2 hours ago" />
    </>
  )
}


const Activity = () => {
  return(
    < div className='grid md:grid-cols-2 grid-cols-1 w-full items-start justify-center gap-4 overflow-x-auto p-1'>
      <ActivityCard title="Project Alpha has reached its first milestone." description="The team successfully completed the initial phase of data collection and analysis, providing valuable insights for the next steps." />
      <ActivityCard title="Project Beta has been approved." description="The project proposal for Project Beta has been approved by the review committee, allowing the team to proceed with implementation." />
      <ActivityCard title="Project Gamma is now active." description="Project Gamma has officially launched, and the team is actively working on the initial tasks outlined in the project plan." />
      <ActivityCard title="Project Gamma is now active." description="Project Gamma has officially launched, and the team is actively working on the initial tasks outlined in the project plan." />
    </div>
  )
}


const ParticipatingCountries = () => {
  return(
    <div className='grid sm:grid-cols-4 grid-cols-1 aspect-auto w-full sm:items-start items-center justify-center flex-wrap gap-4 overflow-x-auto p-1'>
     <CountryCard country="Kenya" region="East Africa" />
     <CountryCard country="Rwanda" region="East Africa" />
     <CountryCard country="Burundi" region="East Africa" />
     <CountryCard country="Tanzania" region="East Africa" />
     <CountryCard country="Uganda" region="East Africa" />
     <CountryCard country="Ethiopia" region="East Africa" />
     <CountryCard country="South Sudan" region="East Africa" />
     <CountryCard country="Horn of Africa" region="East Africa" />
    </div>
  )
}
