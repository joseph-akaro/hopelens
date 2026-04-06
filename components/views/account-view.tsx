
import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarBadge } from '../ui/avatar'
import { AvatarImage, AvatarFallback } from '../ui/avatar'
import { getCurrentUserAction } from "@/app/actions/user-action"
import { CameraIcon, Mail } from 'lucide-react'

export async function AccountView(){

  return (
    <div className="container flex flex-col gap-4">
        <h1 className='text-lg text-primary'>My Account</h1>
        <UserCard />
    </div>
  )
}



export async function UserCard(){
    const user = await getCurrentUserAction()

    const formattedName = user.name?.charAt(0) as string

    return(
        <Card>
            <CardHeader className='flex flex-row gap-6 items-center'>
                <Avatar className="size-20 outline-4 outline-muted">
                    <AvatarImage src={user.image as string} alt={user.name as string} />
                    <AvatarFallback className="rounded-lg">{formattedName.charAt(0)}</AvatarFallback>
                </Avatar>
               <div className='flex flex-col itmes-center justify-between gap-1'>
                    <CardTitle className='text-primary text-lg'>{user.name as string}</CardTitle>
                    <CardDescription className='text-muted-foreground text-sm'>{user.role}</CardDescription>
                    <CardDescription className='text-muted-foreground text-sm flex gap-2 items-center'>
                        <Mail className='w-4 h-4' />
                        {user.email}
                    </CardDescription>
               </div>
            </CardHeader>
        </Card>
    )
}
