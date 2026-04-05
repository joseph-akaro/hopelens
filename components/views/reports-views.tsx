import React from 'react'
import { ViewTitle } from '../shared/view-title'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { FileText, FunnelPlus, Table } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Button } from '../ui/button'

const period = [
  "January",
  "Feburary",
  "March",
]

const projects = [
  "Call To Thrive",
  "Step By Step",
  "Program Evaluation",
  "Final Third",
  "Global Youth Culture"
]

const countries = [
  "Kenya",
  "Uganda",
  "South Sudan",
  "Burundi",
  "Tanzania",
  "Ethiopia",
  "Horn of Africa",
  "Rwanda",
]

export const ReportsView = () => {
  return (
       <div className="container flex flex-col gap-4">
              <ViewTitle description="Generate and export performance summaries" title="Reports" />
              <Card className='container w-full max-h-45'>
                <CardHeader>
                  <CardTitle className='flex flex-row flex-1 gap-2 text-foreground text-md items-center justify-start'>
                    <FunnelPlus />
                    Report Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                  <FilterGroup title='Report Period' option={period}/>
                  <FilterGroup title='Filter by Project' option={projects}/>
                  <FilterGroup title='Filter by Country' option={countries}/>
                </CardContent>
              </Card>
              <div className='grid md:grid-cols-5 grid-cols-1 gap-4'>
                <FilterCard count={0} title='Total Updates'/>
                <FilterCard count={0} title='Total Approved'/>
                <FilterCard count={0} title='Pending'/>
                <FilterCard count={0} title='Active Countries'/>
                <FilterCard count={0} title='Active Projects'/>
              </div>
              <FilterButton />
       </div>
  )
}

interface filterGroup{
  title: string;
  option: string[];
}

const FilterGroup = ({...props} : filterGroup) => {
  
  return (
    <FieldGroup className='w-full max-w-xs'>
      <Field>
        <FieldLabel className='font-normal text-sm'>{props.title}</FieldLabel>
        <Select defaultValue='Select'>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {
                props.option.map((item) => (
                  <SelectItem value={item} key={item}>{item}</SelectItem>
                ))
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  )
}

interface filterCard {
  count: number;
  title: string,
}


const FilterCard = ({...props} : filterCard) => {
  return(
    <Card className='container'>
      <CardHeader>
        <CardTitle className='text-3xl'>{props.count}</CardTitle>
      </CardHeader>
      <CardFooter>
        <CardDescription>{props.title}</CardDescription>
      </CardFooter>
    </Card>
  )
}

const FilterButton = () => {
  return(
    <div className='flex w-full gap-4'>
      <Button variant={'default'} className='cursor-pointer'>
        <FileText />
        Export to PDF
      </Button>
      <Button variant={'outline'} className='cursor-pointer'>
        <Table />
        Export to CSV
      </Button>
    </div>
  )
}