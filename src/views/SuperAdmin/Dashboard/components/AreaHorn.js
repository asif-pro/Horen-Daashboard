// Chakra imports
import { Box, Grid,Spacer, GridItem, Flex, HStack, Text, useColorModeValue, Select } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import React from "react";

const AreaHorn = ({ title, percentage, chart }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p='28px 10px 16px 0px' mb={{ sm: "26px", lg: "0px" }}>
      <CardHeader mb='20px' pl='22px'>
        <Flex display="flex" direction='row' width="100%" justifyContent='space-between'>
          <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px'>
            {title}
          </Text>
          <Spacer/>
          <Select placeholder='Select Area' width={'8vw'}>
            <option value='option2'>Banani</option>
            <option value='option3'>Dhanmondi</option>
            <option value='option1'>Gulshan</option>
            <option value='option1'>Mirpur</option>
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
        {chart}
      </Box>
    </Card>
  );
};

export default AreaHorn;
