import { AddTodo } from '@/features/todo'
import { useTodoList } from '@/features/todo/todo.hooks'

export default function Todo() {
  const { addTodo } = useTodoList()

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="min-h-96 min-w-96 rounded-xl border-2 p-4 shadow-2xl">
        <AddTodo onAdd={addTodo} />
      </div>
    </main>
  )
}
