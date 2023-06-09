// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import AdminDevicesTableRow from "components/Tables/AdminDevicesTableRow";
import React from "react";

const AdminDevices = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card my='22px' overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' pl='0px'>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <AdminDevicesTableRow                  
                  key={row._id}
                  deviceID={row._id}
                  ru_id={row.RU_id}
                  qr_code={row.qr_code}
                  device_config={row.device_configure}
                  user_name={row.user_id ? `User: ${row.user_id}` : (row.company_id ? `Company: ${row.company_id}` : 'Not Claimed Yet')}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default AdminDevices;
