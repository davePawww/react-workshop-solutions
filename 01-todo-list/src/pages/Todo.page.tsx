import { useState } from 'react'

import { AddTodo, TodoDeleteDialog, TodoFilter, TodoList } from '@/features/todo'
import { FILTER } from '@/features/todo/todo.constants'
import { useTodoList } from '@/features/todo/todo.hooks'

import type { TFilter } from '@/features/todo/todo.types'

export default function Todo() {
  const { todos, addTodo, toggleTodo, deleteTodo, activeTodosCount, deleteAllCompleted } =
    useTodoList()
  const [filter, setFilter] = useState<TFilter>(FILTER.ALL)

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTER.ACTIVE) return !todo.completed
    if (filter === FILTER.COMPLETED) return todo.completed
    return true
  })

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="m-4 flex min-h-96 w-full max-w-md flex-col gap-4 rounded-xl border-2 p-4 shadow-2xl">
        <AddTodo onAdd={addTodo} />
        <TodoFilter filter={filter} onFilterChange={setFilter} remainingTodos={activeTodosCount} />
        <TodoList
          todos={filteredTodos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
        <TodoDeleteDialog
          ariaLabel="Delete all completed"
          buttonLabel="Clear Completed"
          dialogTitle="You are about to delete all completed todos"
          dialogDescription="Are you sure you want to delete all completed todos?"
          onConfirmDeletion={() => deleteAllCompleted()}
        />
      </div>
    </main>
  )
}
