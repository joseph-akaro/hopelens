import {SettingsCard } from '@neondatabase/auth/react/ui'

export async function Setting() {
  return (
    <div className="container flex flex-col gap-4">
       <SettingsCard
        title="Account Settings"
        description="Manage your account settings and set e-mail preferences."
      />
    </div>
  )
}