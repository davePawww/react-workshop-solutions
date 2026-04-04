export type Todo = {
  id: number
  text: string
  completed: boolean
}

export type AddTodoProps = {
  onAdd: (text: string) => void
}

export type TodoListProps = {
  todos: Todo[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export type TFilter = 'all' | 'active' | 'completed'

export type TodoFilterProps = {
  filter: TFilter
  onFilterChange: React.Dispatch<React.SetStateAction<TFilter>>
  remainingTodos: number
}
