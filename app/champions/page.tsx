import { AppSidebar } from "@/components/app-sidebar"
import { AdminView } from "@/components/views/admin-view"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ChampionView } from "@/components/views/champion-view"

export default function Page() {

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
            <div className="flex flex-1 flex-col gap-2">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-2 p-4">
                    <ChampionView />
                </div>
            </div>
            </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
