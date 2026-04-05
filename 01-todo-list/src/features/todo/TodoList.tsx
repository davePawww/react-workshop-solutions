import { FILTER } from '@/features/todo/todo.constants'
import TodoItem from '@/features/todo/TodoItem'

import type { TodoListProps } from '@/features/todo/todo.types'

export function TodoList({ todos, filter, onToggle, onDelete }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
      {todos.length === 0 && filter === FILTER.ALL && <li>No todos yet</li>}
      {todos.length === 0 && filter === FILTER.COMPLETED && <li>No completed todos</li>}
      {todos.length === 0 && filter === FILTER.ACTIVE && <li>No active todos</li>}
    </ul>
  )
}
