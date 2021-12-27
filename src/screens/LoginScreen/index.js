import React, {useState} from 'react'
import {
  Button,
  HStack,
  VStack,
  Text,
  Link,
  Checkbox,
  Divider,
  Image,
  useColorModeValue,
  IconButton,
  Icon,
  Pressable,
  Center,
  Hidden,
  StatusBar,
  Stack,
  Box,
} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import GoogleIcon from '../../assets/svg/googleIcon'
import FacebookIcon from '../../assets/svg/facebookIcon'
import AppleIcon from '../../assets/svg/appleIcon'
import FloatingLabelInput from '../../components/FloatingLabelInput'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {toggleReguireLogin} from '../../redux/globalStore'
import AddIcon from '../../assets/svg/addIcon'
import {useDispatch} from 'react-redux'
export function SignInForm ({props}) {
  // add next router here
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [pass, setPass] = useState('')
  const [termsCond, setTermsCond] = useState(false)
  const [showPass, setShowPass] = React.useState(false)
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{
        flex: 1,
      }}>
      <VStack
        flex='1'
        px='6'
        py='9'
        bg={'#E5E5E5'}
        space='3'
        justifyContent='space-between'
        borderTopRightRadius={{
          base: '2xl',
          md: 'xl',
        }}
        borderBottomRightRadius={{
          base: '0',
          md: 'xl',
        }}
        borderTopLeftRadius={{
          base: '2xl',
          md: '0',
        }}>
        <VStack space='3'>
          <Text fontSize='lg' fontWeight='500'>
            Login
          </Text>
          <VStack>
            <VStack space='3'>
              <VStack
                space={{
                  base: '7',
                  md: '4',
                }}>
                <FloatingLabelInput
                  isRequired
                  label='Enter Email'
                  labelColor='#9ca3af'
                  labelBGColor={useColorModeValue('#fff', '#fff')}
                  borderRadius='10'
                  defaultValue={text}
                 style={{height:40}}
                 onChangeText={txt => setText(txt)}
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  //   height='40'
                  backgroundColor='#fff'
                />
                <FloatingLabelInput
                  isRequired
                  type={showPass ? '' : 'Verification'}
                  label='Verification'
                  borderRadius='10'
                  labelColor='#9ca3af'
                  labelBGColor={useColorModeValue('#fff', '#1f2937')}
                  defaultValue={pass}
                  onChangeText={txt => setPass(txt)}
                 style={{height:40}}
                 InputRightElement={
                    <Link
                      ml='auto'
                      _text={{
                        fontSize: 'xs',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: '#A8D8FF',
                        paddingRight:5
                      }}>
                      Send Code
                    </Link>
                  }
                  _text={{
                    fontSize: 'sm',
                    fontWeight: 'medium',
                  }}
                  //   borderColor={'coolGray.300'}
                  backgroundColor='#fff'
                />
              </VStack>

                 {/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
                 <Button
                 style={{height:48}}
                mt='5'
                size='md'
                // height='48'
                borderRadius='10'
                _text={{
                  fontWeight: 'medium',
                  color: 'white',
                }}
                bg={text === '' || pass === '' ? '#C8C8C8' : '#A8D8FF'}
                onPress={() => {
                  props.navigation.navigate('OTP')
                }}>
                {text === '' || pass === ''
                  ? 'Login'
                  : 'Login'}
              </Button>
              {/* Closing Link Tag (react/Router) */}
           
           
              <Pressable
                cursor='pointer'
                py='2'
                flex={1}
                onPress={() => setTermsCond(!termsCond)}>
                <Checkbox
                  alignItems='flex-start'
                  mt='5'
                  borderColor='#C8C8C8'
                  checked={termsCond}
                  colorScheme='muted'
                  accessibilityLabel='Remember me'>
                  <Text pl='3' fontWeight='normal' color={'#161616'} style={{fontSize:15}}>
                    I have read and agreed to the following policies:
                    <Text pl='3' fontWeight='normal' color={'#A8D8FF'}>
                      Terms, Privacy Policy, Children Protective Rules
                    </Text>
                  </Text>
                </Checkbox>
              </Pressable>

              <HStack
                mt='5'
                space='2'
                mb={{
                  base: 6,
                  md: 7,
                }}
                alignItems='center'
                justifyContent='center'>
                <Divider w='45%' bg={'#C8C8C8'} />
                <Text fontWeight='medium' color={'coolGray.300'}>
                  or
                </Text>
                <Divider w='45%' bg={'#C8C8C8'} />
              </HStack>
            </VStack>
            <Center>
              <HStack space='4'>
                
                <Pressable>
                  <Icon mb='3' color='#161616' size='lg'>
                    <AppleIcon />
                  </Icon>
                </Pressable>
                <Pressable>
                  <Icon mb='3' color='#161616' size='lg'>
                    <GoogleIcon />
                  </Icon>
                </Pressable>
                <Pressable>
                  <Icon mb='3' color='#161616' size='lg'>
                    <FacebookIcon />
                  </Icon>
                </Pressable>
              </HStack>
            </Center>
          </VStack>
        </VStack>
        <HStack
          mb='4'
          space='1'
          safeAreaBottom
          alignItems='center'
          justifyContent='center'
          mt={{
            base: 'auto',
            md: '8',
          }}>
          {/* Closing Link Tag */}
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  )
}
export default function SignIn (props) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='#E5E5E5'
        barStyle='dark-content'
      />
      <Box safeAreaTop bg={'#E5E5E5'} />
      <Center my='auto' bg={'#E5E5E5'} flex='1'>
        <Stack
          flexDirection={{
            base: 'column',
            md: 'row',
          }}
          w='100%'
          maxW={{
            md: '1016px',
          }}
          flex={{
            base: '1',
            md: 'none',
          }}>
          <Hidden from='md'>
            <VStack px='4' mt='4' mb='5' space='9'>
              <HStack space='2' alignItems='center'>
                <Pressable
                  cursor='pointer'
                  onPress={() => dispatch(toggleReguireLogin())}>
                  <IconButton
                    variant='unstyled'
                    pl='0'
                    onPress={() => {}}
                    icon={
                      <Icon
                        size='10'
                        as={Ionicons}
                        name='ios-chevron-back-outline'
                        color='#6B727C'
                      />
                    }
                  />
                </Pressable>
              </HStack>
            </VStack>
          </Hidden>
          <Hidden till='md'>
            <Center
              flex='1'
              bg='primary.700'
              borderTopLeftRadius={{
                base: '0',
                md: 'xl',
              }}
              borderBottomLeftRadius={{
                base: '0',
                md: 'xl',
              }}></Center>
          </Hidden>
          <SignInForm props={props} />
        </Stack>
      </Center>
    </>
  )
}
