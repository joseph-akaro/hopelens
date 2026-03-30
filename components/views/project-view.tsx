export const dynamic = "force-dynamic"

import React from 'react'
import { ButtonPrimary } from '../shared/button-primary'
import { ViewTitle,  } from '../shared/view-title'

export const ProjectView = () => {
  return (
     <div className="container">
          <ViewTitle description="Manage research projects across countries" title="Projects" childButton={<ButtonPrimary title='New Project'/>} />
      </div>
  )
}
