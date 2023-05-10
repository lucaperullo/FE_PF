import { Box, Flex } from "@chakra-ui/react"
import type { ReactNode } from "react"
import Meta from "components/Meta"

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box overflowX="hidden">
      <Meta />
      <Box>{children}</Box>
    </Box>
  )
}

export default Layout
