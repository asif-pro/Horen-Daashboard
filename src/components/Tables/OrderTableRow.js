import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { FaShippingFast } from "react-icons/fa";
import { updateDeliveryStatus } from "Services/oderServices";

function DashboardTableRow(props) {
  const { _id, shippingAddress, quantity, paymentStatus, deliveryStatus, timeStamp, user_id, phonenumber, price, updateStatus } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {/* <Icon as={logo} h={"24px"} w={"24px"} me="18px" /> */}
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {_id}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {user_id}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {timeStamp}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {quantity}
        </Text>
          {/* <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text> */}
          {/* <Progress
            colorScheme={progression === 100 ? "teal" : "cyan"}
            size="xs"
            value={progression}
            borderRadius="15px"
          /> */}
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {price}
        </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {paymentStatus}
        </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {phonenumber}
        </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {shippingAddress}
        </Text>
        </Flex>
      </Td>
      <Td>
      <Badge
          bg={deliveryStatus === "requested-for-delivery" ? "green.400" : deliveryStatus}
          color={deliveryStatus === "pending" ? "black" : deliveryStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {deliveryStatus}
        </Badge>
      </Td>
      <Td>
        <Button p="0px" bg="transparent" onClick={()=>updateStatus(_id)}>
          <Icon as={FaShippingFast} color="gray.400" cursor="pointer" fontSize={'35'} />
        </Button>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
