import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const TodoItem = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Gather wood</CardTitle>
        <CardDescription>
          Need to collect with to start crafting first tools and manage to get better ones
        </CardDescription>
      </CardHeader>
      <CardContent className="text-xs sm:text-sm">
        <p>Remaining Time: </p>
        <p>Created: </p>
        <p>Deadline: </p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Mask as completed
        </Button>
        <Button variant="outline" className="w-full">
          Remove
        </Button>
      </CardFooter>
    </Card>
  )
}
