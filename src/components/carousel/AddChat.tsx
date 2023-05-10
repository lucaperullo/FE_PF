import { Box, Flex, Text } from "@chakra-ui/react"
import { AddIcon } from "lib/icons"

export default function AddChat({
  chatDrawer,
  setChatDrawer,
}: {
  chatDrawer: boolean
  setChatDrawer: (value: boolean) => void
}) {
  return (
    <Flex
      userSelect="none"
      mt="21px"
      mb="38px"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      boxShadow=" 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
      borderRadius="16px"
      w="94px"
      h="100px"
    >
      <Box
        onClick={() => setChatDrawer(true)}
        cursor="pointer"
        border="1px dashed #DEE2E8"
        borderRadius="100px"
        w="40px"
        h="40px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <AddIcon color="#7A8194" m="auto" />
      </Box>
      <Text
        fontSize="14px"
        color="#4A4F5E"
        whiteSpace="nowrap"
        lineHeight="20px"
        fontWeight="500"
        textOverflow="ellipsis"
        overflow="hidden"
        mt="8px"
      >
        New chat
      </Text>
    </Flex>
  )
}
