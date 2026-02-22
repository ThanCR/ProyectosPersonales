import { useTodos } from "../todo/hook/useTodos"
import { TodoAddForm } from "../todo/TodoAddForm"
import { TodoList } from "../todo/TodoList"

export const Container = () => {

  const { todos, addTodo, setCompleted, removeTodo} = useTodos()

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-5 p-2 m-auto sm:flex-row xl:w-8/10"> 
      <TodoList todos={todos} setCompleted={setCompleted} removeTodo={removeTodo}/>
      <TodoAddForm addTodo={addTodo}/>
    </div>
  )
}
