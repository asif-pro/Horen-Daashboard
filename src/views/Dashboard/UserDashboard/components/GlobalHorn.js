// Chakra imports
import { Box, Grid,Spacer, GridItem, Flex, HStack, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import BellChart from "components/Charts/BellChart";
import React, { useEffect } from "react";

const GlobalHorn = ({ title, percentage, chart }) => {
  const [chartData, setChartData] = React.useState({});

  useEffect(()=>{
    setChartData([ 
      {hornCount:20,honkers:4},
      {hornCount:30,honkers:8},
      {hornCount:40,honkers:15},
      {hornCount:50,honkers:30},
      {hornCount:60,honkers:40},
      {hornCount:70,honkers:30},
      {hornCount:80,honkers:15},
      {hornCount:90,honkers:8},
      {hornCount:100,honkers:4}])

  },[]);
 
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}>
      <CardHeader mb='20px' pl='22px'>
        <Flex display="flex" direction='row' width="100%" justifyContent='space-between'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            {title}
          </Text>
          <Spacer/>
          {/* <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            {title}
          </Text> */}
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
        <BellChart chartData={chartData}/>
      </Box>
    </Card>
  );
};

export default GlobalHorn;
