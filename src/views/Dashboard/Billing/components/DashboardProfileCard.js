// Chakra imports
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import { WalletIcon } from "components/Icons/Icons";
import { StatsIcon } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import React from "react";
import ChartStatistics from "views/Dashboard/Dashboard/components/ChartStatistics";
import MiniStatistics from "views/Dashboard/Dashboard/components/MiniStatistics";
import Guage from "components/Guage/Guage";

const DashboardProfileCard = ({ icon, title, description, amount }) => {
  const iconteal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' display='flex' align='center' justify='center'>
      <CardBody>
        <Flex direction='column' align='center' w='100%' py='14px'>
          <IconBox as='box' h={"60px"} w={"60px"} bg={iconteal}>
            {icon}
          </IconBox>
          <Flex
            direction='column'
            m='14px'
            justify='center'
            textAlign='center'
            align='center'
            w='100%'>
            <Text fontSize='md' color={textColor} fontWeight='bold'>
              {title}
            </Text>
            <Text
              mb='24px'
              fontSize='xs'
              color='gray.400'
              fontWeight='semibold'>
              {description}
            </Text>
            <Separator />
          </Flex>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {`%${amount}`}
          </Text>
        </Flex>
        
       
      </CardBody>
      <SimpleGrid gap={{ sm: "12px" }} p={'15px'} columns={3}>
                        <ChartStatistics
                        title={"Registered"}
                        amount={"320"}
                        percentage={40}
                        icon={<StatsIcon h={"15px"} w={"15px"} color='white' />}
                        />
                        <ChartStatistics
                        title={"Active"}
                        amount={"320"}
                        percentage={40}
                        icon={<StatsIcon h={"15px"} w={"15px"} color='white' />}
                        />
                        <ChartStatistics
                        title={"Trips"}
                        amount={"320"}
                        percentage={40}
                        icon={<StatsIcon h={"15px"} w={"15px"} color='white' />}
                        />
                    </SimpleGrid>
                    <SimpleGrid gap={{ sm: "12px" }} p={'15px'} columns={2}><Guage></Guage></SimpleGrid>
                    <SimpleGrid gap={{ sm: "12px" }} p={'15px'} columns={2}>
                        <MiniStatistics
                        title={"Average per minute"}
                        amount={"119 dB"}
                        percentage={17}
                        icon={<WalletIcon h={"24px"} w={"24px"} color='white' />}
                        />
                        <MiniStatistics
                        title={"Average per km"}
                        amount={"14 dB"}
                        percentage={14}
                        icon={<WalletIcon h={"24px"} w={"24px"} color='white' />}
                        />
                    </SimpleGrid>
    </Card>
  );
};

export default DashboardProfileCard;
