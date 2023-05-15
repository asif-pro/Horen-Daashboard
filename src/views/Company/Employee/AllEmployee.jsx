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
import axios, { all } from 'axios';
import { addEmployee, allEmployees } from 'Services/employeeServices';
import { getAllEmployees } from 'Services/employeeServices';

const AllEmployee = () => {
    const apiUrl = "https://api.cloudinary.com/v1_1/dftfcxnxd";
    const [allEmployees, setAllEmployees] = React.useState('');
    const [image, setImage] = React.useState('');
    const [name, setName] = React.useState('');
    const [department, setDepartment] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [vehicle, setVehicle] = React.useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

  function handelImage(e){
    setImage(e.target.files[0])
  }
  function handleName(e) {
    setName(e.target.value)
  }
  function handleDepartment(e){
    setDepartment(e.target.value)
  }
  function handlePhone(e) {
    setPhone(e.target.value)
  }
  function handleVehicle(e){
    setVehicle(e.target.value)

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "horen123");
        formData.append("cloud_name", "dftfcxnxd");
        const res = await axios.post(`${apiUrl}/image/upload`, formData);

        // const newEmployee = {}
        // newEmployee.name = name;
        // newEmployee.department = department;
        // newEmployee.phone = phone;
        // newEmployee.vehicle = vehicle;
        // newEmployee.image = res.data.url;
        addEmployee({
          name,
          department,
          phone,
          vehicle_no: vehicle,
          image:res.data.url
        }).then((res)=>{
          return res;
        }).then((res)=>{
          
          setAllEmployees([...allEmployees, res]);
        })
        onClose()
      // setImage(res.data.url);
    }
    catch(err) {
      console.log(err)
    }
  }

  React.useEffect(()=>{
    
    getAllEmployees().then((res)=>{
      return res
    }).then((emp)=>{
      setAllEmployees(emp)
    })

  },[])


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
    {allEmployees && <AllEmployeeTable 
        title={"All Employees"}
        captions={["Name", "Phone", "Vehicle Number", ""]}
        data={allEmployees}
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
        <ModalHeader>Add Employee</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input ref={initialRef} placeholder='Employee Name' onChange={handleName}/>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Department</FormLabel>
            <Input ref={initialRef} placeholder='Department' onChange={handleDepartment}/>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input ref={initialRef} placeholder='Phone Number' onChange={handlePhone}/>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Vehicle Number</FormLabel>
            <Input ref={initialRef} placeholder='Car Number' onChange={handleVehicle}/>
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