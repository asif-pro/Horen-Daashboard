import {
  Avatar,
  Badge,
  Button,
  Flex,
  Icon,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function AllEmployeeTableRow(props) {

  const { name, department, phone, vehicle, image} = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <Tr>
      <Td minWidth={{ sm: "100px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={image} w="50px" borderRadius="50px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {department}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor}  pb=".5rem">
          {phone}
        </Text>
      </Td>

      <Td>
        <Text fontSize="md" color={textColor}  pb=".5rem">
          {vehicle}
        </Text>
      </Td>
      <Td>
      <Button p="0px" bg="transparent">
          <Icon as={FaPencilAlt} color="gray.400" cursor="pointer" />
        </Button>
      <Button p="0px" bg="transparent">
          <Icon as={FaTrash} color="gray.400" cursor="pointer" />
        </Button>
      </Td>
    </Tr>
  );
}

export default AllEmployeeTableRow;
