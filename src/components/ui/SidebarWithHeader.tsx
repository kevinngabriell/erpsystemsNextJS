'use client'

import { Box, BoxProps, CloseButton, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Flex, FlexProps, HStack, Icon, IconButton, Text, useDisclosure, 
  Menu} from "@chakra-ui/react"
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

interface LinkItemProps {
  name: string
  icon: IconType
  href?: string
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactNode
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
  { name: 'Sales', icon: FaDollarSign, href: '/trending' },
  { name: 'Purchase', icon: FaShoppingBag, href: '/explore' },
  { name: 'Finance', icon: FaCoins, href: '/favourites' },
  { name: 'Warehouse', icon: FaTruck, href: '/settings' },
  { name: 'HR', icon: FaUserFriends, href: '/favourites' },
  { name: 'Analytics', icon: FaChartBar, href: '/settings' },
  { name: 'Document', icon: FaFileAlt, href: '/favourites' },
  { name: 'Settings', icon: FiSettings, href: '/settings' },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return(
        <Box
            borderRight="1px"
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
                <NavItem key={link.name} icon={link.icon}>
                {link.name}
                </NavItem>
            ))}

        </Box>
    )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return(
        <Box as="a" _focus={{ boxShadow: 'none' }} style={{ textDecoration: 'none' }}>
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
                <Icon mr="4" fontSize="16" as={icon} _groupHover={{ color: 'white' }} />
                {children}
            </Flex>
        </Box>
    )
}

const MobileNav = ({ onOpen }: MobileProps) => {
    return(
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            borderBottomWidth="1px"
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
        >
            {/* <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
            /> */}
            <IconButton display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu">
                    <FiMenu/>
            </IconButton>
            <Text display={{ base: 'flex', md: 'none' }} fontSize="1xl" fontWeight="bold">
                ERP Systems
            </Text>

            <HStack >
                <IconButton size="lg" variant="ghost" aria-label="open menu">
                    <FiBell/>
                </IconButton>
                <Flex alignItems="center">
                    
                </Flex>
            </HStack>
        </Flex>
    )
}

const SidebarWithHeader = ({ children, title = 'ERP Systems', onLogout }: SidebarWithHeaderProps) => {
  const { open, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer.Root open={open}> 
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