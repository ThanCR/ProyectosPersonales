import { FilterBar } from "./FilterBar"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  return (
    <div className="border border-border p-5 rounded-2xl w-6/10">
      <div className="w-full max-w-96 m-auto mb-5">
        <FilterBar />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1 xl:gap-5">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  )
}
