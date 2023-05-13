import { Flex } from "@chakra-ui/react";
import React from "react";
import OrdersTable from "views/Dashboard/Tables/components/OrdersTable";
import { dashboardTableData } from "variables/general";
import { getOrder, updateDeliveryStatus } from "Services/oderServices";
import AdminDevicesTable from "views/Dashboard/Tables/AdminDevices";

const AdminDevices = () => {
  return (
    <>
        <AdminDevicesTable/>
    </>
  )
}

export default AdminDevices