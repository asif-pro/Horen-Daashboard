import { Flex } from "@chakra-ui/react";
import React from "react";
import OrdersTable from "views/Dashboard/Tables/components/OrdersTable";
import { dashboardTableData } from "variables/general";
import { getOrder, updateDeliveryStatus } from "Services/oderServices";
import CompanyDevicesTable from "views/Dashboard/Tables/CompanyDevicesTable";

const Devices = () => {
  return (
    <>
        <CompanyDevicesTable/>
    </>
  )
}

export default Devices