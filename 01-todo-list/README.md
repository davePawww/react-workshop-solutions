# Todo List Application

A React-based Todo List application built with TypeScript and Vite, featuring a modern component architecture using shadcn/ui components.

## Features

- Add, edit, and delete todo items
- Filter todos by status (all, active, completed)
- Due date tracking with calendar picker
- Local storage persistence
- Responsive design
- Category/tag badges

## Project Structure

```
src/
├── components/ui/       # shadcn/ui components (button, dialog, input, etc.)
├── features/todo/       # Todo feature module
│   ├── TodoItem.tsx     # Individual todo item
│   ├── TodoList.tsx     # List of todos
│   ├── TodoForm.tsx    # Form for adding/editing todos
│   ├── TodoFilter.tsx  # Filter controls
│   └── todo.hooks.ts   # Custom hooks for todo logic
├── hooks/              # Shared hooks (useLocalStorage)
├── pages/              # Page components
└── utils/              # Utility functions
```

## Tech Stack

- React 19
- TypeScript
- Vite
- shadcn/ui
- Tailwind CSS (implied by shadcn/ui)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## What's next

1. **State Management**: Consider migrating from localStorage + useState to a proper state management solution like Zustand or React Query for better scalability
2. **Testing**: Add unit tests with Vitest and component tests with React Testing Library
3. **Accessibility**: Add ARIA labels and keyboard navigation support for better accessibility
4. **i18n**: Add internationalization for multi-language support
5. **Drag & Drop**: Implement drag-and-drop reordering for todo items (could use @dnd-kit)
6. **Undo/Redo**: Add undo functionality for deleted todos
7. **Categories**: Add color-coded categories or projects for organizing todos
8. **Subtasks**: Allow creating subtasks under each todo
9. **Priority Levels**: Add priority levels (high, medium, low) to todos
10. **Reminders**: Add notification/reminder system for due dates

## TODO

- [ ] Implement proper error boundaries
- [ ] Add loading states and skeleton UI
- [ ] Set up CI/CD pipeline
- [ ] Add E2E tests with Playwright
- [ ] Implement dark mode toggle
- [ ] Instead of double-click to update a todo item, just add an edit button instead
