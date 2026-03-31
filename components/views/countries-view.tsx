"use client" 
import React from 'react'
import { ButtonPrimary } from '../shared/button-primary'
import { ViewTitle,  } from '../shared/view-title'
import { CountryTable, columns } from '../countries-table'
import { fetchCountries } from "@/lib/services/country.service"

const countries = await fetchCountries();

export const CountriesView = () => {
  return (
     <div className="container">
          <ViewTitle description="Participating countries and their status" title="Countries" childButton={<ButtonPrimary title='New Country'/>} />
          <CountryTable columns={columns} data={countries} />
      </div>
  )
}
