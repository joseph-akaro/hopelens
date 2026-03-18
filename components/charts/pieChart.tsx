"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { type PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartStyle,
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

// -------------------- TYPES --------------------
type StatusType = "active" | "slow" | "ideal"

type StatusData = {
  status: StatusType
  responses: number
  fill: string // ✅ add this
}

// -------------------- CONFIG --------------------
const chartConfig = {
  active: {
    label: "Active",
    color: "#22c55e",
  },
  slow: {
    label: "Slow",
    color: "#f97316",
  },
  ideal: {
    label: "Ideal",
    color: "#9ca3af",
  },
} satisfies ChartConfig

// -------------------- NORMALIZER --------------------
const normalizeData = (apiData: any[]): StatusData[] => {
  const defaultStatuses: StatusType[] = ["active", "slow", "ideal"]

  const colors = {
    active: "#22c55e", // green
    slow: "#f97316",   // orange
    ideal: "#9ca3af",  // gray
  }

  return defaultStatuses.map((status) => {
    const found = apiData.find((d) => d.status === status)

    return {
      status,
      responses: found?.responses ?? 0,
      fill: colors[status], // ✅ key fix
    }
  })
}

// -------------------- COMPONENT --------------------
export default function PieCharts() {
  const id = "pie-interactive"

  const [data, setData] = React.useState<StatusData[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  const [activeStatus, setActiveStatus] = React.useState<StatusType>("active")

  // -------------------- FETCH DATA --------------------
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/responses")

        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }

        const result = await res.json()
        setData(normalizeData(result))
      } catch (err: any) {
        setError(err.message || "Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // -------------------- DERIVED --------------------
  const activeIndex = React.useMemo(
    () => data.findIndex((item) => item.status === activeStatus),
    [data, activeStatus]
  )

  const statuses = React.useMemo(
    () => data.map((item) => item.status),
    [data]
  )

  const activeItem = data[activeIndex] ?? data[0]

  // -------------------- STATES --------------------
  if (loading) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        Loading chart...
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-4 text-sm text-red-500">
        {error}
      </div>
    )
  }

  if (!data.length) {
    return (
      <div className="p-4 text-sm text-muted-foreground">
        No data available
      </div>
    )
  }

  // -------------------- UI --------------------
  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />

      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle className="text-muted-foreground">
            Response Tracker
          </CardTitle>
        </div>

        {/* SELECT */}
        <Select value={activeStatus} onValueChange={(val) => setActiveStatus(val as StatusType)}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select status"
          >
            <SelectValue placeholder="Select status" />
          </SelectTrigger>

          <SelectContent align="end" className="rounded-xl">
            {statuses.map((key) => {
              const config = chartConfig[key]

              if (!config) return null

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-xs"
                      style={{
                        backgroundColor: config.color,
                      }}
                    />
                    {config.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>

      {/* CHART */}
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Pie
              data={data}
              dataKey="responses"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              {/* CENTER LABEL */}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {activeItem?.responses?.toLocaleString?.() ?? 0}
                        </tspan>

                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Responses
                        </tspan>
                      </text>
                    )
                  }
                  return null
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}