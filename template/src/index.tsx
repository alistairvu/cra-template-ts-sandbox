import { render } from "react-dom"
import App from "./App"
import "./bootstrap.min.css"
import { ChakraProvider } from "@chakra-ui/react"

const rootElement = document.getElementById("root")
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
)
