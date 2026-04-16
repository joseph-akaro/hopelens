'use client'
import { AccountView } from '@neondatabase/auth/react/ui'
import { usePathname } from 'next/navigation'

export function Account() {
    const pathname = usePathname()
  return (
    <div className="container flex flex-col gap-4">
        <AccountView pathname={pathname} />
    </div>
  )
}