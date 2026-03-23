import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { SelectBox } from "../selectbox"
import { FileUpload } from "../fileupload"
import { DatePicker } from "../datepicker"


interface DialogFormProps {
    button?: React.ReactNode;
    buttonvisibility?: boolean;
}

const status =[ "Draft", "Active", "Completed", "Overdue"]

export function ProjectDialog({...props}: DialogFormProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger >
          <div className='ml-auto flex items-center gap-4'>
                {props.buttonvisibility && props.button}
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md w-[500px] sm:max-h-md h-[80%]">
          <DialogHeader>
            <DialogTitle className={"text-md font-semibold text-slate-950"}>Add Project</DialogTitle>
          </DialogHeader>
          <FieldGroup className="overflow-y-scroll p-2">
            <Field>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title"/>
            </Field>
            <Field>
              <Label htmlFor="shortDescription">Short Description</Label>
              <Input id="shortDescription" name="shortDescription"/>
            </Field>
            <Field>
              <Label htmlFor="description">Description</Label>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  className="w-full h-30"
                />
            </Field>
            <Field>
              <Label htmlFor="image">Status</Label>
              <SelectBox items={status}/>
            </Field>
            <Field>
              <Label htmlFor="image">Deadline</Label>
              <DatePicker />
            </Field>
            <Field>
            <FileUpload title="Cover Image" type="file" id="picture"  description="Choose image to upload."/>
            </Field>
             <Field>
              <Label htmlFor="countries">Participating Countries</Label>
              <Input id="countries" name="countries"/>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose>
              <Button variant="outline" >Cancel</Button>
            </DialogClose>
            <Button type="submit" className={"hover:bg-blue-900 bg-blue-800 text-slate-50"}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
