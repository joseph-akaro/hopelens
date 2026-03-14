import React from 'react'
import { Card, CardDescription, CardTitle } from './ui/card';

interface CountryCardProps {
    country: string;
    region: string;
}

export const CountryCard = ({ country, region }: CountryCardProps) => {
  return (
    <Card className='w-full border-1 h-full justify-center items-center flex-col gap-2 p-4 rounded-md border border-muted text-foreground hover:bg-muted transition-colors'>
      <CardTitle>{country}</CardTitle>
      <CardDescription>{region}</CardDescription>
    </Card>
  )
}
