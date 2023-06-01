/*eslint-disable*/
// chakra imports
import {
    Box,
    Button, Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
    Icon
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import { CreativeTimLogo } from "components/Icons/Icons";
import { Separator } from "components/Separator/Separator";
import { SidebarHelp } from "components/Sidebar/SidebarHelp";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BsDeviceSsdFill } from 'react-icons/bs';

// this function creates the links and collapses that appear in the sidebar (left menu)

const devicesData = [
  {id: "1",name:"RU-245", clicked:"deactive"},
  {id: "2",name:"Sedean Car", clicked:"deactive"},
  {id: "3",name:"RU-756", clicked:"deactive"},
  {id: "4",name:"SUV", clicked:"deactive"}
];
const SidebarContent = ({ logoText, routes }) => {

    // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  React.useEffect(()=>{
    setDevices(devicesData)
  }, [])

  // verifies if routeName is the one active (in browser input)
  // const activeRoute = (routeName) => {
  //   return location.pathname === routeName ? "active" : "";
  // };
  const handleClick = (id)=>{
   const updatedDevices = devices.map((device)=>{
      if (device.id==id){
        if(device.clicked==="deactive"){
          device.clicked="active"
        }
      }
      if (device.id!=id){
        if(device.clicked==="active"){
          device.clicked="deactive"
        }
      }
      return device
    })

    setDevices(updatedDevices)
  }

  // const handleClick = (name)=>{
  //   // console.log(name)
  // //  const updatedDevices = devices.map((device)=>{
  // //     if (device.name===name){
  // //       if(device.clicked==="deactive"){
  // //         device.clicked="active"
  // //         setDevices([...devices,device])
  // //       }
  // //       // device.clicked = "active";
  // //     }
  // //   })
  // }

  const createLinks = (routes) => {
    // Chakra Color Mode
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    
    return devices?.map((prop, key) => {
      // if (prop.redirect) {
      //   return null;
      // }
      // if (prop.category) {
      //   var st = {};
      //   st[prop["state"]] = !state[prop.state];
      //   return (
      //     <div key={prop.name}>
      //       <Text
      //         color={activeColor}
      //         fontWeight="bold"
      //         mb={{
      //           xl: "12px",
      //         }}
      //         mx="auto"
      //         ps={{
      //           sm: "10px",
      //           xl: "16px",
      //         }}
      //         py="12px"
      //       >
      //         {document.documentElement.dir === "rtl"
      //           ? prop.rtlName
      //           : prop.name}
      //       </Text>
      //       {createLinks(prop.views)}
      //     </div>
      //   );
      // }
      // return (
      //   <NavLink to={prop.layout + prop.path} key={prop.name}>
      //     {activeRoute(prop.layout + prop.path) === "active" ? (
      //       <Button
      //         boxSize="initial"
      //         justifyContent="flex-start"
      //         alignItems="center"
      //         bg={activeBg}
      //         mb={{
      //           xl: "12px",
      //         }}
      //         mx={{
      //           xl: "auto",
      //         }}
      //         ps={{
      //           sm: "10px",
      //           xl: "16px",
      //         }}
      //         py="12px"
      //         borderRadius="15px"
      //         _hover="none"
      //         w="100%"
      //         _active={{
      //           bg: "inherit",
      //           transform: "none",
      //           borderColor: "transparent",
      //         }}
      //         _focus={{
      //           boxShadow: "none",
      //         }}
      //       >
      //         <Flex>
      //           {typeof prop.icon === "string" ? (
      //             <Icon>{prop.icon}</Icon>
      //           ) : (
      //             <IconBox
      //               bg="teal.300"
      //               color="white"
      //               h="30px"
      //               w="30px"
      //               me="12px"
      //             >
      //               {prop.icon}
      //             </IconBox>
      //           )}
      //           <Text color={activeColor} my="auto" fontSize="sm">
      //             {document.documentElement.dir === "rtl"
      //               ? prop.rtlName
      //               : prop.name}
      //           </Text>
      //         </Flex>
      //       </Button>
      //     ) : (
      //       <Button
      //         boxSize="initial"
      //         justifyContent="flex-start"
      //         alignItems="center"
      //         bg="transparent"
      //         mb={{
      //           xl: "12px",
      //         }}
      //         mx={{
      //           xl: "auto",
      //         }}
      //         py="12px"
      //         ps={{
      //           sm: "10px",
      //           xl: "16px",
      //         }}
      //         borderRadius="15px"
      //         _hover="none"
      //         w="100%"
      //         _active={{
      //           bg: "inherit",
      //           transform: "none",
      //           borderColor: "transparent",
      //         }}
      //         _focus={{
      //           boxShadow: "none",
      //         }}
      //       >
      //         <Flex>
      //           {typeof prop.icon === "string" ? (
      //             <Icon>{prop.icon}</Icon>
      //           ) : (
      //             <IconBox
      //               bg={inactiveBg}
      //               color="teal.300"
      //               h="30px"
      //               w="30px"
      //               me="12px"
      //             >
      //               {prop.icon}
      //             </IconBox>
      //           )}
      //           <Text color={inactiveColor} my="auto" fontSize="sm">
      //             {document.documentElement.dir === "rtl"
      //               ? prop.rtlName
      //               : prop.name}
      //           </Text>
      //         </Flex>
      //       </Button>
      //     )}
      //   </NavLink>
      // );
      return (
        <Box key={prop.id}>
          {prop.clicked === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              // bg={activeBg}
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="12px"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                
                  <IconBox
                    bg="yellow.300"
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    <Icon as={BsDeviceSsdFill} color="gray.700" cursor="pointer" fontSize={'18'} />
                  </IconBox>
                <Text color={activeColor} my="auto" fontSize="sm">
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button 
              onClick={ ()=>{handleClick(prop.id)}}
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="white"
              mb={{
                xl: "12px",
              }}
              mx={{
                xl: "auto",
              }}
              py="12px"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                
                  <IconBox
                    bg={inactiveBg}
                    color="teal.300"
                    h="30px"
                    w="30px"
                    me="12px"
                  >
                    <Icon as={BsDeviceSsdFill} color="gray.400" cursor="pointer" fontSize={'18'} />
                  </IconBox>
                
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </Box>
      );
    });
  };

    const links = <>{createLinks(routes)}</>;

  return (
    <>
      <Box pt={"25px"} mb="12px">
      <Link
        href={`${process.env.PUBLIC_URL}/#/`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <CreativeTimLogo w="32px" h="32px" me="10px" />
        <Text fontSize="sm" mt="3px">
          {logoText}
        </Text>
      </Link>
      <Separator></Separator>
    </Box>
          <Stack direction="column" mb="40px">
            <Box>{links}</Box>
          </Stack>
          {/* <SidebarHelp /> */}
    </>
  )
}

export default SidebarContent