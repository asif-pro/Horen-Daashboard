// // Chakra imports
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Icon
  } from "@chakra-ui/react";
  import { FaPaypal, FaWallet } from "react-icons/fa";
//   // assets
  import LineChart from "components/Charts/LineChart";
  import BellChart from "components/Charts/BellChart";
  // Custom icons
  import React from "react";
import axios from 'axios';

import DashboardStatistics from "./components/DashboardStatistics";
import DashboardProfileCard from "../Billing/components/DashboardProfileCard";

import TopChart from "./components/TopChart";
import AreaHorn from "./components/AreaHorn";
import GlobalHorn from "./components/GlobalHorn";
import { cleanDataByTime, formatForApex } from "utils/chartCleaning";
import {useSelector} from 'react-redux'
import { getWeekBracket } from "utils/chartCleaning";

  
  function UserDashboard() {
    // const iconBoxInside = useColorModeValue("white", "white");

    const [devices, setDevices] = React.useState([]);
    const [lineChartData, setLineChartData] = React.useState({});
    const device = useSelector(state => state.device);

    if(localStorage.getItem('orderDetails')){
      const orderDetails = JSON.parse(localStorage.getItem('orderDetails'))
    }

    const fetchchartData = async () => {
      try {
        const userId = localStorage.getItem('userId');
     
        const deviceResponse = await fetch(
          `${process.env.REACT_APP_DEVICES_URL}device/user_id/${userId}`
        );
        const deviceData = await deviceResponse.json();
        setDevices(deviceData);
        if(deviceData.length > 0){
          const ruId = deviceData[0].RU_id;
          const requestBody = {
            deviceRUids: [ruId],
          };
          console.log(process.env.REACT_APP_SIGNAL_URL)
          axios.post(`${process.env.REACT_APP_SIGNAL_URL}signal/SignalSumByDateByDevices`, requestBody)
            .then((res)=>{
              const week = getWeekBracket();
             
              return cleanDataByTime(week,res.data)

            })
            .then((res)=>{
              setLineChartData(res);   
            });
        }
        
      } catch (error) {
        console.log(error);
      }
    };

    const fetchchartDatabyDevice = async (device) => {
      try {
         const ruId = device[0].RU_id;
          const requestBody = {
            deviceRUids: [ruId],
          };
          axios.post(`${process.env.REACT_APP_SIGNAL_URL}signal/SignalSumByDateByDevices`, requestBody)
            .then((res)=>{
              const week = getWeekBracket();
             
              return cleanDataByTime(week,res.data)

            })
            .then((res)=>{
              setLineChartData(res);   
            });       
      } catch (error) {
        console.log(error);
      }
    };

      React.useEffect(() => {
        
        
        fetchchartData();
      }, []);

      React.useEffect(()=>{
        fetchchartDatabyDevice(device)
      },[device])
    
  
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
                          description={"You're in the top 5% of sound polluters"}
                        />
                        </GridItem>
                        <GridItem colSpan={3}>
                        <DashboardStatistics
                          title={"Per km"}
                          stat={'12'}
                          description={"You click the horn 12 times for every km travelled"}
                        />
                        </GridItem>
                        <GridItem colSpan={3}>
                        <DashboardStatistics
                          title={"dB"}
                          description={"You were exposed to 10dB of sound today"}
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
                                chartData={lineChartData}
                                />
                        </Box>
                </GridItem>

                <GridItem  h='100%'  colSpan={2}>
                    <DashboardProfileCard
                        icon={<Icon h={"24px"} w={"24px"} color='white' as={FaPaypal} />}
                       
                        description={"Project Code"}
                        amount={4550}
                    />
             
                </GridItem>
            </Grid>            

           
          
        </Flex>
        );
}
export default UserDashboard