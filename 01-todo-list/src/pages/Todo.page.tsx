import { useState } from 'react'

import { AddTodo, TodoFilter, TodoList } from '@/features/todo'
import { FILTER } from '@/features/todo/todo.constants'
import { useTodoList } from '@/features/todo/todo.hooks'

import type { TFilter } from '@/features/todo/todo.types'

export default function Todo() {
  const { todos, addTodo, toggleTodo, deleteTodo, activeTodosCount } = useTodoList()
  const [filter, setFilter] = useState<TFilter>(FILTER.ALL)

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTER.ACTIVE) return !todo.completed
    if (filter === FILTER.COMPLETED) return todo.completed
    return true
  })

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex min-h-96 min-w-96 flex-col gap-4 rounded-xl border-2 p-4 shadow-2xl">
        <AddTodo onAdd={addTodo} />
        <TodoFilter filter={filter} onFilterChange={setFilter} remainingTodos={activeTodosCount} />
        <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </main>
  )
}
