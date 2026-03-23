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
    imagePath?: string;
}

export function ProjectCard( {title, status, description, countries, date, imagePath} : projectCardProps) {
  return (
    <Card className="gap-2 w-xs max-h-sm aspect-3/2 p-4 bg-slate-50 rounded-md border border-muted hover:border-blue-300">
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardAction>{status}</CardAction>
        </CardHeader>
        <CardContent>
           <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-row justify-between m-0">
            <p>{countries}</p>
            <p>{date}</p>
        </CardFooter>
    </Card>
  )
}
