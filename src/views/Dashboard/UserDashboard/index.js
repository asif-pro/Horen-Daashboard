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
  import peopleImage from "assets/img/people-image.png";
  import logoChakra from "assets/svg/logo-white.svg";
  import BarChart from "components/Charts/BarChart";
  import LineChart from "components/Charts/LineChart";
  import BellChart from "components/Charts/BellChart";
  import MiniStatistics from "../Dashboard/components/MiniStatistics";
  // Custom icons
  import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
    RocketIcon,
    StatsIcon,
  } from "components/Icons/Icons.js";
  import React from "react";
//   import { dashboardTableData, timelineData } from "variables/general";
  import ActiveUsers from "./components/ActiveUsers";
  import BuiltByDevelopers from "./components/BuiltByDevelopers";
//   import MiniStatistics from "./components/MiniStatistics";
//   import OrdersOverview from "./components/OrdersOverview";
//   import Projects from "./components/Projects";
  import SalesOverview from "./components/SalesOverview";
  import WorkWithTheRockets from "./components/WorkWithTheRockets";
//   import PaymentStatistics from "./components/PaymentStatistics";
import PaymentStatistics from "../Billing/components/PaymentStatistics";
import DashboardStatistics from "./components/DashboardStatistics";
import ChartStatistics from "./components/ChartStatistics";
import DashboardProfileCard from "../Billing/components/DashboardProfileCard";
import Guage from "components/Guage/Guage";
import TopChart from "./components/TopChart";
import AreaHorn from "./components/AreaHorn";
import GlobalHorn from "./components/GlobalHorn copy";

  
  function UserDashboard() {
    // const iconBoxInside = useColorModeValue("white", "white");
    if(localStorage.getItem('orderDetails')){
      const orderDetails = JSON.parse(localStorage.getItem('orderDetails'))
      console.log(orderDetails)
    }
      
  
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
                          title={"Polution"}
                          description={"percentage of contribution"}
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
                                percentage={5}
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