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
import moment from "moment";
import { FaShippingFast } from "react-icons/fa";
import { updateDeliveryStatus } from "Services/oderServices";

function DashboardTableRow(props) {
  const { _id, timeStamp, quantity, price, paymentStatus, shippingAddress, deliveryStatus} = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td minWidth={{ sm: "200px" }} pl="0px">
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
      <Td minWidth={{ sm: "200px" }}>
        <Text fontSize="md" color={textColor}  pb=".5rem">
          {moment(timeStamp).format('LL')} <br/>
          {moment(timeStamp).format('LT')}  
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
        &#2547;{price}
        </Text>
        </Flex>
      </Td>
      <Td>
      <Badge
          bg={paymentStatus === "pending" ? "orange.300" : (paymentStatus === "paid" ? "green.300" : paymentStatus)}
          color={paymentStatus === "pending" ? "black" : (paymentStatus === "paid" ? "white" : paymentStatus)}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {paymentStatus}
        </Badge>
      </Td>
      <Td>
        <Flex direction="column">
        <Text fontSize="md" color={textColor} pb=".5rem">
          {`${shippingAddress.fullAddress == undefined  ? "" : shippingAddress.fullAddress},${shippingAddress.area?.area_name},${shippingAddress.city?.city}`}
        </Text>
        </Flex>
      </Td>
      <Td>
      <Badge
          bg={deliveryStatus === "pending" ? "orange.300" : (deliveryStatus === "requested-for-delivery" ? "green.300" : deliveryStatus)}
          color={deliveryStatus === "pending" ? "black" : (deliveryStatus === "requested-for-delivery" ? "white" : deliveryStatus)}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {deliveryStatus}
        </Badge>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
