
import { AppSidebar } from "@/components/app-sidebar"
import { ProjectCard } from "@/components/project-card"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { ProjectView } from "@/components/views/project-view"


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
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <SiteHeader />
            <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 p-4 md:gap-6 md:py-6">
                    <ProjectView />
                    <div className="grid sm:grid-cols-3 gap-4 w-full">
                    <ProjectCard imageUrl="/images/pe.jpg" title="Program Evaluation" shortdescription={"This project’s goal is to evaluate the top three programs (17 Stories, Stories of Hope and Lead Today)..."} countries={4} stage={"Reporting & Analysis"}/>
                    <ProjectCard imageUrl="/images/cct-1.png" title="Call To Thrive" shortdescription={"This project’s goal is to evaluate the top three programs (17 Stories, Stories of Hope and Lead Today)..."} countries={3} stage={"Reporting & Analysis"}/>
                    <ProjectCard imageUrl="/images/lead.webp" title="Step By Step" shortdescription={"This project’s goal is to evaluate the top three programs (17 Stories, Stories of Hope and Lead Today)..."} countries={3} stage={"Planning"}/>
                    <ProjectCard imageUrl="/images/ha.jpg" title="Final Third" shortdescription={"This project’s goal is to evaluate the top three programs (17 Stories, Stories of Hope and Lead Today)..."} countries={1} stage={"Planning"}/>
                    <ProjectCard imageUrl="/images/gyc.png" title="Global Youth Culture" shortdescription={"This project’s goal is to evaluate the top three programs (17 Stories, Stories of Hope and Lead Today)..."} countries={1} stage={"Planning"}/>
                    <ProjectCard imageUrl="/images/cct.jpg" title="Equiping for Biblical Discipleship" shortdescription={"This project’s goal is to evaluate the top three programs (17 Stories, Stories of Hope and Lead Today)..."} countries={7} stage={"Planning"}/>
                    </div>
                </div>
            </div>
            </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
