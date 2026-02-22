import { todos as data } from "@/mocks/Todos.mock"
import type { Todo } from "@/models/Todo"
import { useState } from "react"

export const useTodos = () => {

  const [todos, setTodos] = useState<Todo[]>(data)

  const setCompleted = (id: number) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed:  !(todo.completed)} : todo))
  }

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

  const addTodo = (todo: Todo) => {
    setTodos(prev => [...prev, todo])
  }

  return {
    todos,
    setCompleted,
    removeTodo,
    addTodo
  }
}
