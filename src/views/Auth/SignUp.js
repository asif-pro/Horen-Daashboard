// Chakra imports
import { register, profile, gauthRegister } from "Services/userServices";
import { createCompany } from "Services/companyServices";

import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useHistory } from "react-router-dom";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
// import { register } from "Services/userServices";
import axios from "axios";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function SignUp() {
  const apiUrl = "https://api.cloudinary.com/v1_1/dftfcxnxd";
  const titleColor = useColorModeValue("yellow.500", "yellow.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  // const bgIcons = useColorModeValue("yellow.400", "rgba(255, 255, 255, 0.5)");
  const history = useHistory()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [profilePic, setProfilePic] = React.useState('')
  const [errorMsg, setErrorMsg] = React.useState(false)
  const [passwordErrorMsg, setPasswordErrorMsg] = React.useState(false)
  const [requiredFields, setRequiredFields] = React.useState(false)
  const [corporateAccount, setCorporateAccount] = React.useState(false);
  const [companyName, setCompanyName] = React.useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleType = (e) => {
    setCorporateAccount(!corporateAccount)
    // if (companyName){
    //   console.log('yes')
    // }
    // if (!companyName){
    //   console.log('no')
    // }
    // console.log(corporateAccount)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handlePassword = (e) => {
    if((e.target.value).length>4){setPassword(e.target.value);setPasswordErrorMsg(false)}
    if((e.target.value).length<4){setPasswordErrorMsg(true)}
    
  }
  const handleImage = (e) => {
    setProfilePic(e.target.files[0])
  }
  const handleCompanyName = (e) => {
    // console.log(e.target.value)
    setCompanyName(e.target.value)
  }

  const validateForm = () => {
    if ( name !== "" && email !== "" && phone !== "" && profilePic !== ""  && (!passwordErrorMsg)) {
      return true;
    } else {
      return false;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(!errorMsg && !passwordErrorMsg){
      try{
        const formData = new FormData();
        formData.append("file", profilePic);
        formData.append("upload_preset", "horen123");
        formData.append("cloud_name", "dftfcxnxd");
        const res = await axios.post(`${apiUrl}/image/upload`, formData);   
        // console.log(res.data.url)
        if(corporateAccount){
           register({
            name,
            email,
            phone,
            type:'corporate',
            password,
            profilePic:res.data.url
          }).then((res)=>{
            createCompany(companyName, res.userId )
          })

        }
        if(!corporateAccount){
          await register({
            name,
            email,
            phone,
            password,
            profilePic:res.data.url
          })
        }
        setErrorMsg(false)
        history.push('/auth/signin')
        
      }
      catch(err){
        console.log(err)
      }
    }
    else{
      setErrorMsg(true)
    }

  }

  React.useEffect(() => {
    const validation = validateForm()
    // console.log(validation)
    if (validation) setRequiredFields(true);
    if (!validation) setRequiredFields(false);
  }, [name, email, phone, password, profilePic]);
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        borderRadius={{ md: "15px" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgImage={BgSignUp}
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}></Box>
      {/* <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Welcome!
        </Text>
        <Text
          fontSize='md'
          color='white'
          fontWeight='normal'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "30%" }}>
            Please Sign your self up to join Horenmaare
        </Text>
      </Flex> */}
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Fillup the Form
          </Text>
          <HStack spacing='15px' justify='center' mb='22px'>
            {/* <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaFacebook}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaApple}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex> */}
            {/* <div>
        <GoogleOAuthProvider clientId="195127431392-am7f136teict4g6hn03qi09qpnre74at.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              //   console.log(credentialResponse);
              const token = credentialResponse.credential;
              const decode = jwt_decode(token);
              // console.log ('checking goath',decode)
              if (decode.email_verified) {
                try{
                  // check here if the user already exists, usign the mail
                  setEmail(decode.email);
                  setName(decode.name);
                  setProfilePic(decode.picture);

                  
                  gauthRegister({
                      name:decode.name,
                      email:decode.email,
                      profilePic:decode.picture
                      }).then((response)=>{
                        if(response.message=='User already exists'){
                          if(response.userInfo.type=='individual'){
                            localStorage.setItem('userType', response.userInfo.type)
                            localStorage.setItem('userId', response.userInfo._id)
                            localStorage.setItem('accessToken', response.accessToken)
                            history.push('/admin/user/dashboard')
                          }
                          if(response.userInfo.type=='corporate'){
                            localStorage.setItem('userType', response.userInfo.type)
                            localStorage.setItem('userId', response.userInfo._id)
                            localStorage.setItem('accessToken', response.accessToken)
                            // history.push('/auth/signup') send to company dashbord
                            
                          }
                        }
                          if(response.type=='individual'){
                            localStorage.setItem('userType', response.type)
                            localStorage.setItem('userId', response.userId)
                            localStorage.setItem('accessToken', response.accessToken)
                            history.push('/admin/user/dashboard')
                          }
                          if(response.type=='corporate'){
                            localStorage.setItem('userType', response.type)
                            localStorage.setItem('userId', response.userId)
                            localStorage.setItem('accessToken', response.accessToken)
                        // history.push('/auth/signin') send to corporate dashboard
                          }
                      })
                      setErrorMsg(false)
                  
                }
                catch(err){
                  console.log(err)
              
            }
          }
              // do login in with data
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            // width={width}
            // border={width}
            // type={'icon'}
          />
        </GoogleOAuthProvider>
      </div> */}
            {/* <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='15px'
              border='1px solid lightgray'
              cursor='pointer'
              transition='all .25s ease'
              _hover={{ filter: "brightness(120%)", bg: bgIcons }}>
              <Link href='#'>
                <Icon
                  as={FaGoogle}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex> */}
          </HStack>
          {/* <Text
            fontSize='lg'
            color='gray.700'
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            or
          </Text> */}
          { errorMsg && <Stack spacing={3}>
              <Alert status='error'>
                <AlertIcon/>
                All the input fields are require
              </Alert>
            </Stack>}
            { passwordErrorMsg && <Stack spacing={3}>
              <Alert status='error'>
                <AlertIcon/>
                Password Must be at least 5 characters long
              </Alert>
            </Stack>}
          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Name
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Your full name'
              mb='24px'
              size='lg'
              onChange={handleName}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Email
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='email'
              placeholder='Your email address'
              mb='24px'
              size='lg'
              onChange={handleEmail}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Phone
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='number'
              placeholder='Your Phone Number'
              mb='24px'
              size='lg'
              onChange={handlePhone}
            />
             <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Password
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='password'
              placeholder='Your password'
              mb='24px'
              size='lg'
              onChange={handlePassword}
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>Upload Image</FormLabel>
            <Input type='file' name='emp_image' onChange={handleImage} />
            <FormControl display='flex' alignItems='center' mb='24px' mt='25px'>
              <Switch id='remember-login' colorScheme='yellow' me='10px' onChange={handleType}/>
              <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                Set this as a Corporate account
              </FormLabel>
            </FormControl>
            {corporateAccount && <>
             <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Company Name
            </FormLabel>
            <Input
              onChange={handleCompanyName}
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Name of your company'
              mb='24px'
              size='lg'
            />
            </>}
            <Button 
              onClick={handleSubmit}
              disabled={!requiredFields}
              type='submit'
              bg='yellow.400'
              fontSize='15px'
              color='gray.700'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "yellow.500",
              }}
              _active={{
                bg: "yellow.500",
              }}>
              SIGN UP
            </Button>
          </FormControl>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              Already have an account?
              <NavLink
                color={titleColor}
                as='span'
                ms='5px'
                href='#'
                fontWeight='bold'
                to="/auth/signin">
                Sign In
              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
