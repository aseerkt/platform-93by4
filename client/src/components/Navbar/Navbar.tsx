import {
  Flex,
  Text,
  Button,
  useToast,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { theme } from '../../themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useAuth } from '../../context/AuthContext'
import { logout } from './../../services/axiosService'
import { CgProfile, CgLogOut } from 'react-icons/cg'
import Logo from '../../assests/svgs/neogcamp.svg'

export function Navbar() {
  const { authState } = useAuth()
  const toast = useToast()
  const router = useRouter()

  const [loginStatus, setLoginStatus] = useState(
    authState?.user?.firstName || 'Login'
  )

  const authRedirect = () => {
    console.log(loginStatus)
    return loginStatus === 'Login' ? router.push('/auth/login') : undefined
  }
  useEffect(() => {
    setLoginStatus(authState?.user?.firstName || 'Login')
  }, [authState])

  const onHandleLogout = async () => {
    await logout()
      .then((res) => {
        toast({
          title: "You've been successfully logged out.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        setLoginStatus('Login')
        localStorage.removeItem('neogSubmission')
        router.push('/')
        Router.reload()
      })

      .catch((err) => {
        toast({
          title: 'There was an error while logging you out. Please try again.',
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      })
  }
  return (
    <Flex
      background={theme.colors.black['800']}
      width={'100%'}
      maxHeight={'60px'}
      minHeight={'60px'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex
        width={'100%'}
        background={theme.colors.black['800']}
        height={'100%'}
        alignItems={'center'}
        maxWidth={'1100px'}
        padding={'0 1rem'}
        justifyContent={'space-between'}
      >
        <Link href="/">
          <Image src={Logo} alt="neog logo" />
        </Link>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              as={Button}
              aria-label="Options"
              leftIcon={<CgProfile />}
              variant="link"
              p={2}
              size="ld"
              onClick={authRedirect}
            >
              <Flex>
                <Text
                  fontSize="md"
                  pl="2"
                  color={theme.colors.white}
                  fontWeight="600"
                  textTransform="capitalize"
                >
                  {loginStatus}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList bg="black.800" hidden={loginStatus === 'Login' && true}>
              <MenuItem icon={<CgLogOut />} onClick={onHandleLogout}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  )
}
