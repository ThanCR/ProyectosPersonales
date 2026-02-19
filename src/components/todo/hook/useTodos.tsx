import { todos as data } from "@/mocks/Todos.mock"
import type { Todo } from "@/models/Todo"
import { useState } from "react"

export const useTodos = () => {

  const [todos, setTodos] = useState<Todo[]>(data)

  const completeTodo = (id: number) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: true } : todo))
  }

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo])
  }

  return {
    todos,


    completeTodo,
    removeTodo,
    addTodo
  }
}
