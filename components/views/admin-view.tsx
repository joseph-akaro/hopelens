
import { SectionCards } from '../section-cards'
import { ChartAreaInteractive } from '../chart-area-interactive'
import { DataTable } from '../data-table'
import data from "@/app/data.json"


export async function AdminView() {
  return (
    <>
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data}/>
    </>
                  
  )
}
