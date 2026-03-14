import { SidebarHeader } from "@/components/ui/sidebar"
import { Loader } from "lucide-react"

export function TopBar() {
  return (
    <SidebarHeader className="flex h-xs items-center justify-center">
      <div className="flex flex-row text-sm items-center justify-center gap-2 w-full">
        <span className="mr-2 p-2 rounded-md bg-slate-600 dark:invert">
          <Loader size={24} className="h-5 w-5 text-amber-200" />
        </span>
            <p className="text-3xl font-normal text-amber-600 tracking-tight">HopeLens</p>
      </div>
    </SidebarHeader>
  )
}