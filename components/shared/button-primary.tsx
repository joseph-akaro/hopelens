import React from 'react'
import { Button } from '../ui/button'
import { PlusCircle } from 'lucide-react'

interface ButtonPrimaryProps {
  onClick?: () => void;
  title?: string;
}

export const ButtonPrimary = ({ onClick, title }: ButtonPrimaryProps) => {
  return (
    <Button variant="default" onClick={onClick} className="cursor-pointer">
        <PlusCircle className="mr-2" />
        {title || "Add new"}
    </Button>
  )
}
