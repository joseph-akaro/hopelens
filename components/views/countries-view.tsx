import React from 'react'
import { ViewTitle,  } from '../shared/view-title'
import { CountryTable, columns } from '../countries-table'
import { fetchCountries } from "@/lib/services/country.service"
import { createCountryAction } from '@/app/actions/add-country'
import { FormDialog } from '../shared/form-dialog'


export async function CountriesView(){
  const countries = await fetchCountries();
  
  return (
     <div className="container">
          <ViewTitle description="Participating countries and their status" title="Countries" childButton={<AddCountry />} />
          <CountryTable columns={columns} data={countries} />
      </div>
  )
}

export function AddCountry() {
  return (
    <FormDialog
      triggerText="New Country"
      title="New Country"
      description="Make changes and save."
      action={createCountryAction}
      inputs={[
        {
          name: "name",
          label: "Name",
        },
        {
          name: "email",
          label: "Email",
        },
        {
          name: "phone",
          label: "Phone",
        },
               {
          name: "region",
          label: "Region",
          type: "select"
        },
      ]}
    />
  );
}

