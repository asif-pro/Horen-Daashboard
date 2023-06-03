// Chakra imports
import { Flex, Box, Button, Icon, useDisclosure, FormControl, FormLabel, Input, Textarea, FormErrorMessage, FormHelperText } from "@chakra-ui/react";
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [allDevices, setAllDevices] = React.useState([]);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [error,setError] = React.useState("");
  const [congratsText,setCongratsText] = React.useState("");

async function handleSave (){
  
  if(initialRef.current.value !== ""){
    
    setIsInvalid(false);
    setError("")
    fetch(
      `${process.env.REACT_APP_DEVICES_URL}device/${initialRef.current.value}`
    ).then((res)=>res.json()).then((res)=>{
      if(res.length===0) {
        setIsInvalid(true);
        setError("No such device");
      }
      else{
        if(res[0].user_id || res[0].company_id){
          setIsInvalid(true);
          setError("Device is already claimed");
        }
        else{
          const userId = localStorage.getItem('userId')
          fetch(`${process.env.REACT_APP_DEVICES_URL}device/${initialRef.current.value}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({...res[0], user_id : userId }),
            credentials: "same-origin",
        
          }).then((response) => {
            return response.json();
          }).then((res)=>{
            
            if(res.user_id===userId){
              setCongratsText(`Congratulations you just claimed device ${res.RU_id}`)
              setTimeout(()=>{ setCongratsText("")},3000)
              setAllDevices(prev=>{
                return [...prev,res]
              })
             
            }
          });
        } 
      }
    }).catch((e)=>{
      console.log(e)
    });
  }
  else{
    setIsInvalid(true);
    setError("Please enter an RU-id")
    
  }
  
  
  
}

  React.useEffect(()=>{
    
    getDevicesByUserId(localStorage.getItem('userId')).then((res)=>{
      return res
    }).then((devices)=>{
      setAllDevices(devices)
    })

  },[])

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Box alignSelf={'flex-end'}>
        <Button colorScheme='teal' variant='outline' onClick={onOpen}>
        <Icon as={FaPlus} color="gray.400" cursor="pointer" fontSize={'18'} /> Claim Device
        </Button>
      </Box>
      <UserDevicesTableData
        title={"All Devices"}
        captions={["Device ID", "QR Code", "Pseudo Name", "Action"]}
        data={allDevices}
        setAllDevices={setAllDevices}
      />


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl width="80%" isInvalid={isInvalid}>
              <FormLabel >Claim device using RU-id</FormLabel>
              <Input ref={initialRef} placeholder='RU ID' />
              <FormErrorMessage>{error}</FormErrorMessage>
              <FormHelperText color="green.500" fontWeight="bold">{congratsText}</FormHelperText>
            </FormControl>

         
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSave} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  
    </Flex>
  );
}

export default UserDevicesTable;
