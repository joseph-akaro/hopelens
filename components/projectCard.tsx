"use client"
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
import { Pen, Trash2 } from "lucide-react"

export function ProjectCard() {
  return (
    <Card className="relative m-auto w-sm max-w-xs pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://unsplash.com/photos/people-gathering-in-a-event-CjMwAu4-OqY"
        alt="unsplash"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary" className="bg-green-50 border-green-500 text-green-500 rounded-md h-6">Completed</Badge>
        </CardAction>
        <CardTitle>Call To Thrive</CardTitle>
        <CardDescription>
            Call To Thrive program done within Schools, Churches and Communities
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-row items-center justify-center gap-1 w-full">
        <Button variant={"default"} className="w-[70%] bg-blue-800 hover:bg-blue-900">View</Button>
        <Button variant={"outline"} className="w-auto"><Pen /></Button>
        <Button variant={"destructive"} className="w-auto"><Trash2 /></Button>
      </CardFooter>
    </Card>
  )
}
