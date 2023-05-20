import React from "react";
import { Box, useDisclosure, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import QRCode from "qrcode.react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
// import Employee from "views/Company/Employee/Employee";

function UserDevicesTableRow(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  const { logo, name, status, budget, progression } = props;
  const textColor = useColorModeValue("gray.700", "white");

  return (
   <>
     <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            RU-04HK82
          </Text>
        </Flex>
      </Td>
      <Td>
      <QRCode
        id="123456"
        value={439573}
        size={55}
        level={"H"}
        includeMargin={true}
      />
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          Pesudo Name
        </Text>
      </Td>
      
      <Td>
        <Button p="0px" bg="transparent" onClick={onOpen}>
          <Icon as={FaPencilAlt} color="gray.400" cursor="pointer" />
        </Button>
      
        <Button p="0px" bg="transparent">
          <Icon as={FaTrash} color="gray.400" cursor="pointer" />
        </Button>
      </Td>
    </Tr>

<Modal
initialFocusRef={initialRef}
finalFocusRef={finalRef}
isOpen={isOpen}
onClose={onClose}
size="xl"
>
<ModalOverlay />
<ModalContent>
  <ModalHeader>Add Pseudo Name</ModalHeader>
  <ModalCloseButton />
  <ModalBody pb={6}>
  <FormControl>
              <FormLabel>Pseudo Name</FormLabel>
              <Input ref={initialRef} placeholder='Enter a Pseudo Name for the Device' />
            </FormControl>

    {/* <FormControl mt={4}>
      <FormLabel>Device Configuration</FormLabel>
      <Textarea placeholder='Configuration' />
    </FormControl> */}
  </ModalBody>

  <ModalFooter>
    <Button colorScheme='blue' mr={3}>
      Save
    </Button>
    <Button onClick={onClose}>Cancel</Button>
  </ModalFooter>
</ModalContent>
</Modal>
   </>
  );
}

export default UserDevicesTableRow;
