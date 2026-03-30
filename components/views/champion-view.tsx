import { ViewTitle } from "../shared/view-title"
import { ChampionTable, columns} from "../user-table"
import { ButtonPrimary } from "../shared/button-primary"
import { fetchAllUsers } from "@/lib/services/users.service"

const users = await fetchAllUsers();
// Mock data for champions


export async function ChampionView() {

  return (
    <div className="container">
        <ViewTitle description="Country representatives managing research updates" title="Champions" childButton={<ButtonPrimary />} />
      <ChampionTable columns={columns} data={users} />
    </div>
  )
}