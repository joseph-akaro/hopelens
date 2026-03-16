import React from 'react'
import { DashHeader } from '../dash-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { SearchBox } from '../searchbox';
import { ProjectCard } from '../projectCard';

interface SubDashboardProps{
  description?: string;
  buttonOn?: boolean;
}

export const SubDashboard = ({description, buttonOn} : SubDashboardProps) => {
  return (
    <div className='flex flex-col w-full'>
      <DashHeader description={description} buttonvisibility={buttonOn}/>
      <Tabs className={"p-4 w-full"}>
        <div className='flex gap-2'>
           <SearchBox placeholder={"Search..."} label={"Search"} />
          <TabsList>
          <TabsTrigger value={"all"}>All</TabsTrigger>
          <TabsTrigger value={"draft"}>Draft</TabsTrigger>
          <TabsTrigger value={"active"}>Active</TabsTrigger>
          <TabsTrigger value={"completed"}>Completed</TabsTrigger>
        </TabsList>
        </div>
        <TabsContent value={"all"}>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 items-start justify-center pt-2'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </TabsContent>
        <TabsContent value={"draft"}>
          <div className='flex flex-col w-full items-start justify-center'>
            <h1>Draft Tabs</h1>
          </div>
        </TabsContent>
        <TabsContent value={"active"}>
          <div className='flex flex-col w-full items-start justify-center'>
            <h1>Active Tabs</h1>
          </div>
        </TabsContent>
        <TabsContent value={"completed"}>
          <div className='flex flex-col w-full items-start justify-center'>
            <h1>Completed Tabs</h1>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
