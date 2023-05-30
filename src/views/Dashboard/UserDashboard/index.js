// // Chakra imports
import {
    Box,
    Flex,
    Grid,
    GridItem,
    HStack,
    Image,
    SimpleGrid,
    useColorModeValue,
    Icon
  } from "@chakra-ui/react";
  import { FaPaypal, FaWallet } from "react-icons/fa";
//   // assets
  import LineChart from "components/Charts/LineChart";
  import BellChart from "components/Charts/BellChart";
  import MiniStatistics from "../Dashboard/components/MiniStatistics";
  // Custom icons
  import React from "react";


import DashboardStatistics from "./components/DashboardStatistics";
import DashboardProfileCard from "../Billing/components/DashboardProfileCard";

import TopChart from "./components/TopChart";
import AreaHorn from "./components/AreaHorn";
import GlobalHorn from "./components/GlobalHorn";

  
  function UserDashboard() {
    // const iconBoxInside = useColorModeValue("white", "white");
    if(localStorage.getItem('orderDetails')){
      const orderDetails = JSON.parse(localStorage.getItem('orderDetails'))
      console.log(orderDetails)
    }
    
    React.useEffect(
      React.useCallback(() => {
        
        
        const fetchchartData = async () => {
          try {
            const userId = await AsyncStorage.getItem("userId");
            const deviceResponse = await fetch(
              `${config.Device_URL}/device/user_id/${userId}`
            );
            const deviceData = await deviceResponse.json();
            setDevices(deviceData);
            
            const ruId = deviceData[0].RU_id;
            const requestBody = {
              deviceRUids: [ruId],
            };
           
            const response = await fetch(
              // `${config.SIGNAL_URL}/signal/SignalSumByDateByDevices`,
              `https://2967-113-11-37-36.ngrok-free.app/signal/SignalSumByDateByDevices`,
              
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
              }
            );
            const week = getWeekBracket();
           
            const chartData = await response.json().then((res) => {
             return cleanDataByTime(week, res);
            });
            
            setDevices(deviceData);
            setchart1Data(chartData);
          } catch (error) {
            console.log(error);
          }
        };
        fetchchartData();
      }, [])
    );
  
    return (
        <Flex flexDirection='column' pt={{ base: "50px", md: "20px" }}>
    
            <Grid templateColumns='repeat(6, 1fr)' gap={4}>
    
                <GridItem colSpan={4} h='10'>
                        {/* <Box mb={5}>
                            <TopChart 
                                title={"Horns played per Day"}
                                percentage={5}
                                chart={<LineChart />}
                                />
                        </Box> */}
                        <Grid templateColumns='repeat(9, 1fr)' gap={2} mb={'30px'}>
                        <GridItem colSpan={3}>
                        <DashboardStatistics
                          stat={'5%'}
                          title={"Top Polluters"}
                          description={"You're in the top 5% of sound polluter"}
                        />
                        </GridItem>
                        <GridItem colSpan={3}>
                        <DashboardStatistics
                          title={"Per Hour"}
                          stat={'39'}
                          description={"Number of Horn"}
                        />
                        </GridItem>
                        <GridItem colSpan={3}>
                        <DashboardStatistics
                          title={"db"}
                          description={"exposed horns today"}
                          // amount={200}
                          stat={'10'}
                        />
                        </GridItem>
                        </Grid>
                        <Grid templateColumns='repeat(6, 1fr)' gap={2} mb={'30px'}>
                        <GridItem colSpan={3}>
                            <GlobalHorn 
                                title={"HC/Hr-Global"}
                                percentage={8}
                                chart={<BellChart />}
                            />
                        </GridItem>
                        <GridItem colSpan={3}>
                            <AreaHorn 
                                title={"HC/Hr-Area"}
                                percentage={5}
                                chart={<BellChart />}
                            />
                        </GridItem>
                        </Grid>
                        <Box mb={5}>
                            <TopChart 
                                title={"Horns played per Day"}
                                percentage={5}
                                chart={<LineChart />}
                                />
                        </Box>
                </GridItem>

                <GridItem  h='100%'  colSpan={2}>
                    <DashboardProfileCard
                        icon={<Icon h={"24px"} w={"24px"} color='white' as={FaPaypal} />}
                        title={"Mr. Eshtiaque Khan"}
                        description={"Project Code"}
                        amount={4550}
                    />
                    {/* <SimpleGrid gap={{ sm: "12px" }} p={'15px'} columns={3}>
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
                    </SimpleGrid> */}
                </GridItem>
            </Grid>            

           
          
        </Flex>
        );
}
export default UserDashboard