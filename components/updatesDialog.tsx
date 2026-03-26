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
import { Textarea } from "./ui/textarea"
import { SelectBox } from "./selectbox"


interface DialogFormProps {
    button?: React.ReactNode;
    buttonvisibility?: boolean;
}

const projects = [
    "Call To Thrive",
    "Africa Program Evaluation",
    "Step By Step"
]

const countries = [
    "South Sudan",
    "Kenya",
    "Burundi",
    "Uganda",
    "Tanzania",
    "Ethiopia",
    "Horn of Africa"
]

export function UpdatesDialog({...props}: DialogFormProps) {
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
            <DialogTitle className={"text-md font-semibold text-slate-950"}>Submit Update</DialogTitle>
          </DialogHeader>
          <FieldGroup className="overflow-y-scroll p-2">
            <Field>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title"/>
            </Field>
                 <Field>
              <Label htmlFor="project">Project</Label>
              <SelectBox items={projects}/>
            </Field>
                 <Field>
              <Label htmlFor="country">Country</Label>
              <SelectBox items={countries}/>
            </Field>
            <Field>
              <Label htmlFor="update">Update</Label>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  className="w-full h-30"
                />
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
