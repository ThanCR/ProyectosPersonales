import type { Todo } from "@/models/Todo"
import { useEffect, useState } from "react"
import { getTodosData } from "../data/getTodosData"
import { toast } from "sonner"

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => getTodosData())

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const setCompleted = (id: number) => {
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const removeTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const addTodo = (todo: Todo) => {
    setTodos(prev => [...prev, todo])
    toast('Task has been created')
  }

  return {
    todos,
    setCompleted,
    removeTodo,
    addTodo
  }
}