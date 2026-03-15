import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Map } from "lucide-react"

interface StatusCardProps {
  title?: string;
  value?: string | number;
  icon?: React.ReactNode;
  color?: string;
  textColor?: string;
}

export function StatusCard({ title, value, icon, color, textColor }: StatusCardProps) {
  return (
    <Card className={`w-full gap-0 max-h-sm h-sm text-foreground bg-slate-100 dark:bg-muted`}>
      <CardHeader>
        <CardTitle className="text-sm font-normal text-muted-foreground">{title}</CardTitle>
        <CardAction className={`w-10 h-10 ${color} dark:invert ${textColor} dark:invert rounded-sm flex items-center justify-center`}>
          {icon}
        </CardAction>
      </CardHeader>
      <CardContent>
        <h1 className="text-4xl text-slate-950 dark:text-slate-50 font-normal">{value}</h1>
      </CardContent>
    </Card>
  )
}
