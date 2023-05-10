import { Box, Flex } from "@chakra-ui/react"
import Carousel from "components/carousel"

import UpperSection from "components/headContent"
import UsersSection from "components/users"

export default function Home() {
  return (
    <Box>
      <UpperSection />
      <Carousel />
      <UsersSection />
    </Box>
  )
}
