// Chakra imports
import { Flex, Icon, Img, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { StatsIcon } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import React from "react";
import ChartStatistics from "views/Dashboard/Dashboard/components/ChartStatistics";
import Guage from "components/Guage/Guage";
import DashboardStatistics from "views/Dashboard/UserDashboard/components/DashboardStatistics";
import { FaWallet } from "react-icons/fa";
import axios from "axios";

const DashboardProfileCard = ({ icon, title, description, amount }) => {

  const iconteal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");
  const profilePic = localStorage.getItem('profilePic');
  const userId = localStorage.getItem('userId');
  const [user,setUser] = React.useState({});
React.useEffect(()=>{
  async function fetchName(){
    await axios.get(`${process.env.REACT_APP_USERS_URL}profile/${userId}`).then((res)=>{
      //  return res.json()
       setUser(res.data)
    }).then((res)=>{
      
    });
    
    
  }
  fetchName()

},[])
console.log(user)
  return (
    <Card p='16px' display='flex' align='center' justify='center'>
      <CardBody>
        <Flex direction='column' align='center' w='100%' py='14px'>
          {/* <IconBox as='box' h={"60px"} w={"60px"} bg={iconteal}>
            {icon}
          </IconBox> */}
          <Img borderRadius={'50%'} width={'150px'} src={profilePic}></Img>
          <Flex
            direction='column'
            m='14px'
            justify='center'
            textAlign='center'
            align='center'
            w='100%'>
            <Text fontSize='md' color={textColor} fontWeight='bold'>
              {user?.name}
            </Text>
            <Text
              mb='24px'
              fontSize='xs'
              color='gray.400'
              fontWeight='semibold'>
              {user?.type?.toUpperCase()}{" "}USER
            </Text>
            <Separator />
          </Flex>
          {/* <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {`%${amount}`}
          </Text> */}
        </Flex>
        
       
      </CardBody>
      <SimpleGrid gap={{ sm: "12px" }} p={'15px'} columns={3}>
                        <ChartStatistics
                        title={"Registered"}
                        amount={"64"}
                        // percentage={40}
                        icon={<StatsIcon h={"15px"} w={"15px"} color='white' />}
                        />
                        <ChartStatistics
                        title={"Active"}
                        amount={"32"}
                        // percentage={40}
                        icon={<StatsIcon h={"15px"} w={"15px"} color='white' />}
                        />
                        <ChartStatistics
                        title={"Trips"}
                        amount={"745"}
                        // percentage={40}
                        icon={<StatsIcon h={"15px"} w={"15px"} color='white' />}
                        />
                    </SimpleGrid>
                    <SimpleGrid gap={{ sm: "12px" }} p={'15px'} columns={2}><Guage></Guage></SimpleGrid>
                    <SimpleGrid gap={{ sm: "12px" }} p={'15px'} columns={2}>
                        {/* <MiniStatistics
                        title={"Average per minute"}
                        amount={"119 dB"}
                        percentage={17}
                        icon={<WalletIcon h={"24px"} w={"24px"} color='white' />}
                        /> */}
                        <DashboardStatistics
                          icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
                          title={"db"}
                          description={"Per Hour"}
                          amount={17}
                          stat={119}
                        />
                        <DashboardStatistics
                          icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
                          title={"db"}
                          description={"Per km"}
                          amount={14}
                          stat={110}
                        />
                    </SimpleGrid>
    </Card>
  );
};

export default DashboardProfileCard;
