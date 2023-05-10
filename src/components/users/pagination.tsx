import {
  Box,
  Button,
  Flex,
  Hide,
  IconButton,
  Select,
  Text,
} from "@chakra-ui/react"
import { useStateValue } from "context/stateProvider"
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from "lib/icons"
import { useEffect, useState } from "react"
import { User } from "types/User"
import { loadOnlyUsers } from "utility"

export default function Pagination() {
  const path = window.location.pathname

  const page = Number(path.match(/page=(\d+)/)?.[1])

  const pp = Number(path.match(/perPage=(\d+)/)?.[1])

  const p = isNaN(page) || page > 10 ? 1 : page

  const [{ filter }, dispatch] = useStateValue()
  // initial page limit is 10
  const [pageLimit, setPageLimit] = useState(10)
  // initial page number is 1
  const [pageNumber, setPageNumber] = useState(p || 1)
  //items per page is 19
  const [itemsPerPage, setItemsPerPage] = useState(pp || 19)
  const getUsers = async () => {
    let info = { page: pageNumber, perPage: itemsPerPage }
    const users = await loadOnlyUsers(info)
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
    dispatch({
      type: "SET_FILTERED_USERS",
      payload:
        determineActiveFilter() !== "all"
          ? users.filter(
              (user: User) => user.status === determineActiveFilter()
            )
          : users,
    })
  }
  useEffect(() => {
    window.history.pushState(
      {},
      "",
      `/page=${pageNumber}/perPage=${itemsPerPage}`
    )
  }, [pageNumber, itemsPerPage])
  useEffect(() => {
    getUsers()
  }, [pageNumber, pageLimit, itemsPerPage])
  //we show the first 3 button numbers and the last 3 button numbers, in the middle we show a button with 3 dots
  return (
    <Flex mt="22px" justifyContent="space-between">
      <Hide below="md">
        <Flex alignItems="center">
          <IconButton
            onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}
            disabled={pageNumber === 1}
            bg="#FFFFFF"
            _dark={{
              bg: "#1A202C",
            }}
            aria-label="previous-page"
            icon={<ArrowLeftIcon color="#7A8194" />}
            mr="25px"
            boxShadow="0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
            borderRadius="12px"
          />
          {Array.from({ length: pageLimit }, (_, i) => i + 1)
            .slice(0, 3)
            .map((number) => {
              return (
                <Button
                  key={number}
                  onClick={() => setPageNumber(number)}
                  bg={number === pageNumber ? "#F5F5FF" : "#FFFFFF"}
                  _dark={{
                    bg: number === pageNumber ? "#30305F" : "#2B2B40",
                    color: number === pageNumber ? "#fff" : "#7A8194",
                  }}
                  color={number === pageNumber ? "#5D5FEF" : "#7A8194"}
                  boxShadow=" 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
                  size="sm"
                  borderRadius="0"
                  borderLeftRadius={number === 1 ? "12px 0px 0px 12px" : "0px"}
                  borderTopLeftRadius={number === 1 ? "12px" : "0px"}
                  borderBottomLeftRadius={number === 1 ? "12px" : "0px"}
                  w="40px"
                  h="40px"
                >
                  {number}
                </Button>
              )
            })}
          <Button
            cursor="not-allowed"
            userSelect="none"
            _hover={{ bg: "#F5F5FF" }}
            bg={pageNumber > 3 && pageNumber < 8 ? "#F5F5FF" : "#FFFFFF"}
            color={pageNumber > 3 && pageNumber < 8 ? "#5D5FEF" : "#7A8194"}
            _dark={{
              bg: pageNumber > 3 && pageNumber < 8 ? "#30305F" : "#2B2B40",
              color: pageNumber > 3 && pageNumber < 8 ? "#fff" : "#7A8194",
            }}
            borderRadius="0"
            boxShadow=" 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
            size="sm"
            w="40px"
            h="40px"
          >
            {pageNumber > 3 && pageNumber < 8 ? pageNumber : "..."}
          </Button>
          {Array.from({ length: pageLimit }, (_, i) => i + 1)
            .slice(7, 10)
            .map((number) => {
              return (
                <Button
                  key={number}
                  onClick={() => setPageNumber(number)}
                  bg={number === pageNumber ? "#F5F5FF" : "#FFFFFF"}
                  color={number === pageNumber ? "#5D5FEF" : "#7A8194"}
                  _dark={{
                    bg: number === pageNumber ? "#30305F" : "#2B2B40",
                    color: number === pageNumber ? "#fff" : "#7A8194",
                  }}
                  boxShadow=" 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
                  size="sm"
                  borderRadius="0"
                  borderRightRadius={
                    number === 10 ? "0px 12px 12px 0px" : "0px"
                  }
                  borderTopRightRadius={number === 10 ? "12px" : "0px"}
                  borderBottomRightRadius={number === 10 ? "12px" : "0px"}
                  w="40px"
                  h="40px"
                >
                  {number}
                </Button>
              )
            })}
          <IconButton
            onClick={() => pageNumber < 10 && setPageNumber(pageNumber + 1)}
            disabled={pageNumber === 10}
            bg="#FFFFFF"
            _dark={{
              bg: "#1A202C",
            }}
            aria-label="next-page"
            icon={<ArrowRightIcon color="#7A8194" />}
            ml="25px"
            boxShadow="0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
            borderRadius="12px"
          />
        </Flex>
      </Hide>
      <Hide above="md">
        <Box
          w="100%"
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          mt="20px"
        >
          <IconButton
            borderRadius="100px"
            onClick={() => setItemsPerPage(itemsPerPage + 19)}
            aria-label={"load-more-content"}
            icon={<ArrowDownIcon color="#7A8194" />}
          />
          <Text color="#4A4F5E" fontSize="13px">
            Load more
          </Text>
        </Box>
      </Hide>
      <Hide below="md">
        <Select
          placeholder={itemsPerPage.toString()}
          onChange={(e) => {
            setItemsPerPage(parseInt(e.target.value))
          }}
          minW="66px"
          w="auto"
          maxW="80px"
          h="40px"
          borderRadius="12px"
          boxShadow="0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
        >
          {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => {
            return (
              <option
                key={number}
                onClick={() => setItemsPerPage(number)}
                value={number}
              >
                {number}
              </option>
            )
          })}
        </Select>
      </Hide>
    </Flex>
  )
}
