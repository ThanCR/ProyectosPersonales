export const getTodosData = () => {
    const storedTodos = localStorage.getItem('todos')
    const todosArray = storedTodos ? JSON.parse(storedTodos) : []
    return todosArray
}