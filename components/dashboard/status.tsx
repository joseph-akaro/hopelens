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
    <Card className="w-full max-h-38 text-foreground, hover:bg-muted transition-colors">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction className={`w-8 h-8 ${color} dark:invert ${textColor} dark:invert rounded-sm flex items-center justify-center`}>
          {icon}
        </CardAction>
      </CardHeader>
      <CardContent>
        <h1 className="text-4xl text-muted-foreground font-black">{value}</h1>
      </CardContent>
    </Card>
  )
}
