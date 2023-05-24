import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import LineChart from 'components/Charts/LineChart'
import React from 'react'
import DashboardStatistics from 'views/Dashboard/UserDashboard/components/DashboardStatistics'
import TopChart from 'views/Dashboard/UserDashboard/components/TopChart'

const IndividualDevice = () => {
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
                       
                        <Box mb={5}>
                            <TopChart 
                                title={"Horns played per Day"}
                                percentage={5}
                                chart={<LineChart />}
                                />
                        </Box>
                </GridItem>

            </Grid>            

           
          
        </Flex>
  )
}

export default IndividualDevice