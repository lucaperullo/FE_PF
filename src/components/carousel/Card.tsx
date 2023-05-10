import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import { DotsIcon, MessageIcon } from "lib/icons"
import { User } from "types/User"

export default function Card({
  size,
  actions,
  user,
}: {
  size?: "sm" | "md" | "lg" | "auto"
  actions?: boolean
  user: User
}) {
  const determineSize = () => {
    switch (size) {
      case "sm":
        return { width: "auto", height: "136px", marginRight: "16px" }

      case "md":
        return { width: "286.5px", height: "164px" }

      case "lg":
        return { width: "100%", minwidth: "390px", height: "164px" }

      case "auto":
        return { width: "auto", height: "164px" }

      default:
        return { width: "auto", height: "auto" }
    }
  }

  //we will have to generate a random image for each user with https://picsum.photos/44/44
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="flex-start"
      style={determineSize()}
      boxShadow="0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
      borderRadius="12px"
      padding="16px"
      bg="#fff"
      _dark={{
        bg: "#0c0d11",
      }}
    >
      {!user?.type ? (
        <>
          <Flex>
            <Box position="relative">
              <Image
                src={user?.userImage}
                border="1.5px solid #fff"
                borderRadius="100px"
                h="44px"
                w="44px"
              />
              {/* add green dot for the online presence */}
              {user?.status === "active" ? (
                <Box
                  position="absolute"
                  bottom="0"
                  right="0"
                  borderRadius="100px"
                  h="14px"
                  w="14px"
                  bg="#4AC1A2"
                  border="2px solid #fff"
                />
              ) : (
                <Box
                  position="absolute"
                  bottom="0"
                  right="0"
                  borderRadius="100px"
                  h="14px"
                  w="14px"
                  bg="#929292"
                  border="2px solid #fff"
                />
              )}
            </Box>
            {actions && (
              <>
                <IconButton
                  borderRadius="13px"
                  aria-label={"message"}
                  icon={<MessageIcon />}
                  ml="16px"
                />

                <IconButton
                  borderRadius="13px"
                  aria-label={"options"}
                  icon={<DotsIcon />}
                  ml="8px"
                />
              </>
            )}
          </Flex>
          <Text
            mb="4px"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {user?.name.length > 15
              ? user?.name.substring(0, user?.name?.lastIndexOf(" "))
              : user?.name}
          </Text>
          <Text color="#7A8194" fontWeight="400">
            {user?.job}
          </Text>
        </>
      ) : (
        <>
          <Flex position="relative">
            {/* add an image behind to the side left  */}
            <Image
              position="relative"
              top="50%"
              transform={"translateY(-50%)"}
              right="-10px"
              borderRadius="100px"
              h="24px"
              w="24px"
              border="1.5px solid #fff"
              src={user?.userImage0}
            />
            <Image
              src={user?.userImage1}
              borderRadius="100px"
              h="44px"
              w="44px"
              zIndex={1}
              border="1.5px solid #fff"
              filter="drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.08));
                border-radius: 100px"
            />
            <Image
              position="relative"
              top="50%"
              transform={"translateY(-50%)"}
              left="-10px"
              borderRadius="100px"
              h="24px"
              w="24px"
              src={user?.userImage2}
              border="1.5px solid #fff"
            />
            {/* add an image behind to the side right  */}
          </Flex>
          <Text
            mb="4px"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {user?.name.length > 15
              ? user?.name.substring(0, user?.name.lastIndexOf(" "))
              : user?.name}{" "}
            Chat
          </Text>
          <Text color="#7A8194" fontWeight="400">
            {user?.topic}
          </Text>
        </>
      )}
    </Box>
  )
}
