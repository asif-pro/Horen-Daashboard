import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import UserDashboard from 'views/Dashboard/UserDashboard'
import Orders from 'views/SuperAdmin/Orders/Orders'

const TopNavigation = () => {
  return (
    <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab>Dashboard</Tab>
      <Tab>Leaderboard</Tab>
      <Tab>Orders</Tab>
      <Tab>Devices</Tab>
    </TabList>
    <TabIndicator
      height="5px"
      bg="yellow.400"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        {/* <Billing/> */}
        <UserDashboard/>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <Orders></Orders>
      </TabPanel>
      <TabPanel>
        <p>Four!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default TopNavigation