// // Chakra imports
import {
    Flex,
    Grid,
    GridItem,
    Icon
  } from "@chakra-ui/react";
import { FaPaypal, FaWallet } from "react-icons/fa";
import BellChart from "components/Charts/BellChart";
import React from "react";
import DashboardProfileCard from "./DashboardProfileCard";
import GlobalHorn from "./components/GlobalHorn copy";
import DashboardStatistics from "views/Dashboard/UserDashboard/components/DashboardStatistics";

const SuperAdmin = () => {
    return (
        <Flex flexDirection='column' pt={{ base: "50px", md: "20px" }}>
    
            <Grid templateColumns='repeat(6, 1fr)' gap={4}>
    
                <GridItem colSpan={4} h='10'>
                    
                        <Grid templateColumns='repeat(9, 1fr)' gap={2} mb={'30px'}>
                        <GridItem colSpan={3}>
                        <DashboardStatistics
                          stat={'82%'}
                          title={"Active"}
                          description={"Percentage of Devices"}
                        />
                        </GridItem>
                        <GridItem colSpan={3}>
                        <DashboardStatistics
                          title={"Orders"}
                          stat={'39'}
                          description={"Number of Orders"}
                        />
                        </GridItem>
                        <GridItem colSpan={3}>
                        <DashboardStatistics
                          title={"Devices"}
                          description={"Available Devices"}
                          // amount={200}
                          stat={'276'}
                        />
                        </GridItem>
                        </Grid>
                        <Grid>
                        <GridItem colSpan={3}>
                            <GlobalHorn 
                                title={"HC/Hr-Global"}
                                percentage={5}
                                chart={<BellChart />}
                            />
                        </GridItem>
                        {/* <GridItem colSpan={3}>
                            <AreaHorn 
                                title={"HC/Hr-Area"}
                                percentage={5}
                                chart={<BellChart />}
                            />
                        </GridItem> */}
                        </Grid>
                </GridItem>

                <GridItem  h='10'  colSpan={2}>
                    <DashboardProfileCard
                        icon={<Icon h={"24px"} w={"24px"} color='white' as={FaPaypal} />}
                        title={"Mr. John"}
                        description={"SELISE Digital Platfroms"}
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
                    {/* <Guage></Guage> */}
                </GridItem>
            </Grid>            

           
          
        </Flex>
        );
}

export default SuperAdmin