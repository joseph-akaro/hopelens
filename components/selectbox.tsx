import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const  SelectBox = () => {

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Draft" />
      </SelectTrigger>
      <SelectContent side="top">
        <SelectGroup>
            <SelectItem value={"Draft"}>Draft</SelectItem>
            <SelectItem value={"Active"}>Active</SelectItem>
            <SelectItem value={"Completed"}>Completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}