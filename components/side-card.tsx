import { SidebarHeader } from "@/components/ui/sidebar"
import { Globe } from "lucide-react"

export function TopBar() {
  return (
    <SidebarHeader className="flex h-15 items-center justify-center">
      <div className="flex flex-row text-sm items-center justify-center gap-2 w-full">
        <span className="mr-2 p-2 rounded-md bg-slate-600 dark:invert">
          <Globe className="h-5 w-5 text-slate-200 " />
        </span>
        <div>
            <p className="text-md text-slate-200 font-semibold tracking-tight">HopeLens</p>
            <p className="text-xs text-slate-200">Research Tool</p>
        </div>
      </div>
    </SidebarHeader>
  )
}