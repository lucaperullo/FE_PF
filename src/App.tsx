import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom"
import { theme } from "styles/customTheme"

import Layout from "lib/Layout"
import Routings from "./router/Routings"

const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Layout>
        <Routings />
      </Layout>
    </Router>
  </ChakraProvider>
)

export default App
