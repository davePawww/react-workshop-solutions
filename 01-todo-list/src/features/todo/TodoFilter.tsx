import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { FILTER } from '@/features/todo/todo.constants'

import type { TodoFilterProps } from '@/features/todo/todo.types'

const filters = [
  { value: FILTER.ALL, label: 'All' },
  { value: FILTER.ACTIVE, label: 'Active' },
  { value: FILTER.COMPLETED, label: 'Completed' },
]

export function TodoFilter({ filter, onFilterChange, remainingTodos }: TodoFilterProps) {
  return (
    <div className="flex items-center justify-between">
      <ButtonGroup>
        {filters.map(({ value, label }) => (
          <Button
            key={value}
            variant={filter === value ? 'secondary' : 'outline'}
            size="sm"
            onClick={() => onFilterChange(value)}
            className="cursor-pointer"
          >
            {label}
          </Button>
        ))}
      </ButtonGroup>
      <p className="text-xs opacity-30">Remaining Todos: {remainingTodos}</p>
    </div>
  )
}
