import type { Todo } from "@/models/Todo"
import { FilterBar } from "./FilterBar"
import { TodoItem } from "./TodoItem"

interface Props{
  todos: Todo[],
  removeTodo: (id: number) => void,
  completeTodo: (id: number) => void,
}

export const TodoList = ({todos, completeTodo, removeTodo}:Props) => {
  return (
    <div className="border border-border p-5 rounded-2xl max-w-96 w-full sm:max-w-full">
      <div className="w-full max-w-96 m-auto mb-5">
        <FilterBar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1 xl:gap-5">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.title}
            completeTodo={completeTodo}
            removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  )
}
