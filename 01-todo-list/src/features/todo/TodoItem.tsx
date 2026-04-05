import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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
import { Label } from '@/components/ui/label'

import type { TodoItemProps } from '@/features/todo/todo.types'

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-2">
      <Checkbox
        id={todo.id}
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        aria-label={todo.text}
      />
      <Label htmlFor={todo.id} className={todo.completed ? 'line-through opacity-30' : ''}>
        {todo.text}
      </Label>

      <div className="ml-auto cursor-pointer">
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button type="button" variant="destructive" aria-label="Delete todo" size="icon-xs">
                -
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
              <DialogHeader>
                <DialogTitle>You are about to delete a Todo Item</DialogTitle>
                <DialogDescription>Are you sure you want to delete this item?</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="button" onClick={() => onDelete(todo.id)} variant="destructive">
                  Yes, Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </li>
  )
}
