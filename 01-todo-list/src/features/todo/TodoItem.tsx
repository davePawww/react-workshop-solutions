import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { TodoDeleteDialog } from '@/features/todo/TodoDeleteDialog'
import { capitalizeFirstLetter, formatTodoItemDate } from '@/utils'

import type { TodoItemProps } from '@/features/todo/todo.types'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  return (
    <li className="flex items-center gap-2" onDoubleClick={() => onEdit(todo)}>
      <Checkbox
        id={todo.id}
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        aria-label={todo.text}
      />
      <Label htmlFor={todo.id} className={todo.completed ? 'line-through opacity-30' : ''}>
        {todo.text}
      </Label>

      <div className="ml-auto flex items-center gap-1">
        <Badge className="rounded" variant="secondary">
          {capitalizeFirstLetter(todo.priority)}
        </Badge>
        <Badge className="rounded" variant="outline">
          {formatTodoItemDate(todo.dueDate)}
        </Badge>
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
