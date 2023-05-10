import { Flex, Text } from "@chakra-ui/react"
import { useStateValue } from "context/stateProvider"
import { useEffect } from "react"

export default function TabItem({
  tabName,
  selected,
}: {
  tabName: string
  selected: string
}) {
  const [state, dispatch] = useStateValue()

  return (
    <Flex
      zIndex={1}
      justifyContent="center"
      alignItems="center"
      onClick={() => dispatch({ type: "SET_FILTER", payload: tabName })}
      borderRadius="8px"
      padding="4px 12px"
      bg={selected === tabName ? "#ffff" : "transparent"}
      userSelect="none"
      boxShadow={
        selected === tabName
          ? "0px 1px 4px rgba(0, 0, 0, 0.05), 0px 6px 24px rgba(0, 0, 0, 0.04), inset 0px 1px 1px rgba(0, 0, 0, 0.04)"
          : "none"
      }
      //   set the width of the selected tab to setWidth
    >
      <Text
        color={selected === tabName ? "#2B2B40" : "#7A8194"}
        fontWeight={selected === tabName ? 500 : 400}
        fontSize="13px"
        cursor="pointer"
      >
        {tabName}
      </Text>
    </Flex>
  )
}
