
import React from 'react'
import { ButtonPrimary } from '../shared/button-primary'
import { ViewTitle,  } from '../shared/view-title'

export const UpdatesView = () => {
  return (
     <div className="container">
          <ViewTitle description="Research updates submitted by champions" title="Updates" childButton={<ButtonPrimary title='Submit Update'/>} />
      </div>
  )
}
