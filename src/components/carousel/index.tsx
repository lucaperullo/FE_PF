import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import {
  Box,
  Button,
  CloseButton,
  Flex,
  IconButton,
  Portal,
  Text,
} from "@chakra-ui/react"
import useOnClickOutside from "use-onclickoutside"
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { Swiper as SwiperType } from "swiper"
import { ArrowLeftIcon, ArrowRightIcon } from "lib/icons"
import { useStateValue } from "context/stateProvider"
import Card from "./Card"
import { User } from "types/User"
import AddChat from "./AddChat"
import { AnimatePresence, motion } from "framer-motion"

export default function Carousel() {
  //create swiper ref
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [state, dispatch] = useStateValue()
  const [active, setActive] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [chatDrawer, setChatDrawer] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>("")
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const ref = useRef(null)
  useOnClickOutside(ref, () => setSelectedId(null))
  const activeUsers = state.users.filter((user: User) => {
    return user.status === "active"
  })

  // TODO: Implement a swiper carousel of height 180px
  useEffect(() => {
    //based on users.length/4, set the number of slides for each pagination of the carousel
    const numberOfSlidesForCursor = Math.floor(activeUsers.length / 4)

    if (activeSlide <= numberOfSlidesForCursor) {
      setActive(0)
    } else if (
      activeSlide > numberOfSlidesForCursor &&
      activeSlide < numberOfSlidesForCursor * 2
    ) {
      setActive(1)
    } else if (
      activeSlide > numberOfSlidesForCursor * 2 &&
      activeSlide < numberOfSlidesForCursor * 3
    ) {
      setActive(2)
    } else if (
      activeSlide > numberOfSlidesForCursor * 3 &&
      activeSlide < numberOfSlidesForCursor * 4
    ) {
      setActive(3)
    }
  }, [state, activeSlide])

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Text
          pl="32px"
          fontSize="20px"
          mb="16px"
          mt={{
            base: "16px",
          }}
        >
          Online users
        </Text>
        <Flex mr="32px" alignItems="center">
          {/* add custom pagination here */}
          {/* custom pagination should have 4 dots for all the slides, the slides will be divided for each dot, the index of the dot is the last slide of the group */}
          {/* the active dot should be the index of the current slide group*/}
          <Flex>
            <Box
              borderRadius="50%"
              h="8px"
              w="8px"
              bg={active === 0 ? "#5D5FEF" : "#DEE2E8"}
            ></Box>
            <Box
              borderRadius="50%"
              h="8px"
              w="8px"
              mx="12px"
              bg={active === 1 ? "#5D5FEF" : "#DEE2E8"}
            ></Box>
            <Box
              borderRadius="50%"
              h="8px"
              w="8px"
              bg={active === 2 ? "#5D5FEF" : "#DEE2E8"}
            ></Box>
            <Box
              borderRadius="50%"
              h="8px"
              w="8px"
              ml="12px"
              mr="16px"
              bg={active === 3 ? "#5D5FEF" : "#DEE2E8"}
            ></Box>
          </Flex>
          {/* add custom arrows here */}
          <IconButton
            h="24px"
            maxH="24px"
            minH="24px"
            w="24px"
            maxW="24px"
            minW="24px"
            borderRightRadius={0}
            mr="0.5px"
            aria-label={"arrow-left"}
            icon={<ArrowLeftIcon w="6.19px" h="10.02px" />}
            onClick={() => swiper?.slidePrev()}
            disabled={activeSlide === 0}
          />
          <IconButton
            h="24px"
            maxH="24px"
            minH="24px"
            w="24px"
            maxW="24px"
            minW="24px"
            borderLeftRadius={0}
            ml="0.5px"
            aria-label={"arrow-right"}
            icon={<ArrowRightIcon w="6.19px" h="10.02px" />}
            onClick={() => swiper?.slideNext()}
            disabled={active === 3}
          />
        </Flex>
      </Flex>
      <Swiper
        style={{
          marginBottom: "16px",
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        slidesPerView={"auto"}
      >
        <SwiperSlide
          style={{
            maxWidth: "109.5px",
            marginLeft: "32px",
          }}
        >
          <AddChat chatDrawer={chatDrawer} setChatDrawer={setChatDrawer} />
        </SwiperSlide>
        {activeUsers.map((user: User, i: number) => {
          return (
            <SwiperSlide style={{ width: "210px" }} key={i}>
              <motion.div
                layoutId={i.toString()}
                onClick={() => {
                  setSelectedId(i.toString())
                  setSelectedUser(user)
                }}
              >
                <Card user={user} size="sm" />
              </motion.div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <Flex
              bg="#00000047"
              h="100%"
              w="100%"
              zIndex={20}
              justifyContent="center"
              alignItems="center"
            >
              <Box
                w="100%"
                bg="white"
                px="32px"
                _dark={{
                  bg: "gray.800",
                }}
                ref={ref}
              >
                <Box position="relative" zIndex={30}>
                  <Card user={selectedUser as User} size="sm" />
                </Box>
              </Box>
            </Flex>
            <CloseButton
              borderRadius="13px"
              bg="#fff"
              color="#000"
              position="relative"
              top={{
                base: "-130px",
                md: "-128px",
              }}
              left={{
                base: "77.8%",
                md: "93.8%",
                lg: "95.3%",
              }}
              zIndex={30}
              onClick={() => setSelectedId(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <Box
        h="100%"
        w="100%"
        bg="#8080805e"
        position="fixed"
        top="0"
        left="0"
        visibility={!!selectedId ? "visible" : "hidden"}
        opacity={!!selectedId ? 1 : 0}
        transition="0.25s ease"
        zIndex={15}
      ></Box>
    </Box>
  )
}
