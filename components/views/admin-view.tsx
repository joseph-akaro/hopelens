
import { SectionCards } from '../section-cards'
import { ChartAreaInteractive } from '../chart-area-interactive'
import { DataTable } from '../data-table'
import data from "@/app/data.json"
import { ActivityCard } from '../activity-card'


export async function AdminView() {
  return (
    <>  
        <SectionCards />
        <div className="flex flex-col md:flex-row gap-4 px-4 lg:px-6">
          <ChartAreaInteractive />
          <ActivityCard />
        </div>
        <DataTable data={data}/>
    </>
                  
  )
}
