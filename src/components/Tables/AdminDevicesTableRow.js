import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
} from '@chakra-ui/react'
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import QRCode from "qrcode.react";

function DashboardTableRow(props) {
  const { deviceID, ru_id, qr_code, device_config} = props;
  const textColor = useColorModeValue("gray.700", "white");

  const { isOpen, onOpen, onClose } = useDisclosure()
  // const { isOpenQR, onOpenQR, onCloseQR } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const downloadQR = () => {
    const canvas = document.getElementById("23456234");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "23456234.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <>
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
            {deviceID}
          </Text>
        </Flex>
      </Td>
      <Td onClick={onOpen}>
      <QRCode
        id="123456"
        value={qr_code}
        size={55}
        level={"H"}
        includeMargin={true}
      /> 

      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {/* {status} */}
          userID
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {/* {status} */}
          {ru_id}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {/* {status} */}
          {device_config}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          yes/NO
        </Text>
      </Td>
      {/* <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            colorScheme={progression === 100 ? "teal" : "cyan"}
            size="xs"
            value={progression}
            borderRadius="15px"
          />
        </Flex>
      </Td> */}
      {/* <Td>
        <Button p="0px" bg="transparent">
          <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
        </Button>
      </Td> */}
    </Tr>
    {/* //QR Code Modal */}
    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>QR Code</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            

            <Box>
            <QRCode
            id='23456234'
            value={qr_code}
            size={'150'}
            level='H'
            includeMargin={true} 
            />
          </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={downloadQR}>
              Download
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DashboardTableRow;
