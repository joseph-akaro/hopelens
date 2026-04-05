
import React from 'react'
import { ButtonPrimary } from '../shared/button-primary'
import { ViewTitle,  } from '../shared/view-title'
import { UpdateTable } from '../updates-table'
import { fetchupdates } from '@/lib/services/update.service'
import { columns } from '../updates-table'

export async function UpdatesView(){
  const data = await fetchupdates();

  return (
     <div className="container">
          <ViewTitle description="Research updates submitted by champions" title="Updates" childButton={<ButtonPrimary title='Submit Update'/>} />
          <UpdateTable data={data} columns={columns}/>
      </div>
  )
}
