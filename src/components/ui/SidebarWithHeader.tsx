'use client'

import { Box, BoxProps, CloseButton, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Flex, FlexProps, HStack, Icon, IconButton, Text, useDisclosure,
  Menu,
  Button,
  Avatar,
  VStack} from "@chakra-ui/react"
import { ReactNode } from "react"
import {
  FiStar,
  FiSettings,
  FiGrid,
  FiMenu,
  FiBell,
} from 'react-icons/fi'
import {
    FaCartPlus,
    FaChartBar,
    FaCoins,
    FaDollarSign,
    FaFileAlt,
    FaShoppingBag,
    FaTruck,
    FaUserFriends,
} from 'react-icons/fa'
import { IconType } from "react-icons/lib"
import { useColorModeValue } from "./color-mode"
import { usePathname, useRouter } from "next/navigation";

interface LinkItemProps {
  name: string
  icon: IconType
  href?: string
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactNode
  href?: string
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

interface SidebarWithHeaderProps {
  children: ReactNode
  title?: string
  onLogout?: () => void
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiGrid, href: '/home' },
  { name: 'Sales', icon: FaDollarSign, href: '/sales' },
  { name: 'Purchase', icon: FaShoppingBag, href: '/purchase' },
  { name: 'Finance', icon: FaCoins, href: '/finance' },
  { name: 'Warehouse', icon: FaTruck, href: '/warehouse' },
  { name: 'HR', icon: FaUserFriends, href: '/hr' },
  { name: 'Analytics', icon: FaChartBar, href: '/analytics' },
  { name: 'Document', icon: FaFileAlt, href: '/document' },
  { name: 'Settings', icon: FiSettings, href: '/settings' },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    const pathname = usePathname(); 

    return(
        <Box
            transition="3s ease"
            bg={useColorModeValue('white','gray.900')} //ga tau warna fixnya apa wakakkaa
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between"> 
                <Text fontSize="1xl" fontWeight="bold">ERP Systems</Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>

            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} href={link.href}>
                {link.name}
                </NavItem>
            ))}

        </Box>
    )
}

const NavItem = ({ icon, children, href, ...rest }: NavItemProps) => {
    const router = useRouter();

    return(
        <Box 
            as="a" 
            // ref="#"
            onClick={() => {
                if (href) router.push(href);
            }}
            _focus={{ boxShadow: 'none' }} 
            style={{ textDecoration: 'none' }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                        color: 'white',
                        }}
                        as={icon}
                    />
                    )}
                {children}
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return(
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 1, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}
        >
            <IconButton display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu">
                    <FiMenu/>
            </IconButton>
            <Text display={{ base: 'flex', md: 'none' }} fontSize="1xl" fontWeight="bold">
                ERP Systems
            </Text>

            <HStack textSpacingTrim={{base: '0', md: '6'}}>
                <IconButton size="lg" variant="ghost" aria-label="open menu">
                    <FiBell/>
                </IconButton>
                <Flex alignItems="center">

                    {/* Menu ga jelas error */}
                    <HStack>
                        <VStack
                            display={{base: 'none', md: 'flex'}}
                            alignItems="flex-start"
                            wordSpacing="1px"
                            ml="2"
                        >
                            <Text fontSize="sm">Kevin Gabriel</Text>
                        </VStack>
                    </HStack>
                    
                </Flex>
            </HStack>
        </Flex>
    )
}

const SidebarWithHeader = ({ children, title = 'ERP Systems', onLogout }: SidebarWithHeaderProps) => {
  const { open, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} width="100vw">
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer.Root open={open} placement={"start"} size="full" > 
            <Drawer.Content>
                <SidebarContent onClose={onClose} />
            </Drawer.Content>
        </Drawer.Root>

        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
            {children}
        </Box>
    </Box>
  )
}

export default SidebarWithHeader