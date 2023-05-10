import { Box, Portal } from "@chakra-ui/react"
import React from "react"
import SearchInput from "./searchInput"
import useOnClickOutside from "use-onclickoutside"

export default function SearchModal({
  searchModal,
  setSearchModal,
}: {
  searchModal: boolean
  setSearchModal: (value: boolean) => void
}) {
  const ref = React.useRef(null)
  useOnClickOutside(ref, () => setSearchModal(false))
  return (
    <Portal>
      <Box
        opacity={searchModal ? 1 : 0}
        visibility={searchModal ? "visible" : "hidden"}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        h="100%"
        w="100%"
        overflow="hidden"
        bg="#000000b3"
        transition="0.25s ease-out"
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Box mt="20" ref={ref}>
          <SearchInput inModal setSearchModal={setSearchModal} />
        </Box>
      </Box>
    </Portal>
  )
}
