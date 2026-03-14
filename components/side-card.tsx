import { SidebarHeader } from "@/components/ui/sidebar"
import { Globe } from "lucide-react"

export function TopBar() {
  return (
    <SidebarHeader className="flex h-15 items-center justify-center border-b border-muted">
      <div className="flex flex-row text-sm items-center justify-center gap-2 w-full">
        <span className="mr-2 p-2 rounded-md bg-blue-800 dark:invert">
          <Globe className="h-5 w-5 text-slate-100 " />
        </span>
        <div>
            <p className="text-md font-semibold tracking-tight">HopeLens</p>
            <p className="text-xs text-muted-foreground">Research Tool</p>
        </div>
      </div>
    </SidebarHeader>
  )
}