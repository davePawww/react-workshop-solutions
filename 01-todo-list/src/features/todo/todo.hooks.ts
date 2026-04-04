import { useCallback, useMemo } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'

import type { Todo } from '@/features/todo/todo.types'

export function useTodoList() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])

  const addTodo = useCallback(
    (text: string) => {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      }

      setTodos((prev) => [newTodo, ...prev])
    },
    [setTodos],
  )

  const toggleTodo = useCallback(
    (id: number) => {
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
    },
    [setTodos],
  )

  const deleteTodo = useCallback(
    (id: number) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    },
    [setTodos],
  )

  const activeTodosCount = useMemo(() => {
    return todos.filter((t) => !t.completed).length
  }, [todos])

  return { todos, addTodo, toggleTodo, deleteTodo, activeTodosCount }
}
