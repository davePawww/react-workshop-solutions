import TodoItem from '@/features/todo/TodoItem'

import type { TodoListProps } from '@/features/todo/todo.types'

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}
