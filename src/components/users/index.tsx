import { Box, Flex, Show, SimpleGrid, Text } from "@chakra-ui/react"
import Card from "components/carousel/Card"
import { useStateValue } from "context/stateProvider"
import { motion } from "framer-motion"

import { lazy } from "react"
import { User } from "types/User"
import Pagination from "./pagination"

const AnimationPlayer = lazy(() => import("lib/AnimationPlayer"))

export default function UsersSection() {
  const [{ filteredUsers, filterableUsers, filter, query }] = useStateValue()
  return (
    <Box mx="32px" pb="20px">
      {/* add header */}
      <Flex alignItems="center" mb="10px">
        <Text
          fontWeight={400}
          fontSize="20px"
          lineHeight="20px"
          color="#4A4F5E"
        >
          Users
        </Text>
        <Box
          ml="16px"
          borderRadius="100px"
          h="20px"
          w="23px"
          bg="#E6E9F0"
          padding="2px 8px"
        >
          <Text
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="11px"
            color="#7A8194"
          >
            {filteredUsers !== null
              ? filteredUsers.length
              : filterableUsers.length}
          </Text>
        </Box>
      </Flex>
      {filteredUsers?.length === 0 && (
        <Box
          display="flex"
          justifyContent="center"
          flexDir="column"
          alignItems="center"
        >
          <Text fontWeight={500}>0 users found</Text>
          <Text fontWeight={500} mt="8px">
            for the selected filters :
          </Text>
          <Text fontWeight={500} mt="8px" color="blue.400">
            {!!filter && filter} | {!!query && query}
          </Text>
          <AnimationPlayer animation="/empty.json" />
        </Box>
      )}
      {/* add users */}

      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing="24px"
      >
        {filteredUsers !== null &&
          //get only the first 3 users
          filteredUsers.slice(0, 3).map((user: User, i: number) => (
            <Box key={i}>
              <Show above="md">
                <Box mb="24px">
                  <Card size="lg" user={user} actions />
                </Box>
              </Show>
              <Show below="md">
                <Box>
                  <Card size="auto" user={user} actions />
                </Box>
              </Show>
            </Box>
          ))}
      </SimpleGrid>

      <SimpleGrid
        columns={{
          base: 1,
          md: 3,
          lg: 4,
        }}
        spacing="24px"
        mt={{
          base: "24px",
          md: "0px",
        }}
      >
        {filteredUsers !== null &&
          //get all the users after the first 3
          filteredUsers.slice(3).map((user: User, i: number) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.001 }}
              whileInView={{
                //repeat the animation every time the user scrolls to the element
                opacity: 1,
                y: 0,
              }}
              key={i}
            >
              <Card size="auto" key={i} user={user} actions />
            </motion.div>
          ))}
      </SimpleGrid>

      {filteredUsers?.length === 0 ? null : <Pagination />}
    </Box>
  )
}
