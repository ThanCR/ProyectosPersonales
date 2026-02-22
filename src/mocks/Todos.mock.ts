import type { Todo } from "@/models/Todo";

export const todos: Todo[] = [
  {
    id: 1,
    title: 'Gather wood',
    description:
      'Collect wood to craft your first basic tools and unlock better equipment.',
    remainingTime: 120, // segundos
    created: new Date(),
    deadline: new Date(Date.now() + 120 * 1000),
    completed: true
  },
]