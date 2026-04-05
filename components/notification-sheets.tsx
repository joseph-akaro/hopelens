import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { InboxIcon , BellDot } from "lucide-react"

export const NotificationSheets = () => {
  return (
    <Sheet >
      <SheetTrigger >
        <BellDot className="h-[1.1rem] w-[1.1rem] cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">Notifications</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4 items-start justify-center">
          <span className="flex flex-col items-center justify-between align-middle gap-4">
             <InboxIcon  className="w-10 h-10 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">No Notification!</p>
          </span>
        </div>
      </SheetContent>
    </Sheet>
  )
}