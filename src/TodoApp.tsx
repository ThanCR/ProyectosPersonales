import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { Container } from "./components/layout/Container"
import { Toaster } from "./components/ui/sonner"

export const TodoApp = () => {
  return (
    <>
      <Toaster/>
      <Header />
      <Container />
      <Footer />
    </>
  )
}
