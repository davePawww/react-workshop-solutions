import { isToday, isThisWeek } from 'date-fns'

export function formatTodoItemDate(date: Date) {
  if (isToday(date)) return 'Today'
  if (isThisWeek(date)) return 'This week'
  return 'Upcoming'
}
