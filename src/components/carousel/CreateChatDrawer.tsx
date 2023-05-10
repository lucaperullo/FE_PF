import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from "@chakra-ui/react"
import { useRef } from "react"

function CreateChatDrawer({
  chatDrawer,
  setChatDrawer,
}: {
  chatDrawer: boolean
  setChatDrawer: () => void
}) {
  return (
    <Drawer isOpen={chatDrawer} placement="right" onClose={setChatDrawer}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create a new chat</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Chat name.." />
          <Input placeholder="About.." />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={setChatDrawer}>
            Cancel
          </Button>
          <Button colorScheme="blue">Create</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
