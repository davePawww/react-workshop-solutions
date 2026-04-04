import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import type { AddTodoProps } from '@/features/todo/todo.types'

export function AddTodo({ onAdd }: AddTodoProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return

    onAdd(trimmed)
    setValue('')
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        type="submit"
        variant="default"
        size="icon"
        className="cursor-pointer transition-all hover:scale-105"
      >
        +
      </Button>
    </form>
  )
}
