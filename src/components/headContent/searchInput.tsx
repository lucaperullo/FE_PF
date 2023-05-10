import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Flex,
  Text,
} from "@chakra-ui/react"
import { useStateValue } from "context/stateProvider"
import { SearchIcon, CommandIcon } from "lib/icons"
import { User } from "types/User"

export default function SearchInput({
  inModal,
  setSearchModal,
  w,
}: {
  inModal?: boolean
  setSearchModal: (action: boolean) => void
  w?: string
}) {
  const [{ filteredUsers, query, filterableUsers, filter }, dispatch] =
    useStateValue()
  const allUsers = filterableUsers
  const determineActiveFilter = () => {
    if (filter === "Active") {
      return "active"
    } else if (filter === "Offline") {
      return "inactive"
    } else if (filter === "Archived") {
      return "archived"
    } else {
      return "all"
    }
  }
  const filterUsersByQuery = (q: string | undefined) => {
    console.log(query)
    if (q) {
      const filteredUsers =
        determineActiveFilter() !== "all"
          ? filterableUsers
              .filter((user: User) => user.status === determineActiveFilter())
              .filter((user: User) => {
                const fullName = `${user.name} ${user.job} `
                return fullName.toLowerCase().includes(q.toLowerCase())
              })
          : filterableUsers.filter((user: User) => {
              const fullName = `${user.name} ${user.job} `
              return fullName.toLowerCase().includes(q.toLowerCase())
            })
      dispatch({
        type: "SET_FILTERED_USERS",
        payload: filteredUsers,
      })
    } else {
      dispatch({
        type: "SET_FILTERED_USERS",
        payload: allUsers,
      })
    }
  }

  return (
    <InputGroup
      position="relative"
      minW={{
        base: w ? w : "100%",

        lg: "599px",
      }}
      maxW="40%"
      p="0"
      mr="20px"
    >
      <InputLeftElement
        pointerEvents="none"
        children={
          <SearchIcon mt="1.5" color="#7A8194" h="16.61px" w="16.61px" />
        }
      />
      <Input
        position="relative"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({
              type: "SET_QUERY",
              payload:
                e.currentTarget.value !== "" ? e.currentTarget.value : null,
            })
            filterUsersByQuery(e.currentTarget.value)
            setSearchModal(false)
          }
        }}
        onChange={(e) => {
          if (e.currentTarget.value.length === 0) {
            dispatch({
              type: "SET_QUERY",
              payload: null,
            })
            filterUsersByQuery(e.currentTarget.value)
          }
        }}
        bg="white"
        variant="unstyled"
        minH={inModal ? "50px" : "44px"}
        _hover={{
          border: "none",
          boxShadow:
            "0 0 10px 1px rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 5%)",
        }}
        _focus={{
          border: "none",
          boxShadow:
            "0 0 10px 1px rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 5%)",
        }}
        borderRadius="12px"
        borderColor="gray.50"
        boxShadow="0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
        placeholder="Search.."
        _dark={{
          color: "#fff",
          bg: "gray.700",
        }}
      />
      <InputRightElement maxW="100px" minW="65px" minH="100%">
        <Flex
          display={inModal ? "none" : "flex"}
          visibility={{
            base: "hidden",
            lg: "visible",
          }}
          alignItems="center"
          justifyContent="space-evenly"
          borderRadius="8px"
          mr="0.5"
          bg="#F3F4F8"
          w="57px"
          h="32px"
          mb="2px"
          boxShadow={"0px 1px 0px 0px rgb(196 196 196 / 73%)"}
        >
          {" "}
          <CommandIcon color="#7A8194" h="13.33px" w="13.33px" />
          <Text fontWeight={500} color="#7A8194">
            F
          </Text>
        </Flex>
      </InputRightElement>
    </InputGroup>
  )
}
