import { AddTodo } from '@/features/todo'

export default function Todo() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="min-h-96 min-w-96 rounded-xl border-2 p-4 shadow-2xl">
        <AddTodo />
      </div>
    </main>
  )
}
