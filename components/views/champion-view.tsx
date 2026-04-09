
import { ViewTitle } from "../shared/view-title"
import { ChampionTable, columns} from "../user-table"
import { ButtonPrimary } from "../shared/button-primary"
import { fetchAllUsers } from "@/lib/services/users.service"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Eye, ShieldCheckIcon, UserStarIcon } from "lucide-react";


export async function ChampionView() {
  const users = await fetchAllUsers();

  return (
    <div className="container gap-4 flex flex-col">
      <ViewTitle description="Country representatives managing research updates" title="Champions & Users" childButton={<ButtonPrimary title="New Champion"/>} />
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        <InfoCard title="Admin" description="Manages all projects and users" icon={<ShieldCheckIcon />} iconColo="text-blue-500 bg-blue-50 rounded-md"/>
        <InfoCard title="Champion" description="Manages country projects & partner lists" icon={<UserStarIcon />} iconColo="text-yellow-500 bg-yellow-50 rounded-md"/>
        <InfoCard title="Parnter" description="Views assigned projects" icon={<Eye />} iconColo="text-green-500 bg-green-50 rounded-md"/>
      </div>
      <ChampionTable columns={columns} data={users} />
    </div>
  )
}

interface infocard {
 title: string,
 icon: React.ReactNode | null,
 iconColo?: string,
 description?: string,
}

const InfoCard = ({...props}: infocard) => {
  return (
    <Card className="container-sm max-h-xs" size="sm">
      <CardHeader>
        <CardAction className={`${props.iconColo} w-8 h-8 flex items-center justify-center dark:bg-muted`}>
            {props.icon}
        </CardAction>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {props.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}