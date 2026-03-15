import React from 'react'
import { 
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent
 } from './ui/tabs'
 import { SearchBox } from './searchbox'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ProjectCard } from './project/projectCard'

export const TabBox = () => {
  return (
    <Tabs defaultValue="All" className="w-full flex items-start justify-center">
        <div className='flex flex-row items-start gap-2'>
            <SearchBox placeholder={"Search..."} label={"Search"} />
        <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        </div>
        <TabsContent value={"all"} className={"grid grid-col-1"}>
            <div className='grid grid-col-3 w-full'>
                <ProjectCard title={"Call To Thrive"} status={"Draft"} description={"This is a demo project for call to thrive"} countries={" 10 Country"} date={"March 15, 2026"} />
            </div>
        </TabsContent>
        <TabsContent value={"draft"}>
                <ProjectCard title={"Call To Thrive"} status={"Draft"} description={"This is a demo project for call to thrive"} countries={" 10 Country"} date={"March 15, 2026"} />
        </TabsContent>
        <TabsContent value={"active"}>
                <ProjectCard title={"Call To Thrive"} status={"Active"} description={"This is a demo project for call to thrive"} countries={" 10 Country"} date={"March 15, 2026"} />
        </TabsContent>
        <TabsContent value={"completed"}>
                <ProjectCard title={"Call To Thrive"} status={"Completed"} description={"This is a demo project for call to thrive"} countries={" 10 Country"} date={"March 15, 2026"} />
        </TabsContent>
    </Tabs>
  )
}
