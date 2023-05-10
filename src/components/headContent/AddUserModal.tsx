import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react"
import React from "react"

export default function AddUserModal({
  showAddUser,
  setShowAddUser,
}: {
  showAddUser: boolean
  setShowAddUser: (showAddUser: boolean) => void
}) {
  return (
    <Modal
      isOpen={showAddUser}
      onClose={() => setShowAddUser(false)}
      size={{
        base: "full",
        md: "md",
        lg: "lg",
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new user</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => setShowAddUser(false)}
          >
            Close
          </Button>
          <Button>Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
