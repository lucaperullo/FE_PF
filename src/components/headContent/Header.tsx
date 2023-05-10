import {
  Box,
  Button,
  Flex,
  Hide,
  Icon,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react"

import {
  CalendarIcon,
  CommandIcon,
  FilterIcon,
  MobileMenuIcon,
  SearchIcon,
} from "lib/icons"
import { useCallback, useEffect, useState } from "react"
import SearchInput from "./searchInput"
import SearchModal from "./searchModal"

export default function Header() {
  const [searchModal, setSearchModal] = useState(false)
  const [scroll, setScroll] = useState(0)

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset
    setScroll(position)
  }, [setScroll])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
      e.preventDefault()
    }
  })
  const handleKeyPress = useCallback((e: any) => {
    if (e.key === "Escape") {
      setSearchModal(false)
    }
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
      setSearchModal(!searchModal)
    }
  }, [])
  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress)

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <Flex
      w="100%"
      mt={{
        base: "0",
        md: "18px",
      }}
      justifyContent="space-between"
      mb={{
        base: "132px",
        md: "50px",
      }}
    >
      <Hide above="md">
        <Flex
          py={scroll > 30 ? "8px" : "8px"}
          pb={scroll > 30 ? "8px" : "16px"}
          alignItems="flex-end"
          h={scroll > 30 ? "87px" : "120px"}
          boxShadow={scroll > 30 ? "none" : "0px 2px 8px rgba(0, 0, 0, 0.06)"}
          w="auto"
          position={"fixed"}
          top="0"
          left="0"
          bg="#fff"
          _dark={{
            bg: "gray.800",
          }}
          zIndex="5"
          transition="all .7s ease-in-out"
        >
          <Flex alignItems="center" w="100vw" position="relative">
            <Image
              src="/favicon.svg"
              h="40px"
              w="40px"
              alt="logo"
              mr="12px"
              ml="16px"
            />
            <SearchInput
              setSearchModal={setSearchModal}
              w="calc( 100% - 150px )"
            />
            <IconButton
              mr="16px"
              bg="#fff"
              aria-label="menu"
              icon={<MobileMenuIcon color="#4A4F5E" w="19.25px" h="12.83px" />}
            />
          </Flex>
        </Flex>
      </Hide>
      <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
      <Hide below="md">
        <SearchInput setSearchModal={setSearchModal} />
      </Hide>

      {/* create a filter box and a calendar iconbutton */}
      <Flex
        display={{
          base: "none",

          lg: "flex",
        }}
        alignItems="center"
        justifyContent="flex-end"
        minW="200px"
        maxW="300px"
      >
        <Button
          bg="#ffff"
          maxH="40px"
          maxW="107px"
          minW="107px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mr="2"
          padding="0 16px"
          border="1px solid #DEE2E8"
          borderRadius="13px"
          leftIcon={<FilterIcon color="#7A8194" h="15.83px" w="15px" />}
        >
          <Text fontWeight={500} color="#4A4F5E">
            Filters
          </Text>
        </Button>
        <IconButton
          bg="#ffff"
          border="1px solid #DEE2E8"
          borderRadius="13px"
          aria-label="calendar"
          icon={<CalendarIcon color="#7A8194" w="15px" h="16.67px" />}
        />
      </Flex>
    </Flex>
  )
}
