import type { FILTER } from '@/features/todo/todo.constants'

export type Todo = {
  id: string
  text: string
  completed: boolean
}

export type AddTodoProps = {
  onAdd: (text: string) => void
}

export type TodoListProps = {
  todos: Todo[]
  filter: TFilter
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export type TodoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export type TFilter = (typeof FILTER)[keyof typeof FILTER]

export type TodoFilterProps = {
  filter: TFilter
  onFilterChange: (filter: TFilter) => void
  remainingTodos: number
}
