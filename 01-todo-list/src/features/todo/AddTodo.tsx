import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AddTodo() {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim()) {
      setValue(e.target.value)
    }
  }

  const handleClick = () => {
    console.log(value)
  }

  return (
    <div className="flex gap-2">
      <Input type="text" value={value} onChange={handleChange} />
      <Button
        variant="default"
        size="icon"
        className="cursor-pointer transition-all hover:scale-105"
        onClick={handleClick}
      >
        +
      </Button>
    </div>
  )
}
