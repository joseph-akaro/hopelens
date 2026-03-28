"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", updates: 222, delays: 150 },
  { date: "2024-04-02", updates: 97, delays: 180 },
  { date: "2024-04-03", updates: 167, delays: 120 },
  { date: "2024-04-04", updates: 242, delays: 260 },
  { date: "2024-04-05", updates: 373, delays: 290 },
  { date: "2024-04-06", updates: 301, delays: 340 },
  { date: "2024-04-07", updates: 245, delays: 180 },
  { date: "2024-04-08", updates: 409, delays: 320 },
  { date: "2024-04-09", updates: 59, delays: 110 },
  { date: "2024-04-10", updates: 261, delays: 190 },
  { date: "2024-04-11", updates: 327, delays: 350 },
  { date: "2024-04-12", updates: 292, delays: 210 },
  { date: "2024-04-13", updates: 342, delays: 380 },
  { date: "2024-04-14", updates: 137, delays: 220 },
  { date: "2024-04-15", updates: 120, delays: 170 },
  { date: "2024-04-16", updates: 138, delays: 190 },
  { date: "2024-04-17", updates: 446, delays: 360 },
  { date: "2024-04-18", updates: 364, delays: 410 },
  { date: "2024-04-19", updates: 243, delays: 180 },
  { date: "2024-04-20", updates: 89, delays: 150 },
  { date: "2024-04-21", updates: 137, delays: 200 },
  { date: "2024-04-22", updates: 224, delays: 170 },
  { date: "2024-04-23", updates: 138, delays: 230 },
  { date: "2024-04-24", updates: 387, delays: 290 },
  { date: "2024-04-25", updates: 215, delays: 250 },
  { date: "2024-04-26", updates: 75, delays: 130 },
  { date: "2024-04-27", updates: 383, delays: 420 },
  { date: "2024-04-28", updates: 122, delays: 180 },
  { date: "2024-04-29", updates: 315, delays: 240 },
  { date: "2024-04-30", updates: 454, delays: 380 },
  { date: "2024-05-01", updates: 165, delays: 220 },
  { date: "2024-05-02", updates: 293, delays: 310 },
  { date: "2024-05-03", updates: 247, delays: 190 },
  { date: "2024-05-04", updates: 385, delays: 420 },
  { date: "2024-05-05", updates: 481, delays: 390 },
  { date: "2024-05-06", updates: 498, delays: 520 },
  { date: "2024-05-07", updates: 388, delays: 300 },
  { date: "2024-05-08", updates: 149, delays: 210 },
  { date: "2024-05-09", updates: 227, delays: 180 },
  { date: "2024-05-10", updates: 293, delays: 330 },
  { date: "2024-05-11", updates: 335, delays: 270 },
  { date: "2024-05-12", updates: 197, delays: 240 },
  { date: "2024-05-13", updates: 197, delays: 160 },
  { date: "2024-05-14", updates: 448, delays: 490 },
  { date: "2024-05-15", updates: 473, delays: 380 },
  { date: "2024-05-16", updates: 338, delays: 400 },
  { date: "2024-05-17", updates: 499, delays: 420 },
  { date: "2024-05-18", updates: 315, delays: 350 },
  { date: "2024-05-19", updates: 235, delays: 180 },
  { date: "2024-05-20", updates: 177, delays: 230 },
  { date: "2024-05-21", updates: 82, delays: 140 },
  { date: "2024-05-22", updates: 81, delays: 120 },
  { date: "2024-05-23", updates: 252, delays: 290 },
  { date: "2024-05-24", updates: 294, delays: 220 },
  { date: "2024-05-25", updates: 201, delays: 250 },
  { date: "2024-05-26", updates: 213, delays: 170 },
  { date: "2024-05-27", updates: 420, delays: 460 },
  { date: "2024-05-28", updates: 233, delays: 190 },
  { date: "2024-05-29", updates: 78, delays: 130 },
  { date: "2024-05-30", updates: 340, delays: 280 },
  { date: "2024-05-31", updates: 178, delays: 230 },
  { date: "2024-06-01", updates: 178, delays: 200 },
  { date: "2024-06-02", updates: 470, delays: 410 },
  { date: "2024-06-03", updates: 103, delays: 160 },
  { date: "2024-06-04", updates: 439, delays: 380 },
  { date: "2024-06-05", updates: 88, delays: 140 },
  { date: "2024-06-06", updates: 294, delays: 250 },
  { date: "2024-06-07", updates: 323, delays: 370 },
  { date: "2024-06-08", updates: 385, delays: 320 },
  { date: "2024-06-09", updates: 438, delays: 480 },
  { date: "2024-06-10", updates: 155, delays: 200 },
  { date: "2024-06-11", updates: 92, delays: 150 },
  { date: "2024-06-12", updates: 492, delays: 420 },
  { date: "2024-06-13", updates: 81, delays: 130 },
  { date: "2024-06-14", updates: 426, delays: 380 },
  { date: "2024-06-15", updates: 307, delays: 350 },
  { date: "2024-06-16", updates: 371, delays: 310 },
  { date: "2024-06-17", updates: 475, delays: 520 },
  { date: "2024-06-18", updates: 107, delays: 170 },
  { date: "2024-06-19", updates: 341, delays: 290 },
  { date: "2024-06-20", updates: 408, delays: 450 },
  { date: "2024-06-21", updates: 169, delays: 210 },
  { date: "2024-06-22", updates: 317, delays: 270 },
  { date: "2024-06-23", updates: 480, delays: 530 },
  { date: "2024-06-24", updates: 132, delays: 180 },
  { date: "2024-06-25", updates: 141, delays: 190 },
  { date: "2024-06-26", updates: 434, delays: 380 },
  { date: "2024-06-27", updates: 448, delays: 490 },
  { date: "2024-06-28", updates: 149, delays: 200 },
  { date: "2024-06-29", updates: 103, delays: 160 },
  { date: "2024-06-30", updates: 446, delays: 400 },
]

const chartConfig = {
  update: {
    label: "Updates",
  },
  updates: {
    label: "Updates",
    color: "var(--primary)",
  },
  delays: {
    label: "Delays",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Updates</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            multiple={false}
            value={timeRange ? [timeRange] : []}
            onValueChange={(value) => {
              setTimeRange(value[0] ?? "90d")
            }}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:px-4! @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select
            value={timeRange}
            onValueChange={(value) => {
              if (value !== null) {
                setTimeRange(value)
              }
            }}
          >
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.9}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-3)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="delays"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--chart-3)"
              stackId="a"
            />
            <Area
              dataKey="updates"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--chart-1)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
