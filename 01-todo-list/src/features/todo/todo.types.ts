import { PRIORITY, FILTER } from '@/features/todo/todo.constants'

export type TPriority = (typeof PRIORITY)[keyof typeof PRIORITY]

export type Todo = {
  id: string
  text: string
  completed: boolean
  dueDate: Date
  priority: TPriority
}

export type AddTodoProps = {
  onAdd: (text: string, dueDate: Date, priority: TPriority) => void
}

export type TodoListProps = {
  todos: Todo[]
  filter: TFilter
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (todo: Todo) => void
}

export type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (todo: Todo) => void
}

export type TFilter = (typeof FILTER)[keyof typeof FILTER]

export type TodoFilterProps = {
  filter: TFilter
  onFilterChange: (filter: TFilter) => void
  remainingTodos: number
}

export type TodoDeleteDialogProps = {
  ariaLabel: string
  buttonLabel: string
  dialogTitle: string
  dialogDescription: string
  onConfirmDeletion: () => void
}

export type TodoFormProps = {
  mode: 'create' | 'update'
  initialValues?: Partial<Todo>
  onSubmit: (description: string, date: Date, priority: TPriority, id?: string) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
