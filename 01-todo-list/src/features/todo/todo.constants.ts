import type { TFilter } from '@/features/todo/todo.types'

export const FILTER: { ALL: TFilter; ACTIVE: TFilter; COMPLETED: TFilter } = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
}
