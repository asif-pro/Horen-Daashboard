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
import Groups from 'views/Dashboard/UserDashboard/components/Groups'

const TopNavigation = () => {
  const [userType, setUserType] = React.useState('')

  React.useEffect(()=>{
    setUserType(localStorage.getItem('userType'))
  }, [])


  return (
    <Tabs position="relative" variant="unstyled">
    <TabList>
      {userType==='individual' && <Tab>Dashboard</Tab>}
      {userType==='super_admin' && <Tab>Dashboard</Tab>}
      <Tab>Leaderboard</Tab>
      {userType==='super_admin' && <Tab>Orders</Tab>}
      {userType==='individual' && <Tab>Devices</Tab>}
      {/* {userType==='individual' && <Tab>Devices(Company)</Tab>} */}
      {userType==='super_admin' && <Tab>Devices</Tab>}
      {userType==='individual' && <Tab>Groups</Tab>}
      {userType==='individual' && <Tab>Employee</Tab>}
    </TabList>
    <TabIndicator
      height="5px"
      bg="yellow.400"
      borderRadius="1px"
    />
    <TabPanels>
      {userType==='individual' && <TabPanel>
        <UserDashboard/>
      </TabPanel>}
      {userType==='super_admin' && <TabPanel>
        <SuperAdmin/>
      </TabPanel>}
      <TabPanel>
        <LeaderBoard></LeaderBoard>
      </TabPanel>
      {userType==='super_admin' && <TabPanel>
        <Orders></Orders>
      </TabPanel>}
      {userType==='individual' && <TabPanel>
        <UserDevices></UserDevices>
      </TabPanel>}
      {/* {userType==='individual' && <TabPanel>
        <CompanyDevices/>
      </TabPanel>} */}
      {userType==='super_admin' && <TabPanel>
        <AdminDevices></AdminDevices>
      </TabPanel>}
      {userType==='individual' && <TabPanel>
        <Groups></Groups>
      </TabPanel>}
      {userType==='individual' && <TabPanel>
        <AllEmployee/>
      </TabPanel>}
    </TabPanels>
  </Tabs>
  )
}

export default TopNavigation