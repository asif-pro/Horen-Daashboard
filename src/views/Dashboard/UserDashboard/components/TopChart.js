// Chakra imports
import { Box, Grid,Spacer, GridItem, Flex, HStack, Text, useColorModeValue, Input, Select } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";
import HornsPerDay from "components/Charts/LineChart";

const TopChart = ({ title, percentage, chartData }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}>
      <CardHeader mb='20px' pl='22px'>
        <Flex display="flex" direction='row' width="100%" justifyContent='space-between' alignItems='center'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            {title}
          </Text>
          <Spacer/>
          <Select ml={'2'} placeholder='Select Device' width={'9vw'}>
            <option value='option2'>Device1</option>
            <option value='option3'>Device2</option>
            <option value='option1'>Device3</option>
            <option value='option1'>Device4</option>
          </Select>
         
         
          <Select ml={'2'} placeholder='Time-frame' width={'9vw'}>
            <option value='option2'>Week</option>
            <option value='option3'>Month</option>
     
          </Select>
            
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
        <HornsPerDay chartData={chartData}/>
      </Box>
    </Card>
  );
};

export default TopChart;
