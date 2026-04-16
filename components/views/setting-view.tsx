import {SettingsCard } from '@neondatabase/auth/react/ui'

export async function Setting() {
  return (
    <div className="container flex flex-col gap-4">
        <SettingsCard 
            title="Settings" 
            description="Manage your account settings and preferences." 
            instructions="Use the options below to update your account information, change your password, and configure other settings."
        />
    </div>
  )
}