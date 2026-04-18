import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { FolderKanbanIcon, UserStar, Gauge, Repeat, TrendingUpIcon, TrendingDownIcon, Building2 } from "lucide-react"
import { fetchTotalChampions } from "@/lib/services/users.service"

export async function SectionCards() {
    const totalChampions = await fetchTotalChampions();

  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-4 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <StatusCard title="TOTAL PROJECTS" icon={<FolderKanbanIcon />} value="100" increment={10} trendIcon={<TrendingUpIcon className="size-4" />} />
      <StatusCard title="ACTIVE USERS" icon={<UserStar />} value={totalChampions.toString()} increment={15} trendIcon={<TrendingUpIcon className="size-4" />} />
      <StatusCard title="ASSETS IN USE" icon={<Building2 />} value="1,000" increment={20} trendIcon={<TrendingUpIcon className="size-4" />} />
      <StatusCard title="PERFORMANCE" icon={<Gauge />} value="35%" increment={5} trendIcon={<TrendingUpIcon className="size-4" />} />
    </div>
  )
}


function StatusCard({...props} : {
  icon: React.ReactNode;
  title: string;
  value: string;
  increment: number;
  trendIcon: React.ReactNode;
}) {
  return (
    <Card className="container size-xs">
      <CardHeader>
        <CardDescription className="text-md font-semibold text-muted-primary">{props.title}</CardDescription>
        <CardTitle className="text-4xl font-semibold tabular-nums">
          {props.value}
        </CardTitle>
        <CardAction className={`bg-green-100 text-green-500 rounded-md p-1`}>
          {props.icon}
        </CardAction>
      </CardHeader>
      <CardFooter className="flex-col w-full items-start gap-1.5 text-xs">
        <div className="line-clamp-1 flex flex-row gap-2 font-medium text-muted-foreground items-center">
          <span className="bg-green-100 text-green-500 rounded-sm flex flex-row items-center gap-1 px-2 dark:bg-green-500 dark:text-green-50">{props.trendIcon}{props.increment}% </span>
          vs last month
        </div>
      </CardFooter>
    </Card>
  )
}
