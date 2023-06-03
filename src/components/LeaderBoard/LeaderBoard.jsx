import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Authors from "views/Dashboard/Tables/components/GlobalRankTable";
import Projects from "views/Dashboard/Dashboard/components/Projects";
import { tablesTableData, dashboardTableData } from "variables/general";
import GlobalRankTable from "views/Dashboard/Tables/components/GlobalRankTable";
import './LeaderBoard.css'

const LeaderBoard = () => {
  return (
    // <Box className="leaderboardContainer">
      <>
         <Flex p={30} justifyContent="center" className="leaderboardTopContainer">
            <Box pl={20} pr={20} >
                <GlobalRankTable
                    title={"Global Rank"}
                    captions={["Rank", "Name", "Horns",]}
                    data={tablesTableData}
                />
            </Box> 
            <Box pl={20} pr={20}>
                <GlobalRankTable
                    title={"Company Rank (Inter)"}
                    captions={["Rank", "Name", "Horns",]}
                    data={tablesTableData}
                />
            </Box> 
        </Flex>
        {(localStorage.getItem('userType')==='corporate') && <Flex p={30} justifyContent="center" className="leaderboardTopContainer">
            <Box pl={20} pr={20}>
                <GlobalRankTable
                    title={"Intra Company Rank"}
                    captions={["Rank", "Name", "Horns",]}
                    data={tablesTableData}
                />
            </Box> 
        </Flex>}
    
        </>
  )
}

    

export default LeaderBoard