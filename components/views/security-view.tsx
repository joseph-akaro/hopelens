import { SecuritySettingsCards } from '@neondatabase/auth/react/ui'

export async function Security() {
  return (
    <div className="container flex flex-col gap-4">
        <SecuritySettingsCards />
    </div>
  )
}