// Chakra imports
import { Flex, Box, Button, Icon, useDisclosure, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import UserDevicesTableData from "./components/UserDevicesTableData";
import { tablesTableData, dashboardTableData } from "variables/general";
import { FaPlus } from "react-icons/fa";
import { getDevicesByUserId } from "Services/deviceServices";


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function UserDevicesTable() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [allDevices, setAllDevices] = React.useState([])


  React.useEffect(()=>{
    
    getDevicesByUserId(localStorage.getItem('userId')).then((res)=>{
      return res
    }).then((devices)=>{
      setAllDevices(devices)
    })

  },[])

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      {/* <Box alignSelf={'flex-end'}>
        <Button colorScheme='teal' variant='outline' onClick={onOpen}>
        <Icon as={FaPlus} color="gray.400" cursor="pointer" fontSize={'18'} /> Add Device
        </Button>
      </Box> */}
      <UserDevicesTableData
        title={"All Devices"}
        captions={["Device ID", "QR Code", "Pseudo Name", "Action"]}
        data={allDevices}
      />


      {/* <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Device</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>RU ID</FormLabel>
              <Input ref={initialRef} placeholder='RU ID' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Device Configuration</FormLabel>
              <Textarea placeholder='Configuration' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
  
    </Flex>
  );
}

export default UserDevicesTable;
