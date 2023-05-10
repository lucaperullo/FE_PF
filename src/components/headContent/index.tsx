import { Box } from "@chakra-ui/react"
import React from "react"
import Header from "./Header"
import SortBySelector from "./SortBySelector"
import SubHeader from "./SubHeader"

export default function UpperSection() {
  return (
    <Box
      px={{
        base: "0",
        md: "24px",
        lg: "32px",
      }}
    >
      <Header />
      <SubHeader />
      <SortBySelector />
    </Box>
  )
}
