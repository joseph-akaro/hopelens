"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Check, FolderKanbanIcon, Globe2, ToolCase, UserCircle2Icon, Vault } from "lucide-react"

export const ActivityCard = () => {
  return (
        <Card className="w-xs flex-none">
            <CardHeader>
                <CardTitle>Activity</CardTitle>
                <CardDescription>Recent activities</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <ActivityItem country="Active Countries" total={8} active={0} icon={<Globe2 className="text-green-500 w-6 h-6" />} />
                <ActivityItem country="Active Projects" total={70} active={15} icon={<FolderKanbanIcon className="text-green-500 w-6 h-6" />} />
                <ActivityItem country="Active Assets" total={700} active={400} icon={<ToolCase className="text-green-500 w-6 h-6" />} />
                <ActivityItem country="Active Tasks" total={1000} active={10} icon={<Check className="text-green-500 w-6 h-6" />} />
            </CardContent>
        </Card>
    )
}


function ActivityItem({ ...props }: { country: string; active: number; icon: React.ReactNode, total?: number }) {

    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="default" size="xs">
                <ItemMedia variant={'image'}>
                    {props.icon}
                </ItemMedia>
                <ItemContent className="flex flex-col justify-between">
                    <ItemTitle>{props.country}</ItemTitle>
                    <ProgressBar value={props.total !== undefined ? (props.active / props.total) * 100 : 0} />
                    <p className="text-muted-foreground py-1">{props.total !== undefined ? `${props.active} of ${props.total}` : `${props.active}`}</p>
                </ItemContent>
            </Item>
        </div>
  )
}

export function ProgressBar({...props} : { value: number }) {
  const [progress, setProgress] = React.useState(13)
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(props.value), 500)
    return () => clearTimeout(timer)
  }, [])
  return <Progress value={props.value} className={'fill-blue-500'}/>
}