import { Box, Flex } from '@chakra-ui/react';
import MusicPlayer from '../Player/MusicPlayer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box minH="100vh" bg="gray.900">
      <Navbar />
      <Flex>
        <Sidebar />
        <Box 
          as="main" 
          flex="1" 
          ml="240px" // Width of sidebar
          mt="60px"  // Height of navbar
          pb="100px" // Space for music player
        >
          {children}
        </Box>
      </Flex>
      <MusicPlayer />
    </Box>
  );
}