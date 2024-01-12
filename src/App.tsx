import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Root } from "./ui/view/Root"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  )
}

export default App
