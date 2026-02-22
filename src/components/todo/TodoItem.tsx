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
import { formatDateToShow } from "./helpers/formatDeadline"

interface Props{
  todo: Todo,
  setCompleted: (id: number) => void,
  removeTodo: (id: number) => void
}

export const TodoItem = ({todo, setCompleted, removeTodo}: Props) => {

  const {title,description, remainingTime, created, deadline, completed } = todo

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="h-full">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs sm:text-sm">
        <p>Remaining Time: {remainingTime}</p>
        <p>Created: {formatDateToShow(created)}</p>
        <p>Deadline: {formatDateToShow(deadline)}</p>
        <p>Completed: {completed ? 'V' : ''}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={() => {setCompleted(todo.id)}}>
          Mask as completed
        </Button>
        <Button variant="outline" className="w-full" onClick={() => {removeTodo(todo.id)}}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  )
}
