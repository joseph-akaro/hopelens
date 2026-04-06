import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FolderKanbanIcon, UserStar, Gauge, Repeat } from "lucide-react"
import { fetchTotalChampions } from "@/lib/services/users.service"
import {fetchOverallResponseRate} from "@/lib/services/response.service"

export async function SectionCards() {
    const totalChampions = await fetchTotalChampions();
    const rate = await fetchOverallResponseRate();

  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Projects</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            10
          </CardTitle>
          <CardAction className="bg-blue-100  p-2 rounded-md text-blue-500 dark:invert">
              <FolderKanbanIcon size={30}/>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month{" "}
            <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Updates for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Champions</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {totalChampions}
          </CardTitle>
          <CardAction className="bg-green-100 p-2 rounded-md text-green-500 dark:invert">
            <UserStar size={30}/>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 20% this period{" "}
            <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Weak champions retention{" "}
          </div>
        </CardFooter> */}
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Updates</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {rate.totalExpected}
          </CardTitle>
          <CardAction className="bg-yellow-100 p-2 rounded-md text-yellow-500 dark:invert">
              <Repeat size={30}/>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong project retention{" "}
            <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter> */}
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Response Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {rate.responseRate}%
          </CardTitle>
          <CardAction className="bg-red-100 p-2 rounded-md text-red-500 dark:invert">
              <Gauge size={30}/>
          </CardAction>
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Unsteady performance increase{" "}
            <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Low completion rate</div>
        </CardFooter> */}
      </Card>
    </div>
  )
}
