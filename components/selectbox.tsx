import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface selectboxProps {
  items: string[];
}

export const  SelectBox = ({...props} : selectboxProps) => {

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Draft" />
      </SelectTrigger>
      <SelectContent side="top">
        {
          props.items.map((item) => (
            <SelectGroup key={item}>
              <SelectItem value={item}>{item}</SelectItem>
            </SelectGroup>
          ))
        }
      </SelectContent>
    </Select>
  )
}