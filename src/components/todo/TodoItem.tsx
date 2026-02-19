import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Todo } from "@/models/Todo"

interface Props{
  todo: Todo,
  completeTodo: (id: number) => void,
  removeTodo: (id: number) => void
}

export const TodoItem = ({todo, completeTodo, removeTodo}: Props) => {

  const {title,description, remainingTime, created, deadline, completed } = todo

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs sm:text-sm">
        <p>Remaining Time: {remainingTime}</p>
        <p>Created: {created.toLocaleTimeString()} - {deadline.toDateString()}</p>
        <p>Deadline: {deadline.toLocaleTimeString()} - {deadline.toDateString()}</p>
        <p>Completed: {completed ? 'V' : ''}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={() => {completeTodo(todo.id)}}>
          Mask as completed
        </Button>
        <Button variant="outline" className="w-full" onClick={() => {removeTodo(todo.id)}}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  )
}
