import React, { useEffect } from "react";
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
  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [newPseudoname,setNewPseudoname] = React.useState("")
  const [deviceIDtoChange, setDeviceIDtoChange] = React.useState("")

  const { RU_id, qr_code, pseudo_name, device_id} = props;

React.useEffect(()=>{
  setNewPseudoname(pseudo_name);
},[pseudo_name]);

function handlePseudonameChange(e){
  setNewPseudoname(e.target.value);
  setDeviceIDtoChange(e.target.name);
}

const changePseudoName = () => {
  console.log(deviceIDtoChange)
  console.log(newPseudoname);
}


  return (
   <>
     <Tr>
      <Td minWidth={{ sm: "100px" }} pl="0px">
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {RU_id}
          </Text>
        </Flex>
      </Td>
      <Td>
      <QRCode
        id="123456"
        value={qr_code}
        size={75}
        level={"H"}
        includeMargin={true}
      />
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {pseudo_name}
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
              <Input name={device_id} value={newPseudoname} onChange={handlePseudonameChange} placeholder='Enter a Pseudo Name for the Device' />
            </FormControl>

    {/* <FormControl mt={4}>
      <FormLabel>Device Configuration</FormLabel>
      <Textarea placeholder='Configuration' />
    </FormControl> */}
  </ModalBody>

  <ModalFooter>
    <Button colorScheme='blue' mr={3} onClick={changePseudoName}>
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
