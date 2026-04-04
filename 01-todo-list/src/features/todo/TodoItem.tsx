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

import type { TodoItemProps } from '@/features/todo/todo.types'

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-2">
      <Checkbox checked={todo.completed} onCheckedChange={() => onToggle(todo.id)} />
      <p className={todo.completed ? 'line-through opacity-30' : ''}>{todo.text}</p>

      <div className="ml-auto cursor-pointer">
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="destructive" size="icon-xs">
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
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={() => onDelete(todo.id)} variant="destructive">
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
