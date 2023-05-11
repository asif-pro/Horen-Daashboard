import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import UserDashboard from 'views/Dashboard/UserDashboard'

const TopNavigation = () => {
  return (
    <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab>Dashboard</Tab>
      <Tab>Leaderboard</Tab>
      <Tab>Our Product</Tab>
    </TabList>
    <TabIndicator
      height="5px"
      bg="gray.400"
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
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default TopNavigation