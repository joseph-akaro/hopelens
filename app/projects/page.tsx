
import { AppSidebar } from "@/components/app-sidebar"
import { ProjectCard } from "@/components/project-card"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ProjectView } from "@/components/views/project-view"
import { GetProjects } from "./actions"

export default async function Page() {
  // fetching projects from server actions
  const projects = await GetProjects()

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <SiteHeader />
            <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 p-4 md:gap-6 md:py-6">
                    <ProjectView />
                    <div  className="grid sm:grid-cols-3 gap-4 w-full">
                    {
                      projects.map((project) => (
                        <div key={project.id}>
                          <ProjectCard imageUrl={project.imageUrl} title={project.title} stage={project.stage} shortdescription={project.shortDescription} countries={project.participatingCountries.length}/>
                        </div>
                      ))
                    }
                  </div>
                </div>
            </div>
            </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
