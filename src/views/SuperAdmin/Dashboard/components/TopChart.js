// Chakra imports
import { Box, Grid,Spacer, GridItem, Flex, HStack, Text, useColorModeValue, Input } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";

const TopChart = ({ title, percentage, chart }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}>
      <CardHeader mb='20px' pl='22px'>
        <Flex display="flex" direction='row' width="100%" justifyContent='space-between' alignItems='center'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            {title}
          </Text>
          <Spacer/>
          <Text p={'2'}  fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            From:
          </Text>
          <Input
            placeholder="Select Date and Time"
            size="md"
            width={'9vw'}
            type="date"
            />
            <Text p={'2'} pl={'5'}  fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            To:
          </Text>
          <Input
            placeholder="Select Date and Time"
            size="md"
            width={'9vw'}
            type="date"
            />
          {/* <Text fontSize='md' fontWeight='medium' color='gray.400'>
            <Text
              as='span'
              color={percentage > 0 ? "green.400" : "red.400"}
              fontWeight='bold'>
              {`${percentage}%`} more
            </Text>{" "}
            in 2021
          </Text> */}
        </Flex>
    
        
      </CardHeader>
      <Box w='100%' h={{ sm: "300px" }} ps='8px'>
        {chart}
      </Box>
    </Card>
  );
};

export default TopChart;
