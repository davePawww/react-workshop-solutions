import { useLocalStorage } from '@/hooks/useLocalStorage'

import type { Todo } from '@/features/todo/todo.types'

export function useTodoList() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    }

    setTodos((prev) => [newTodo, ...prev])
  }

  return { todos, addTodo }
}
