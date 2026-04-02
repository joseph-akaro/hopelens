"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ButtonPrimary } from "./button-primary";
import { PlusCircle } from "lucide-react";

type InputField = {
  name: string;
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
};

type DialogFormProps = {
  triggerText: string;
  title: string;
  description?: string;
  inputs: InputField[];
  submitLabel?: string;
  cancelLabel?: string;
  action: (formData: FormData) => void | Promise<void>;
};

export function FormDialog({
  triggerText,
  title,
  description,
  inputs,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  action,
}: DialogFormProps) {
  return (
    <Dialog>
      <DialogTrigger type="button" className="w-30 h-8 text-sm rounded-md text-slate-50 bg-primary flex items-center justify-center gap-1 cursor-pointer">
        <PlusCircle size={18}/>
        {triggerText}
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <form action={action}>
          <DialogHeader className="py-2">
            <DialogTitle>{title}</DialogTitle>
            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>

          <FieldGroup>
            {inputs.map((input) => (
              <Field key={input.name}>
                <Label htmlFor={input.name}>{input.label}</Label>
                <Input
                  id={input.name}
                  name={input.name}
                  type={input.type || "text"}
                  defaultValue={input.defaultValue}
                  placeholder={input.placeholder}
                />
              </Field>
            ))}
          </FieldGroup>

          <DialogFooter className="mt-4 cursor-pointer items-center">
            <DialogClose type="button" className="outline w-18 h-9 rounded-md text-muted-foreground cursor-pointer">
              {cancelLabel}
            </DialogClose>
            <Button type="submit">{submitLabel}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}