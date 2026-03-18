"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
  { country: "SSD", completed: 186, droped: 80 },
  { country: "KE", completed: 305, droped: 200 },
  { country: "UG", completed: 237, droped: 120 },
  { country: "TZ", completed: 73, droped: 190 },
  { country: "BR", completed: 209, droped: 130 },
  { country: "RW", completed: 214, droped: 140 },
  { country: "ETH", completed: 214, droped: 140 },
  { country: "HA", completed: 214, droped: 140 },
]

const chartConfig = {
  completed: {
    label: "Completed",
    color: "var(--chart-1)",
  },
  droped: {
    label: "Droped",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function LineCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-muted-foreground">Projects by Country</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="country"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent payload={undefined} />} />
            <Bar
              dataKey="completed"
              stackId="a"
              fill="var(--color-completed)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="droped"
              stackId="a"
              fill="var(--color-droped)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this country <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total Project By Country for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}