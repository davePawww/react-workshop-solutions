import { AddTodo, TodoList } from '@/features/todo'
import { useTodoList } from '@/features/todo/todo.hooks'

export default function Todo() {
  const { todos, addTodo } = useTodoList()

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex min-h-96 min-w-96 flex-col gap-4 rounded-xl border-2 p-4 shadow-2xl">
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} />
      </div>
    </main>
  )
}
