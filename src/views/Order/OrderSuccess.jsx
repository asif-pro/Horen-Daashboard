import React from 'react'
import './OrderSuccess.scss'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import { useColorModeValue } from '@chakra-ui/system'
import CardBody from 'components/Card/CardBody'
import { Button, Flex, Text } from '@chakra-ui/react'
const OrderSuccess = () => {
    const textColor = useColorModeValue("gray.700", "white");
  return (
        <Card p='16px' my={{ sm: "24px", xl: "15px" }} ml={'10px'}>
      <div className='container'>
        <div class="svg-container">    
            <svg class="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                <circle class="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
                <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17"/>
            </svg>
        </div>
        <div className='success_text'>
      <CardHeader p='12px 5px' mb='12px' justifyContent="center">
        <Text fontSize='lg' color={textColor} fontWeight='bold'>
  Thanks For Your Purchase !
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column' alignItems="center">
          <Text fontSize='md' color='gray.500' fontWeight='400' mb='30px'>
            Your Order Has been Placed Successfully
          </Text>
          <Flex align='center' mb='18px'>
          <Button 
                fontSize='15px'
                type='submit'
                bg='yellow.400'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mr={'20px'}
                mt='20px'
                _hover={{
                  bg: "yellow.500",
                }}
                _active={{
                  bg: "yellow.500",
                }}>
                Go To Dashboard
              </Button>
              <Button 
                fontSize='15px'
                type='submit'
                bg='gray.700'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                ml={'20px'}
                mt='20px'
                _hover={{
                  bg: "yellow.500",
                }}
                _active={{
                  bg: "yellow.500",
                }}>
                Go To Orders
              </Button>
          
          </Flex>
        </Flex>
      </CardBody>
        </div>
   </div>
    </Card>
  )
}

export default OrderSuccess