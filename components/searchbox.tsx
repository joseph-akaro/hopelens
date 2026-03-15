import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

interface searchboxProps {
    placeholder?: string;
    label: string;
}

export function SearchBox({ placeholder, label} : searchboxProps) {
  return (
    <ButtonGroup className="max-w-sm w-xs">
      <Button variant="outline" aria-label={label}>
        <SearchIcon />
      </Button>
      <Input placeholder={placeholder} />
    </ButtonGroup>
  )
}