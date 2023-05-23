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
import TablesProjectRow from "components/Tables/TablesProjectRow";
import UserOrderTableRow from "components/Tables/UserOrderTableRow"
import React from "react";

const UserOrdersTable = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card my='22px' overflowX={{ sm: "scroll", xl: "scroll" }}>
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
          {data && <Tbody>
            {data.map((row) => {
              return (
                <UserOrderTableRow
                  key={row._id}
                  _id={row._id}
                  timeStamp={row.timeStamp}
                  quantity={row.quantity}
                  price={row.price}
                  paymentStatus={row.paymentStatus}
                  shippingAddress={row.shippingAddress}
                  deliveryStatus={row.deliveryStatus}
                />
              );
            })}
          </Tbody>}
        </Table>
      </CardBody>
    </Card>
  );
};

export default UserOrdersTable;
