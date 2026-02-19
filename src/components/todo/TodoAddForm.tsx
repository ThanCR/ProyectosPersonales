import type { Todo } from "@/models/Todo"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { DatePicker } from "./DatePicker"

interface Props{
  addTodo: (todo: Todo) => void
}

export const TodoAddForm = ({addTodo}: Props) => {



  return (
    <form className="flex flex-col gap-5 h-full border border-border self-center sm:self-baseline p-5 rounded-2xl w-full max-w-96">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          placeholder="Enter item title"
          className="bg-secondary border-border"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Write a brief description..."
          className="bg-secondary border-border min-h-28 resize-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <DatePicker />
      </div>
      <div className="flex flex-col gap-2">
        <Button type="submit" className="w-full">
          Create task
        </Button>
        <Button variant="outline" className="w-full" onClick={() => {}}>
          Reset fields
        </Button>
      </div>
    </form>
  )
}
