import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { TodoDeleteDialog } from '@/features/todo/TodoDeleteDialog'

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
        <TodoDeleteDialog
          ariaLabel="Delete Todo"
          buttonLabel="-"
          dialogTitle="You are about to delete a todo item"
          dialogDescription="Are you sure you want to delete this todo item?"
          onConfirmDeletion={() => onDelete(todo.id)}
        />
      </div>
    </li>
  )
}
