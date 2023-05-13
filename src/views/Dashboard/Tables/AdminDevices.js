// Chakra imports
import { Flex, Box, Button, Icon } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import AdminDevicesTable from "./components/AdminDevices";
import { tablesTableData, dashboardTableData } from "variables/general";
import { FaPlus } from "react-icons/fa";

function AdminDevices() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Box alignSelf={'flex-end'}>
        <Button colorScheme='teal' variant='outline'>
        <Icon as={FaPlus} color="gray.400" cursor="pointer" fontSize={'18'} /> Add Device
        </Button>
      </Box>
      <AdminDevicesTable
        title={"All Devices"}
        captions={["Device ID", "QR Code", "User ID", "RU ID", "Device Config.", "Block Device"]}
        data={dashboardTableData}
      />
    </Flex>
  );
}

export default AdminDevices;
