import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

interface fileuploadProps{
    title: string;
    type?: string | "file";
    id?: string;
    description?: string;
}

export function FileUpload({...props}: fileuploadProps) {
  return (
    <Field>
      <FieldLabel htmlFor={props.id}>{props.title}</FieldLabel>
      <Input id={props.id} type={props.type} />
      <FieldDescription>{props.description}</FieldDescription>
    </Field>
  )
}
