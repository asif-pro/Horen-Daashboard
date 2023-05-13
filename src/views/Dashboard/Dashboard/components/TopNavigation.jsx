import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import UserDashboard from 'views/Dashboard/UserDashboard'
import SuperAdmin from 'views/SuperAdmin/Dashboard'
import Orders from 'views/SuperAdmin/Orders/Orders'
import AdminDevices from 'views/SuperAdmin/Devices/AdminDevices'

const TopNavigation = () => {
  return (
    <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab>Dashboard</Tab>
      <Tab>Leaderboard</Tab>
      <Tab>Orders</Tab>
      <Tab>Devices(user)</Tab>
      <Tab>Devices(Admin)</Tab>
      <Tab>Dashboard(Admin)</Tab>
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
        <p>Leaderboard</p>
      </TabPanel>
      <TabPanel>
        <Orders></Orders>
      </TabPanel>
      <TabPanel>
        <p>Four!</p>
      </TabPanel>
      <TabPanel>
        <AdminDevices></AdminDevices>
      </TabPanel>
      <TabPanel>
        <SuperAdmin/>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default TopNavigation