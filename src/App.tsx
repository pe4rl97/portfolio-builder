import { SectionsProvider } from "./context/SectionsProvider"
import Builder from "./page/Builder"

const App = () => {
  return (
    <>
      <SectionsProvider>
        <Builder/>
      </SectionsProvider>
    </>
  )
}

export default App