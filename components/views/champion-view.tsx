
import { ViewTitle } from "../shared/view-title"
import { ChampionTable, columns} from "../user-table"
import { ButtonPrimary } from "../shared/button-primary"
import { fetchAllUsers } from "@/lib/services/users.service"


export async function ChampionView() {
  const users = await fetchAllUsers();

  return (
    <div className="container">
        <ViewTitle description="Country representatives managing research updates" title="Champions & Users" childButton={<ButtonPrimary title="New Champion"/>} />
      <ChampionTable columns={columns} data={users} />
    </div>
  )
}