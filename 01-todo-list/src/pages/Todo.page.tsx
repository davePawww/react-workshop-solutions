import { useState } from 'react'

import { TodoDeleteDialog, TodoFilter, TodoList } from '@/features/todo'
import { FILTER } from '@/features/todo/todo.constants'
import { useTodoList } from '@/features/todo/todo.hooks'
import TodoForm from '@/features/todo/TodoForm'

import type { TFilter, Todo } from '@/features/todo/todo.types'

export default function Todo() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    activeTodosCount,
    deleteAllCompleted,
    updateTodo,
  } = useTodoList()
  const [filter, setFilter] = useState<TFilter>(FILTER.ALL)
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null)
  const [open, setOpen] = useState(false)

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTER.ACTIVE) return !todo.completed
    if (filter === FILTER.COMPLETED) return todo.completed
    return true
  })

  const onEdit = (todo: Todo) => {
    setSelectedTodo(todo)
    setOpen(true)
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="m-4 flex min-h-96 w-full max-w-md flex-col gap-4 rounded-xl border-2 p-4 shadow-2xl">
        <TodoForm
          mode="create"
          onSubmit={(description, date, priority) => addTodo(description, date, priority)}
        />
        <TodoFilter filter={filter} onFilterChange={setFilter} remainingTodos={activeTodosCount} />
        <TodoList
          todos={filteredTodos}
          filter={filter}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={onEdit}
        />
        <TodoDeleteDialog
          ariaLabel="Delete all completed"
          buttonLabel="Clear Completed"
          dialogTitle="You are about to delete all completed todos"
          dialogDescription="Are you sure you want to delete all completed todos?"
          onConfirmDeletion={() => deleteAllCompleted()}
        />
      </div>
      <TodoForm
        key={selectedTodo?.id}
        mode="update"
        open={open}
        onOpenChange={setOpen}
        initialValues={selectedTodo!}
        onSubmit={(description, date, priority, id) => {
          updateTodo(id!, description, date, priority)
          setOpen(false)
        }}
      />
    </main>
  )
}
