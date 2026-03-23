import { Loader } from "lucide-react"
import { SidebarHeader } from "../ui/sidebar"

export function TopBar() {
  return (
    <SidebarHeader className="flex h-sm items-center justify-center">
      <div className="flex flex-row text-sm items-center justify-center gap-2 w-full">
        <span className="mr-2 p-2 rounded-md bg-blue-600 text-slate-200 animate-pulse">
          <Loader size={24} className="h-5 w-5 text-slate-50 dark:text-amber-600" />
        </span>
            <p className="text-3xl font-normal text-slate-200 tracking-tight">HopeLens</p>
      </div>
    </SidebarHeader>
  )
}