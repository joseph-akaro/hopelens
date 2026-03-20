"use client"

import React from "react"
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
  { date: "2026-03-01", updates: 22,  },
  { date: "2026-03-02", updates: 9,  },
  { date: "2026-03-03", updates: 16,  },
  { date: "2026-03-03", updates: 24,  },
  { date: "2026-03-05", updates: 37,  },
  { date: "2026-03-06", updates: 30,  },
  { date: "2026-03-07", updates: 25,  },
  { date: "2026-03-08", updates: 40,  },
  { date: "2026-03-09", updates: 59,  },
  { date: "2026-03-10", updates: 21,  },
  { date: "2026-03-11", updates: 37,  },
  { date: "2026-03-12", updates: 22,  },
  { date: "2026-03-13", updates: 32,  },
  { date: "2026-03-14", updates: 17,  },
  { date: "2026-03-15", updates: 10,  },
  { date: "2026-03-16", updates: 18,  },
  { date: "2026-03-17", updates: 46,  },
  { date: "2026-03-18", updates: 34,  },
  { date: "2026-03-19", updates: 23,  },
  { date: "2026-03-20", updates: 8,  },
  { date: "2026-03-21", updates: 17,  },
  { date: "2026-03-22", updates: 24,  },
  { date: "2026-03-23", updates: 18,  },
  { date: "2026-03-24", updates: 37,  },
  { date: "2026-03-25", updates: 25,  },
  { date: "2026-03-26", updates: 7,  },
  { date: "2026-03-27", updates: 33,  },
  { date: "2026-03-28", updates: 12,  },
  { date: "2026-03-29", updates: 35,  },
  { date: "2026-03-30", updates: 44,  },
  { date: "2026-04-01", updates: 15,  },
  { date: "2026-04-02", updates: 23,  },
  { date: "2026-04-03", updates: 27,  },
  { date: "2026-04-04", updates: 35,  },
  { date: "2026-04-04", updates: 41,  },
  { date: "2026-04-06", updates: 48,  },
  { date: "2026-04-07", updates: 38,  },
  { date: "2026-04-08", updates: 19,  },
  { date: "2026-04-09", updates: 27,  },
  { date: "2026-04-10", updates: 23,  },
  { date: "2026-04-11", updates: 35,  },
  { date: "2026-04-12", updates: 17,  },
  { date: "2026-04-13", updates: 17,  },
  { date: "2026-04-14", updates: 48,  },
  { date: "2026-04-15", updates: 43,  },
  { date: "2026-04-16", updates: 38,  },
  { date: "2026-04-17", updates: 49,  },
  { date: "2026-04-18", updates: 35,  },
  { date: "2026-04-19", updates: 25,  },
  { date: "2026-04-20", updates: 17,  },
  { date: "2026-04-21", updates: 8,  },
  { date: "2026-04-23", updates: 22,  },
  { date: "2026-04-24", updates: 24,  },
  { date: "2026-04-25", updates: 21,  },
  { date: "2026-04-26", updates: 23,  },
  { date: "2026-04-27", updates: 40,  },
  { date: "2026-04-28", updates: 23,  },
  { date: "2026-04-29", updates: 7,  },
  { date: "2026-04-30", updates: 30,  },
  { date: "2026-04-31", updates: 18,  },
  { date: "2026-05-01", updates: 18,  },
  { date: "2026-05-02", updates: 40,  },
  { date: "2026-05-03", updates: 13,  },
  { date: "2026-05-04", updates: 49,  },
  { date: "2026-05-04", updates: 8,  },
  { date: "2026-05-05", updates: 24,  },
  { date: "2026-05-07", updates: 33,  },
  { date: "2026-05-08", updates: 35,  },
  { date: "2026-05-09", updates: 48,  },
  { date: "2026-05-10", updates: 15,  },
  { date: "2026-05-11", updates: 9,  },
  { date: "2026-05-12", updates: 42,  },
  { date: "2026-05-13", updates: 8,  },
  { date: "2026-05-14", updates: 46,  },
  { date: "2026-05-15", updates: 37,  },
  { date: "2026-05-16", updates: 31,  },
  { date: "2026-05-17", updates: 45,  },
  { date: "2026-05-18", updates: 17,  },
  { date: "2026-05-19", updates: 31,  },
  { date: "2026-05-20", updates: 48,  },
  { date: "2026-05-21", updates: 19,  },
  { date: "2026-05-22", updates: 37,  },
  { date: "2026-05-23", updates: 40,  },
  { date: "2026-05-24", updates: 12,  },
  { date: "2026-05-25", updates: 11,  },
  { date: "2026-05-26", updates: 44,  },
  { date: "2026-05-27", updates: 48,  },
  { date: "2026-05-28", updates: 19,  },
  { date: "2026-05-29", updates: 13,  },
  { date: "2026-05-30", updates: 46,  },
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