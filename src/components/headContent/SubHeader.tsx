import {
  Box,
  Button,
  chakra,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from "@chakra-ui/react"
import { AddIcon, DotsIcon } from "lib/icons"
import ThemeToggle from "lib/ThemeToggle"
import { useState } from "react"
import AddUserModal from "./AddUserModal"

export default function SubHeader() {
  const [showAddUser, setShowAddUser] = useState(false)
  return (
    <Flex
      h="44px"
      w="100%"
      justifyContent="space-between"
      mb={{
        base: "28",
        lg: "24px",
      }}
      flexDir={{
        base: "column",
        lg: "row",
      }}
      mx={{
        base: "12px",
        md: "0",
      }}
    >
      <chakra.h1 fontSize="32px" fontWeight={700}>
        Users
      </chakra.h1>
      <Flex alignItems="center" zIndex="3">
        <Button
          onClick={() => setShowAddUser(true)}
          w="134px"
          h="44px"
          borderRadius="13px"
          padding="0px 20px 0px 20px"
          gap="8px"
          color="#fff"
          bg="#5D5FEF"
          _hover={{
            //   bg: "#5D5FEF", we need a darker color instead of #5D5FEF for hover so we will use #4B4BD9
            bg: "#4B4BD9",
          }}
          _active={{
            bg: "#4B4BD9",
            transform: "scale(0.98)",
          }}
          leftIcon={<AddIcon color="#fff" h="11.67px" w="11.67px" />}
        >
          <Text fontSize="16px" lineHeight="20px">
            Add new
          </Text>
        </Button>
        <Menu>
          <MenuButton
            as={IconButton}
            boxShadow="inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
            filter="drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.05)) drop-shadow(0px 6px 24px rgba(0, 0, 0, 0.04))"
            bg="#fff"
            _dark={{
              bg: "gray.900",
            }}
            borderRadius="13px"
            ml="12px"
            aria-label="more-settings"
            icon={<DotsIcon color="#4A4F5E" h="3.33px" w="13.33px" />}
          />
          <MenuList>
            <Flex
              w="100%"
              px="2"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text mr="2">Color mode</Text>
              <ThemeToggle />
            </Flex>
          </MenuList>
        </Menu>
      </Flex>
      <Select
        mt="20px"
        mb="24px"
        placeholder="My details"
        borderRadius="12px"
        boxShadow="0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
        h="44px"
        w="calc(100%  - 12px  - 12px)"
        display={{
          base: "block",
          lg: "none",
        }}
        _focusVisible={{
          boxShadow: "none",
        }}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
      <AddUserModal showAddUser={showAddUser} setShowAddUser={setShowAddUser} />
    </Flex>
  )
}
