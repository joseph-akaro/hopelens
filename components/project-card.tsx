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
    imageUrl: string | null;
    title: string;
    stage?: string | null;
    shortdescription?: string;
    countries?: number;
}

export function ProjectCard({...props} : projectCardProps) {
  const header = props.title as string;
  const headerLimit = 25;

  const text = props.shortdescription as string;
  const limit = 60

  const shortenedText = text.length > limit ? text?.substring(0, limit) + "..." : text;
  const shortenedHeader = header.length > headerLimit ? header?.substring(0, headerLimit) + "..." : header;

  return (
    <Card className="container max-w-sm pt-0" size="sm">
      <img
        src={`${props.imageUrl}`}
        alt="Project Image"
        className="relative aspect-video w-full object-cover brightness-60 dark:brightness-40"
      />
      <CardHeader className="flex flex-col mt-2">
        <CardAction className="flex flex-row w-full items-start justify-between">
          <CardTitle>{shortenedHeader}</CardTitle>
          <Badge variant="secondary" className={props.stage === 'Shared' ? `bg-green-50 text-green-700  border-green-700` : `bg-primary/20 text-primary`}>{props.stage}</Badge>
        </CardAction>
        <CardDescription>{shortenedText}</CardDescription>
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