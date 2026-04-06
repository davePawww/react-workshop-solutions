import { format } from 'date-fns'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { PRIORITY } from '@/features/todo/todo.constants'

import type { TodoFormProps, TPriority } from '@/features/todo/todo.types'

export default function TodoForm({
  mode,
  initialValues,
  onSubmit,
  open,
  onOpenChange,
}: TodoFormProps) {
  const [description, setDescription] = useState(initialValues?.text ?? '')
  const [date, setDate] = useState(initialValues?.dueDate ?? new Date())
  const [priority, setPriority] = useState<TPriority>(initialValues?.priority ?? PRIORITY.LOW)
  const [openCalendar, setOpenCalendar] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        {mode === 'create' && (
          <DialogTrigger asChild>
            <Button
              className="w-full cursor-pointer transition-all hover:scale-105"
              type="button"
              variant="default"
            >
              Create a new Todo
            </Button>
          </DialogTrigger>
        )}
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>
              {mode === 'create' ? 'Create a new Todo Item' : 'Update Todo Item'}
            </DialogTitle>
            <DialogDescription>
              {mode === 'create' ? 'Fill out the form below' : 'Update the form below'}
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="text">Description</FieldLabel>
              <Input
                id="text"
                name="text"
                aria-labelledby="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="due-date">Due Date</FieldLabel>
              <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground w-53 justify-between text-left font-normal"
                  >
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                      setDate(date ? date : new Date())
                      setOpenCalendar(false)
                    }}
                    defaultMonth={date}
                  />
                </PopoverContent>
              </Popover>
            </Field>

            <Field>
              <FieldLabel htmlFor="priority">Priority</FieldLabel>
              <NativeSelect
                id="priority"
                name="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value as TPriority)}
              >
                <NativeSelectOption value="high">High</NativeSelectOption>
                <NativeSelectOption value="medium">Medium</NativeSelectOption>
                <NativeSelectOption value="low">Low</NativeSelectOption>
              </NativeSelect>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              {mode === 'create' ? (
                <Button type="button" onClick={() => onSubmit(description, date, priority)}>
                  Create New
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => onSubmit(description, date, priority, initialValues?.id)}
                >
                  Update Todo
                </Button>
              )}
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
