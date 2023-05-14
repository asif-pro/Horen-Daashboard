// Chakra imports
import { Flex, Box, Button, Icon, useDisclosure, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import AdminDevicesTable from "./components/AdminDevices";
import { tablesTableData, dashboardTableData } from "variables/general";
import { FaPlus } from "react-icons/fa";
import QRCode from "qrcode.react"
import { postDevice, getAllDevices } from "Services/deviceServices";


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function AdminDevices() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [allDevices, setAllDevices] = React.useState([]);

  //Info's to add/create a device
  const [rU_id, setRU_id] = React.useState('');
  const [deviceConfig, setDeviceConfig] = React.useState('');
  // const [qRCode, setqRCode] = React.useState('');


  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleRUIDChange = (e) => {
    const { value } = e.target;
    setRU_id(value)
  }
  const handleConfigChange = (e) => {
    console.log(e.target.name.value)
    const { value } = e.target;
    setDeviceConfig(value)
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    const qRCodeURL = 'horen.com/'+rU_id;
    let device = {}
    device.RU_id = rU_id;
    device.device_configure = deviceConfig;
    device.qr_code = qRCodeURL;
    postDevice(device);
    initialRef.current.value=""
    finalRef.current.value=""
  }

  React.useEffect(()=>{
    getAllDevices().then((res) => {
      setAllDevices(res);
    })
    
  },[])



  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Box alignSelf={'flex-end'}>
        <Button colorScheme='teal' variant='outline' onClick={onOpen}>
        <Icon as={FaPlus} color="gray.400" cursor="pointer" fontSize={'18'} /> Add Device
        </Button>
      </Box>
      {allDevices && <AdminDevicesTable
        title={"All Devices"}
        captions={["Device ID", "QR Code", "User ID", "RU ID", "Device Config.", "Block Device"]}
        data={allDevices}
      />}


      <Modal
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
              <Input ref={initialRef} placeholder='RU ID' onChange={handleRUIDChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Device Configuration</FormLabel>
              <Textarea ref={finalRef} placeholder='Configuration' name="dconfig" onChange={handleConfigChange}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handelSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  
    </Flex>
  );
}

export default AdminDevices;
