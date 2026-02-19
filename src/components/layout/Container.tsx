import { TodoAddForm } from "../todo/TodoAddForm"
import { TodoList } from "../todo/TodoList"

export const Container = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-2 m-auto sm:flex-row"> 
      <TodoList/>
      <TodoAddForm/>
    </div>
  )
}
