import React from 'react'
import { DashHeader } from '../shared/subHeader'
import { TabBox } from '../tabbox'
import { Plus } from 'lucide-react'
import { ButtonMain } from '../elements/buttonMain'
import ProjectCard from '../projectCard'

const tablist = [ "All","Draft","Active", "Completed", "Overdue" ]

const Projects = () => {
  return (
     <div className='flex flex-col w-full h-full flex-1 gap-4'>
        <DashHeader description="Manage research projects across countries" buttonvisibility={true} button={<ButtonMain icon={<Plus />} pref='New' title={"Project"} />}/>
        <TabBox items={tablist} content={<ProjectCard />}/>
     </div>
  )
}

export default Projects
