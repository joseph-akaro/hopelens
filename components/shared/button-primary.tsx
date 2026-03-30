import React from 'react'
import { Button } from '../ui/button'
import { PlusCircle } from 'lucide-react'

export const ButtonPrimary = () => {
  return (
    <Button variant="default">
        <PlusCircle className="mr-2" />
        Add Champion
    </Button>
  )
}
