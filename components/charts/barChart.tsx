"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
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

export const description = "Updates Overtime"

const chartData = [
  { date: "2024-04-01", updates: 222,  },
  { date: "2024-04-02", updates: 97,  },
  { date: "2024-04-03", updates: 167,  },
  { date: "2024-04-04", updates: 242,  },
  { date: "2024-04-05", updates: 373,  },
  { date: "2024-04-06", updates: 301,  },
  { date: "2024-04-07", updates: 245,  },
  { date: "2024-04-08", updates: 409,  },
  { date: "2024-04-09", updates: 59,  },
  { date: "2024-04-10", updates: 261,  },
  { date: "2024-04-11", updates: 327,  },
  { date: "2024-04-12", updates: 292,  },
  { date: "2024-04-13", updates: 342,  },
  { date: "2024-04-14", updates: 137,  },
  { date: "2024-04-15", updates: 120,  },
  { date: "2024-04-16", updates: 138,  },
  { date: "2024-04-17", updates: 446,  },
  { date: "2024-04-18", updates: 364,  },
  { date: "2024-04-19", updates: 243,  },
  { date: "2024-04-20", updates: 89,  },
  { date: "2024-04-21", updates: 137,  },
  { date: "2024-04-22", updates: 224,  },
  { date: "2024-04-23", updates: 138,  },
  { date: "2024-04-24", updates: 387,  },
  { date: "2024-04-25", updates: 215,  },
  { date: "2024-04-26", updates: 75,  },
  { date: "2024-04-27", updates: 383,  },
  { date: "2024-04-28", updates: 122,  },
  { date: "2024-04-29", updates: 315,  },
  { date: "2024-04-30", updates: 454,  },
  { date: "2024-05-01", updates: 165,  },
  { date: "2024-05-02", updates: 293,  },
  { date: "2024-05-03", updates: 247,  },
  { date: "2024-05-04", updates: 385,  },
  { date: "2024-05-05", updates: 481,  },
  { date: "2024-05-06", updates: 498,  },
  { date: "2024-05-07", updates: 388,  },
  { date: "2024-05-08", updates: 149,  },
  { date: "2024-05-09", updates: 227,  },
  { date: "2024-05-10", updates: 293,  },
  { date: "2024-05-11", updates: 335,  },
  { date: "2024-05-12", updates: 197,  },
  { date: "2024-05-13", updates: 197,  },
  { date: "2024-05-14", updates: 448,  },
  { date: "2024-05-15", updates: 473,  },
  { date: "2024-05-16", updates: 338,  },
  { date: "2024-05-17", updates: 499,  },
  { date: "2024-05-18", updates: 315,  },
  { date: "2024-05-19", updates: 235,  },
  { date: "2024-05-20", updates: 177,  },
  { date: "2024-05-21", updates: 82,  },
  { date: "2024-05-22", updates: 81,  },
  { date: "2024-05-23", updates: 252,  },
  { date: "2024-05-24", updates: 294,  },
  { date: "2024-05-25", updates: 201,  },
  { date: "2024-05-26", updates: 213,  },
  { date: "2024-05-27", updates: 420,  },
  { date: "2024-05-28", updates: 233,  },
  { date: "2024-05-29", updates: 78,  },
  { date: "2024-05-30", updates: 340,  },
  { date: "2024-05-31", updates: 178,  },
  { date: "2024-06-01", updates: 178,  },
  { date: "2024-06-02", updates: 470,  },
  { date: "2024-06-03", updates: 103,  },
  { date: "2024-06-04", updates: 439,  },
  { date: "2024-06-05", updates: 88,  },
  { date: "2024-06-06", updates: 294,  },
  { date: "2024-06-07", updates: 323,  },
  { date: "2024-06-08", updates: 385,  },
  { date: "2024-06-09", updates: 438,  },
  { date: "2024-06-10", updates: 155,  },
  { date: "2024-06-11", updates: 92,  },
  { date: "2024-06-12", updates: 492,  },
  { date: "2024-06-13", updates: 81,  },
  { date: "2024-06-14", updates: 426,  },
  { date: "2024-06-15", updates: 307,  },
  { date: "2024-06-16", updates: 371,  },
  { date: "2024-06-17", updates: 475,  },
  { date: "2024-06-18", updates: 107,  },
  { date: "2024-06-19", updates: 341,  },
  { date: "2024-06-20", updates: 408,  },
  { date: "2024-06-21", updates: 169,  },
  { date: "2024-06-22", updates: 317,  },
  { date: "2024-06-23", updates: 480,  },
  { date: "2024-06-24", updates: 132,  },
  { date: "2024-06-25", updates: 141,  },
  { date: "2024-06-26", updates: 434,  },
  { date: "2024-06-27", updates: 448,  },
  { date: "2024-06-28", updates: 149,  },
  { date: "2024-06-29", updates: 103,  },
  { date: "2024-06-30", updates: 446,  },
]

const chartConfig = {
  projects: {
    label: "Updates",
  },
  updates: {
    label: "Updates",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function LineCharts() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("updates")

  const total = React.useMemo(
    () => ({
      updates: chartData.reduce((acc, curr) => acc + curr.updates, 0),
    }),
    []
  )

  return (
    <Card className="py-0 w-full">
      <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
          <CardTitle className="text-muted-foreground">Updates Over Time</CardTitle>
          <CardDescription>
            Showing total updates for the last 12 months
          </CardDescription>
        </div>
        <div className="flex">
          {["updates"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="projects"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}