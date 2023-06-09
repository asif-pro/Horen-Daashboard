// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import imageArchitect1 from "assets/img/ImageArchitect1.png";
import imageArchitect2 from "assets/img/ImageArchitect2.png";
import imageArchitect3 from "assets/img/ImageArchitect3.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import { FaPlus } from "react-icons/fa";
import GroupCard from "./GroupCard";

const Groups = ({ title, description }) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' my='24px'>
      <CardHeader p='12px 5px' mb='12px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            Groups
          </Text>
          <Text fontSize='sm' color='gray.500' fontWeight='400'>
            All the groups are here
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px='5px'>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap='24px'>
          <GroupCard
            image={imageArchitect1}
            name={"Trucks"}
            category={"Group-1"}
            description={
              "As Uber works through a huge amount of internal management turmoil."
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
          <GroupCard
            image={imageArchitect2}
            name={"Caravan"}
            category={"Company-2"}
            description={
              "Music is something that every person has his or her own specific opinion about."
            }
            avatars={[avatar4, avatar2, avatar6, avatar4]}
          />
          <GroupCard
            image={imageArchitect3}
            name={"Bikes"}
            category={"Group-3"}
            description={
              "Different people have different taste, especially various types of music."
            }
            avatars={[avatar2, avatar4, avatar6]}
          />
          <Button
            p='0px'
            bg='transparent'
            color='gray.500'
            border='1px solid lightgray'
            borderRadius='15px'
            minHeight={{ sm: "200px", md: "100%" }}>
            <Flex direction='column' justifyContent='center' align='center'>
              <Icon as={FaPlus} fontSize='lg' mb='12px' />
              <Text fontSize='lg' fontWeight='bold'>
                Create a New Group
              </Text>
            </Flex>
          </Button>
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Groups;
