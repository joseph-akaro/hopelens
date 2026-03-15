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
import { FolderPlus } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { SelectBox } from "./selectbox"


interface DialogFormProps {
    buttonTitle?: string;
    buttonvisibility?: boolean;
}

export function ProjectDialog({ buttonTitle, buttonvisibility }: DialogFormProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger>
          <div className='ml-auto flex items-center gap-4'>
                {buttonvisibility && (
                    <Button 
                        variant="outline" size="sm"
                        className={"bg-blue-700 p-2 flex flex-row gap-2 text-slate-50 hover:text-slate-50 hover:bg-blue-800 cursor-pointer"}
                        >
                        <span><FolderPlus className="h-4 w-4" /></span>
                        {buttonTitle}
                    </Button>
                )}
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
              <SelectBox />
            </Field>
            <Field>
              <Label htmlFor="image">Cover Image</Label>
              <Input id="image" name="image"/>
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
