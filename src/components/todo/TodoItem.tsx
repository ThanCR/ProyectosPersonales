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
import { cn } from "@/lib/utils"
import { CheckLine, Square, X } from "lucide-react"
import { useCountDown } from "./hook/useCountdown"
import { formatMMSS } from "./helpers/formatMMSS"
import { useState } from "react"

interface Props {
  todo: Todo,
  setCompleted: (id: number) => void,
  removeTodo: (id: number) => void
}

export const TodoItem = ({ todo, setCompleted, removeTodo }: Props) => {

  const { title, description, created, deadline, completed } = todo
  
  const remaining = useCountDown(deadline)

  return (
    <Card
      className={cn("w-full max-w-sm relative border-3 ", {
        'border-green-600 text-green-600': completed
      })}

    >
      <CardHeader className="h-full">

        <X className="text-red-500 size-7 cursor-pointer top-4 absolute right-7" onClick={() => {removeTodo(todo.id)}} /> 
        <CardTitle className="pb-2">{title}</CardTitle>
        <CardDescription className={cn({
          'text-green-600': completed
        })}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs sm:text-sm">
        <p>Remaining Time: {!completed ? formatMMSS(remaining) : '00'}</p>
        <p>Created: {formatDateToShow(created)}</p>
        <p>Deadline: {formatDateToShow(deadline)}</p>
      </CardContent>
      <CardFooter className="flex-row justify-center gap-10">
        {completed
          ? <div
            className=" text-green-700 cursor-pointer"
            onClick={() => { setCompleted(todo.id) }}><CheckLine /></div>
          : <div
            className="cursor-pointer"
            onClick={() => { setCompleted(todo.id) }}><Square /></div>}
      </CardFooter>
    </Card>
  )
}
