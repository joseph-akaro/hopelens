import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PenBoxIcon, Trash2 } from "lucide-react"

interface projectCardProps{
    imageUrl: string;
    title: string;
    stage?: string | null;
    shortdescription?: string;
    countries?: number;
}

export function ProjectCard({...props} : projectCardProps) {
  return (
    <Card className="@container/main max-w-sm pt-0">
      <img
        src={`${props.imageUrl}`}
        alt="Project Image"
        className="relative aspect-video w-full object-cover brightness-60 dark:brightness-40"
      />
      <CardHeader className="flex flex-col mb-3 mt-2">
        <CardAction className="flex flex-row w-full items-start justify-between">
          <CardTitle>{props.title}</CardTitle>
          <Badge variant="secondary">{props.stage}</Badge>
        </CardAction>
        <CardDescription>{props.shortdescription}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <span className="test-sm text-muted-foreground flex-1 w-[70%]">{props.countries} Countries</span>
        <div className="flex flex-row gap-2 w-[30%] items-center justify-center">
            <Button className="w-[50%] cursor-pointer" variant={"outline"}>
                <PenBoxIcon size={15}/>
            </Button>
            <Button className="w-[50%] cursor-pointer" variant={"destructive"}>
                <Trash2 size={15}/>
            </Button>
        </div>
      </CardFooter>
    </Card>
  )
}