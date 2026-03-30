import React from 'react'
import { ButtonPrimary } from '../shared/button-primary'
import { ViewTitle } from '../shared/view-title'

export const CountriesView = () => {
  return (
     <div className="container">
          <ViewTitle description="Participating countries and their status" title="Countries" childButton={<ButtonPrimary title='New Country'/>} />
      </div>
  )
}
