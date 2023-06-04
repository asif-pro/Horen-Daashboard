import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import Authors from "views/Dashboard/Tables/components/GlobalRankTable";
import Projects from "views/Dashboard/Dashboard/components/Projects";
import { tablesTableData, dashboardTableData, globalRankTableData, interComapnyRankTableData } from "variables/general";
import GlobalRankTable from "views/Dashboard/Tables/components/GlobalRankTable";
import './LeaderBoard.css'

const LeaderBoard = () => {
  return (
    // <Box className="leaderboardContainer">
      <>
         <Flex p={30} justifyContent="center" className="leaderboardTopContainer">
            <Box display={'flex'}>
            {((localStorage.getItem('userType')==='individual')||(localStorage.getItem('userType')==='super_admin')) && <Box pl={20} pr={20} >
                <GlobalRankTable
                    title={"Global Rank"}
                    captions={["Rank", "Name", "Horns",]}
                    data={globalRankTableData}
                />
            </Box> }
            {((localStorage.getItem('userType')==='corporate')||(localStorage.getItem('userType')==='super_admin')) && <>
            <Box pl={20} pr={20}>
                <GlobalRankTable
                    title={"Inter Company Rank"}
                    captions={["Rank", "Name", "Horns",]}
                    data={interComapnyRankTableData}
                />
            </Box> 
            <Box pl={20} pr={20}>
                <GlobalRankTable
                    title={"Intra Company Rank"}
                    captions={["Rank", "Name", "Horns",]}
                    data={globalRankTableData}
                />
            </Box> 
            </>}
            </Box>
        </Flex>
        {/* {(localStorage.getItem('userType')==='corporate') && <Flex p={30} justifyContent="center" className="leaderboardTopContainer">
            <Box pl={20} pr={20}>
                <GlobalRankTable
                    title={"Intra Company Rank"}
                    captions={["Rank", "Name", "Horns",]}
                    data={tablesTableData}
                />
            </Box> 
        </Flex>} */}
    
        </>
  )
}

    

export default LeaderBoard