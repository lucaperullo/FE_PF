import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  //add the custom scrollbar

  styles: {
    global: {
      html: {
        overflowX: "hidden",
        //add the custom scrollbar
        "::-webkit-scrollbar": {
          width: "0em",

          "&-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",

            "&-thumb": {
              backgroundColor: "rgba(0,0,0,.1)",
              outline: "1px solid slategrey",

              "&:hover": {
                backgroundColor: "rgba(0,0,0,.2)",

                "&:active": {
                  backgroundColor: "rgba(0,0,0,.3)",

                  "&:focus": {
                    backgroundColor: "rgba(0,0,0,.4)",
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  colors: {
    gray: {
      50: "#F9FAFB",
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#13131a",
      900: "#1F1F33",
    },
  },
  config: {
    initialColorMode: "light",
  },
})
