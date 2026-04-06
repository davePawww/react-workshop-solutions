import { useCallback, useMemo } from 'react'

import { useLocalStorage } from '@/hooks/useLocalStorage'

import type { Todo, TPriority } from '@/features/todo/todo.types'

export function useTodoList() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])

  const addTodo = useCallback(
    (text: string, dueDate: Date, priority: TPriority) => {
      const newTodo = {
        id: crypto.randomUUID(),
        text,
        dueDate,
        priority,
        completed: false,
      }

      setTodos((prev) => [newTodo, ...prev])
    },
    [setTodos],
  )

  const toggleTodo = useCallback(
    (id: string) => {
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
    (id: string) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    },
    [setTodos],
  )

  const activeTodosCount = useMemo(() => {
    return todos.filter((t) => !t.completed).length
  }, [todos])

  const deleteAllCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed))
  }, [setTodos])

  const updateTodo = useCallback(
    (id: string, text: string, dueDate: Date, priority: TPriority) => {
      setTodos((prev) =>
        prev.map((t) => {
          if (t.id === id) {
            return {
              ...t,
              text,
              dueDate,
              priority,
            }
          }

          return t
        }),
      )
    },
    [setTodos],
  )

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    activeTodosCount,
    deleteAllCompleted,
    updateTodo,
  }
}
