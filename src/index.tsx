import { ColorModeScript } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"

// fonts
import "@fontsource/plus-jakarta-sans/latin.css"

import App from "./App"
import { StateProvider } from "./context/stateProvider"
import { resolveUsersAndReturnInitialState, reducer } from "./context/reducers"
import { theme } from "styles/customTheme"

//create root asynchonously and then render
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
resolveUsersAndReturnInitialState().then((initialState) => {
  root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </StateProvider>
  )
})
