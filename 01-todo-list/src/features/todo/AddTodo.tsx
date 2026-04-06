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
import { type TPriority, type AddTodoProps } from '@/features/todo/todo.types'

export function AddTodo({ onAdd }: AddTodoProps) {
  const [value, setValue] = useState('')
  const [date, setDate] = useState<Date>(new Date())
  const [priority, setPriority] = useState<TPriority>(PRIORITY.LOW)
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    const trimmed = value.trim()
    if (!trimmed) return

    onAdd(trimmed, date, priority)
    setValue('')
  }

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            className="w-full cursor-pointer transition-all hover:scale-105"
            type="button"
            variant="default"
          >
            Create a new Todo
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Create a new Todo item</DialogTitle>
            <DialogDescription>Fill out below to create a new item</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="text">Description</FieldLabel>
              <Input
                id="text"
                name="text"
                aria-labelledby="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="due-date">Due Date</FieldLabel>
              <Popover open={open} onOpenChange={setOpen}>
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
                      setOpen(false)
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
              <Button type="button" onClick={handleClick}>
                Create new
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
