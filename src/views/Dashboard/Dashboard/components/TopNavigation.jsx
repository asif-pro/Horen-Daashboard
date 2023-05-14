import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import UserDashboard from 'views/Dashboard/UserDashboard'
import SuperAdmin from 'views/SuperAdmin/Dashboard'
import Orders from 'views/SuperAdmin/Orders/Orders'
import AdminDevices from 'views/SuperAdmin/Devices/AdminDevices'
import LeaderBoard from 'components/LeaderBoard/LeaderBoard'
import CompanyDevices from 'views/Company/Devices/Devices'
import UserDevices from 'views/Dashboard/UserDashboard/Devices'
import AllEmployee from 'views/Company/Employee/AllEmployee'

const TopNavigation = () => {
  return (
    <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab>Dashboard</Tab>
      <Tab>Leaderboard</Tab>
      <Tab>Orders</Tab>
      <Tab>Devices(user)</Tab>
      <Tab>Devices(Company)</Tab>
      <Tab>Devices(Admin)</Tab>
      <Tab>Dashboard(Admin)</Tab>
      <Tab>Employee</Tab>
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
        <LeaderBoard></LeaderBoard>
      </TabPanel>
      <TabPanel>
        <Orders></Orders>
      </TabPanel>
      <TabPanel>
        <UserDevices></UserDevices>
      </TabPanel>
      <TabPanel>
        <CompanyDevices/>
      </TabPanel>
      <TabPanel>
        <AdminDevices></AdminDevices>
      </TabPanel>
      <TabPanel>
        <SuperAdmin/>
      </TabPanel>
      <TabPanel>
        <AllEmployee/>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}

export default TopNavigation