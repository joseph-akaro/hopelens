import React from 'react'
import { Button } from '../ui/button'
import { PlusCircle } from 'lucide-react'

interface ButtonPrimaryProps {
  title?: string;
}

export const ButtonPrimary = ({ title }: ButtonPrimaryProps) => {
  return (
    <Button variant="default" className="cursor-pointer">
        <PlusCircle className="mr-2" />
        {title || "Add new"}
    </Button>
  )
}
