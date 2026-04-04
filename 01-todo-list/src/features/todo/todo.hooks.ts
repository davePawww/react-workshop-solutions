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

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }

        return todo
      }),
    )
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return { todos, addTodo, toggleTodo, deleteTodo }
}
