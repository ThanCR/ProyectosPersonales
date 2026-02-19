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
  {
    id: 2,
    title: 'Mine stone',
    description:
      'Extract stone to build stronger structures and improve durability.',
    remainingTime: 300,
    created: new Date(),
    deadline: new Date(Date.now() + 300 * 1000),
    completed: false
  },
  {
    id: 3,
    title: 'Craft wooden pickaxe',
    description:
      'Use collected wood to craft a wooden pickaxe and increase mining efficiency.',
    remainingTime: 180,
    created: new Date(),
    deadline: new Date(Date.now() + 180 * 1000),
    completed: false
  },
  {
    id: 4,
    title: 'Explore nearby forest',
    description:
      'Scout the nearby forest to discover new resources and potential threats.',
    remainingTime: 600,
    created: new Date(),
    deadline: new Date(Date.now() + 600 * 1000),
    completed: false
  },
]