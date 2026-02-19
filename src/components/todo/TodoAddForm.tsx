import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

export const TodoAddForm = () => {
  return (
    <form className="flex flex-col gap-5 h-full border border-border self-baseline p-5 rounded-2xl w-96">
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
        <Button type="submit" className="w-full">
          Mask as completed
        </Button>
        <Button variant="outline" className="w-full">
          Remove
        </Button>
      </div>
    </form>
  )
}
