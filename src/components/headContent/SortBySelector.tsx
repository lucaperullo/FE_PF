import { Flex, useColorModeValue } from "@chakra-ui/react"
import { useStateValue } from "context/stateProvider"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { User } from "types/User"
import TabItem from "./TabItem"

export default function SortBySelector() {
  const sort = ["All", "Active", "Offline", "Archived"]

  const animationColor = useColorModeValue("#00000026", "#ffffff57")

  const [{ filterableUsers, filteredUsers, filter, query }, dispatch] =
    useStateValue()

  const allUsers = !!query
    ? filterableUsers.filter((user: User) => {
        const fullName = `${user.name} ${user.job} `
        return fullName.toLowerCase().includes(query.toLowerCase())
      })
    : filterableUsers
  const activeUsers = !!query
    ? filterableUsers
        .filter((user: User) => {
          const fullName = `${user.name} ${user.job} `
          return fullName.toLowerCase().includes(query.toLowerCase())
        })
        .filter((user: User) => user.status === "active")
    : filterableUsers.filter((user: User) => user.status === "active")
  const offlineUsers = !!query
    ? filterableUsers
        .filter((user: User) => {
          const fullName = `${user.name} ${user.job} `
          return fullName.toLowerCase().includes(query.toLowerCase())
        })
        .filter((user: User) => user.status === "inactive")
    : filterableUsers.filter((user: User) => user.status === "inactive")
  const archivedUsers = !!query
    ? filterableUsers
        .filter((user: User) => {
          const fullName = `${user.name} ${user.job} `
          return fullName.toLowerCase().includes(query.toLowerCase())
        })
        .filter((user: User) => user.status === "archived")
    : filterableUsers.filter((user: User) => user.status === "archived")
  useEffect(() => {
    if (filter === "Active") {
      dispatch({
        type: "SET_FILTERED_USERS",
        payload: activeUsers,
      })
    } else if (filter === "Offline") {
      dispatch({
        type: "SET_FILTERED_USERS",
        payload: offlineUsers,
      })
    } else if (filter === "Archived") {
      dispatch({
        type: "SET_FILTERED_USERS",
        payload: archivedUsers,
      })
    } else {
      dispatch({
        type: "SET_FILTERED_USERS",
        payload: allUsers,
      })
    }
  }, [filter])

  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      w="302px"
      h="44px"
      bg="#F7F9FC"
      _dark={{ bg: "#0c0d11" }}
      borderRadius="12px"
      padding="6px"
      gap="4px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      mb="32px"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="6px"
        w="302px"
        h="44px"
      >
        {sort.map((item, i) => (
          <TabItem key={i} tabName={item} selected={filter} />
        ))}
      </Flex>
      <motion.div
        style={{
          position: "absolute",
          width: `${
            filter === "All"
              ? 59
              : filter === "Active"
              ? 84
              : filter === "Offline"
              ? 88
              : 99
          }px`,
          height: "100%",
          borderRadius: "12px",
          backgroundColor: animationColor,
          opacity: 0.1,
          zIndex: 0,
        }}
        animate={{
          x:
            filter === "All"
              ? -5
              : filter === "Active"
              ? 45
              : filter === "Offline"
              ? 118
              : 196,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </Flex>
  )
}
