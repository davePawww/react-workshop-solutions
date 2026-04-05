import { useState, type SubmitEvent } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { AddTodoProps } from '@/features/todo/todo.types'

export function AddTodo({ onAdd }: AddTodoProps) {
  const [value, setValue] = useState('')

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return

    onAdd(trimmed)
    setValue('')
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Label htmlFor="new-todo-input" className="sr-only">
        Add a new todo
      </Label>
      <Input
        id="new-todo-input"
        aria-label="New Todo Input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      <Button
        type="submit"
        variant="default"
        size="icon"
        aria-label="Add todo"
        className="cursor-pointer transition-all hover:scale-105"
      >
        +
      </Button>
    </form>
  )
}
