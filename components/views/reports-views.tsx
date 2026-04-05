import React from 'react'
import { ViewTitle } from '../shared/view-title'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { FileText, FunnelPlus, TableIcon } from 'lucide-react'
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
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
                <FilterCard count={0} title='Total Updates'color='text-blue-800'/>
                <FilterCard count={0} title='Total Approved'color='text-green-800'/>
                <FilterCard count={0} title='Total Pending' color='text-orange-800'/>
                <FilterCard count={0} title='Active Countries' color='text-blue-800'/>
                <FilterCard count={0} title='Active Projects' color='text-blue-800'/>
              </div>
              <FilterButton />
              <CountryPerformace title='Performance By Country' children={<CountryTable />}/>
              <CountryPerformace title='Performance By Project' children={<ProjectTable />}/>
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
  color?: string,
}


const FilterCard = ({...props} : filterCard) => {
  return(
    <Card className='container'>
      <CardHeader>
        <CardTitle className={`text-3xl font-bold ${props.color}`}>{props.count}</CardTitle>
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
        <TableIcon />
        Export to CSV
      </Button>
    </div>
  )
}

interface performance{
  title: string;
  children?: React.ReactNode | null;
}

const CountryPerformace = ({...props}: performance) => {
  return (
    <Card className='w-full max-h-screen min-h-50'>
      <CardHeader>
        <CardTitle>
          {props.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  )
}


const country = [
  {
    country: "South Sudan",
    region: "Eastern Africa",
    champion: "Joseph",
    total: 2,
    approved: 1,
    pending: 1
  },
  {
    country: "Kenya",
    region: "Eastern Africa",
    champion: "Natalie",
    total: 3,
    approved: 2,
    pending: 1,
  },
  {
    country: "Uganda",
    region: "Eastern Africa",
    champion: "Mellan",
    total: 3,
    approved: 3,
    pending: 0
  },
]

const CountryTable = () => {
  return(
    <Table>
      <TableHeader className='font-semibold'>
        <TableRow>
          <TableHead>Country</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Champion</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Approved</TableHead>
          <TableHead>Pending</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {country.map((country) => (
          <TableRow key={country.country}>
            <TableCell>{country.country}</TableCell>
            <TableCell className='text-muted-foreground'>{country.region}</TableCell>
            <TableCell>{country.champion}</TableCell>
            <TableCell>{country.total}</TableCell>
            <TableCell className='text-green-700'>{country.approved}</TableCell>
            <TableCell className='text-orange-700'>{country.pending}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


const project = [
  {
    title: "Call To Thrive",
    status: "Active",
    total: 2,
    approved: 1,
    pending: 1
  },
  {
    title: "Step By Step",
    status: "Active",
    total: 3,
    approved: 2,
    pending: 1
  }
]

const ProjectTable = () => {
  return(
    <Table>
      <TableHeader className='font-semibold'>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Approved</TableHead>
          <TableHead>Pending</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {project.map((project) => (
          <TableRow key={project.title}>
            <TableCell>{project.title}</TableCell>
            <TableCell className='text-muted-foreground'>{project.status}</TableCell>
            <TableCell>{project.total}</TableCell>
            <TableCell className='text-green-700'>{project.approved}</TableCell>
            <TableCell className='text-orange-700'>{project.pending}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}