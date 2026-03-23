import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Search } from "lucide-react"


interface searchboxProps {
    placeholder?: string;
}

export function SearchBox({...props} : searchboxProps) {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder={props.placeholder} />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end"></InputGroupAddon>
    </InputGroup>
  )
}
