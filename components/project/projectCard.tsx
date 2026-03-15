import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface projectCardProps{
    title: string;
    status: string;
    description: string
    countries: string | "0 Country";
    date: string;
}

export function ProjectCard( {title, status, description, countries, date} : projectCardProps) {
  return (
    <Card className="flex flex-col gap-2 w-sm max-h-sm aspect-3/2 p-4 bg-slate-50 rounded-md border border-muted hover:border-blue-300">
        <div className=" flex bg-slate-200 rounded-md h-30 items-center justify-center">
            <h1>Image box here</h1>
        </div>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardAction>{status}</CardAction>
        </CardHeader>
        <CardContent>
           <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row justify-between">
            <span>{countries}</span>
            <span>{date}</span>
        </CardFooter>
    </Card>
  )
}
