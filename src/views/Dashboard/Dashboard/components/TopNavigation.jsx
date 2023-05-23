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
import Order from 'views/Order/Order'
import UserOrderStatus from 'views/SuperAdmin/Orders/UserOrderStatus'


const TopNavigation = () => {
  const [userType, setUserType] = React.useState('')

  React.useEffect(()=>{
    setUserType(localStorage.getItem('userType'))
  }, [])


  return (
    <Tabs position="relative" variant="unstyled">
    <TabList>
      {(userType==='individual' || userType==='corporate') && <Tab>Dashboard</Tab>}
      {userType==='super_admin' && <Tab>Dashboard</Tab>}
      <Tab>Leaderboard</Tab>
      {userType==='super_admin' && <Tab>Orders</Tab>}
      {userType==='individual' && <Tab>Devices</Tab>}
      {userType==='corporate' && <Tab>Devices</Tab>}
      {userType==='super_admin' && <Tab>Devices</Tab>}
      {(userType==='individual' || userType==='corporate') && <Tab>Groups</Tab>}
      {userType==='corporate' && <Tab>Employee</Tab>}
      {(userType==='individual' || userType==='corporate') && <Tab>Orders</Tab>}
      {userType!='super_admin' && <Tab>Buy</Tab>}
    </TabList>
    <TabIndicator
      height="5px"
      bg="yellow.400"
      borderRadius="1px"
    />
    <TabPanels>
      {(userType==='individual' || userType==='corporate') && <TabPanel>
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
      {userType==='corporate' && <TabPanel>
        <CompanyDevices/>
      </TabPanel>}
      {userType==='super_admin' && <TabPanel>
        <AdminDevices></AdminDevices>
      </TabPanel>}
      {(userType==='individual' || userType==='corporate') && <TabPanel>
        <Groups></Groups>
      </TabPanel>}
      {userType==='corporate' && <TabPanel>
        <AllEmployee/>
      </TabPanel>}
      {userType!='super_admin' && <TabPanel>
        <UserOrderStatus/>
      </TabPanel>}
      {userType!='super_admin' && <TabPanel>
        <Order/>
      </TabPanel>}
    </TabPanels>
  </Tabs>
  )
}

export default TopNavigation