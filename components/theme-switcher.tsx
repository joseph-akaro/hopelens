"use client"
import { Toggle } from "@/components/ui/toggle"
import { Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function ToggleTheme() {
    const { setTheme } = useTheme()

  return (
    <Toggle  aria-label="Toggle theme" size="sm" variant="outline" className={"mt-2"} onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}>
        <Moon className="h-4 w-4" />
    </Toggle>
  )
}
