import {
    Box,
    Divider,
    Flex,
    Icon,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
    FaCompass,
    FaHeart,
    FaHistory,
    FaHome,
    FaList,
    FaMusic,
    FaPlus,
    FaSearch,
} from 'react-icons/fa';
  
  const menuItems = [
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'Search', icon: FaSearch, path: '/search' },
    { name: 'Discover', icon: FaCompass, path: '/discover' },
    { name: 'Library', icon: FaMusic, path: '/library' },
  ];
  
  const playlistItems = [
    { name: 'Liked Songs', icon: FaHeart, path: '/liked' },
    { name: 'Recent', icon: FaHistory, path: '/recent' },
    { name: 'Playlists', icon: FaList, path: '/playlists' },
  ];
  
  export default function Sidebar() {
    const router = useRouter();
  
    return (
      <Box
        position="fixed"
        left={0}
        top="60px"
        h="calc(100vh - 60px)"
        w="240px"
        bg="gray.800"
        borderRight="1px"
        borderColor="whiteAlpha.200"
        py={8}
        zIndex={50}
      >
        <VStack spacing={2} align="stretch">
          {menuItems.map((item) => (
            <Flex
              key={item.name}
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              role="group"
              transition="all 0.2s"
              onClick={() => router.push(item.path)}
              bg={router.pathname === item.path ? 'whiteAlpha.100' : 'transparent'}
              _hover={{
                bg: 'whiteAlpha.100',
              }}
            >
              <Icon
                as={item.icon}
                w={5}
                h={5}
                mr={4}
                color={router.pathname === item.path ? 'purple.500' : 'gray.400'}
                _groupHover={{ color: 'purple.500' }}
              />
              <Text
                color={router.pathname === item.path ? 'white' : 'gray.400'}
                _groupHover={{ color: 'white' }}
              >
                {item.name}
              </Text>
            </Flex>
          ))}
  
          <Divider my={4} borderColor="whiteAlpha.100" />
  
          <Flex
            align="center"
            px={6}
            py={3}
            cursor="pointer"
            _hover={{ color: 'white' }}
            color="gray.400"
          >
            <Icon as={FaPlus} w={5} h={5} mr={4} />
            <Text>Create Playlist</Text>
          </Flex>
  
          {playlistItems.map((item) => (
            <Flex
              key={item.name}
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              role="group"
              transition="all 0.2s"
              onClick={() => router.push(item.path)}
              bg={router.pathname === item.path ? 'whiteAlpha.100' : 'transparent'}
              _hover={{
                bg: 'whiteAlpha.100',
              }}
            >
              <Icon
                as={item.icon}
                w={5}
                h={5}
                mr={4}
                color={router.pathname === item.path ? 'purple.500' : 'gray.400'}
                _groupHover={{ color: 'purple.500' }}
              />
              <Text
                color={router.pathname === item.path ? 'white' : 'gray.400'}
                _groupHover={{ color: 'white' }}
              >
                {item.name}
              </Text>
            </Flex>
          ))}
        </VStack>
      </Box>
    );
  }