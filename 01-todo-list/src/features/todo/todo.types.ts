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
}
