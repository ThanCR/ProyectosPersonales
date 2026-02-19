import { Search } from "lucide-react"
import { InputGroup, InputGroupInput, InputGroupAddon } from "../ui/input-group"

export const FilterBar = () => {
  return (
    <InputGroup className="">
      <InputGroupInput placeholder="Search for a task" />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
  )
}
