import { Box, Button, Flex, FormControl, FormLabel, Grid, Icon, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { tablesTableData, dashboardTableData } from "variables/general";
import AllEmployeeTable from 'views/Dashboard/Tables/components/AllEmployeeTable'
import './AllEmployee.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';

const AllEmployee = () => {
    const apiUrl = "https://api.cloudinary.com/v1_1/dftfcxnxd";
    const [image, setImage] = React.useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  function handelImage(e){
    // console.log(e.target.files)
    setImage(e.target.files[0])
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("upload_preset", "petScan");
    // formData.append("cloud_name", "dru7kzv3i");
    //   const res = await axios.post(`${apiUrl}/image/upload`, formData);
    //   setImage(res.data.url);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(image);
  
    try {
      const formData = new FormData();
      // const fileReader = new FileReader();
      // fileReader.readAsDataURL(image);
      // console.log(fileReader.result);
      formData.append("file", image);
      formData.append("upload_preset", "horen123");
      formData.append("cloud_name", "dftfcxnxd");

      // console.log(formData.get("file"))
      const res = await axios.post(`${apiUrl}/image/upload`, formData);
      console.log(res.data.url)
      // setImage(res.data.url);
    }
    catch(err) {
      console.log(err)
    }
  }


  return (
    // <Box maxWidth={'50vw'} background={'rgba(227, 213, 199)'}>
    //     <Stack spacing={6}>
    //         <InputGroup>
    //             <Input marginRight={'20px'} variant='flushed' placeholder='Employee Name' />
    //             <Input marginLeft={'20px'} variant='flushed' placeholder='Department' />
    //             </InputGroup>
    //         <InputGroup>
    //             <Input marginRight={'20px'} placeholder='Car Number' size='md' />
    //             <InputLeftAddon marginLeft={'20px'} children='+8801' />
    //             <Input type='tel' placeholder='phone number' />
    //         </InputGroup>
    //     </Stack>
    // </Box>
    

    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
    <Box alignSelf={'flex-end'}>
      <Button colorScheme='teal' variant='outline' onClick={onOpen}>
      <Icon as={FaPlus} color="gray.400" cursor="pointer" fontSize={'18'} /> Add Employee
      </Button>
    </Box>
    <AllEmployeeTable 
        title={"All Employees"}
        captions={["Name", "Department", "Phone", "Car Number"]}
        data={tablesTableData}
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
        <ModalHeader>Add Employee</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} placeholder='Employee Name' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Department</FormLabel>
            <Input ref={initialRef} placeholder='Department' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input ref={initialRef} placeholder='Phone Number' />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Car Number</FormLabel>
            <Input ref={initialRef} placeholder='Car Number' />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Upload Image</FormLabel>
            <Input ref={initialRef} type='file' name='emp_image' onChange={handelImage} />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  </Flex>
)
}

export default AllEmployee