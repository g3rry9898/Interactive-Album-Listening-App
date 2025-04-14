import { Box, Container, IconButton, VStack, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaHome, FaMusic, FaSearch, FaUser } from 'react-icons/fa';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('home');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleTabClick = (tab: string, path: string) => {
    setActiveTab(tab);
    router.push(path);
  };

  return (
    <Box minH="100vh" pb="60px">
      <Container maxW="container.sm" px={4} py={4}>
        {children}
      </Container>

      {/* Mobile Bottom Navigation */}
      <Box
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        bg={bgColor}
        borderTop="1px solid"
        borderColor={borderColor}
        zIndex={1000}
        display={{ base: 'flex', md: 'none' }}
      >
        <VStack w="100%" spacing={0}>
          <Box
            w="100%"
            h="1px"
            bg="linear-gradient(to right, transparent, purple.500, transparent)"
            opacity={0.5}
          />
          <Box
            display="flex"
            justifyContent="space-around"
            w="100%"
            py={2}
            px={4}
          >
            <IconButton
              aria-label="Home"
              icon={<FaHome />}
              variant="ghost"
              colorScheme={activeTab === 'home' ? 'purple' : 'gray'}
              onClick={() => handleTabClick('home', '/')}
              size="lg"
            />
            <IconButton
              aria-label="Discover"
              icon={<FaSearch />}
              variant="ghost"
              colorScheme={activeTab === 'discover' ? 'purple' : 'gray'}
              onClick={() => handleTabClick('discover', '/discover')}
              size="lg"
            />
            <IconButton
              aria-label="Library"
              icon={<FaMusic />}
              variant="ghost"
              colorScheme={activeTab === 'library' ? 'purple' : 'gray'}
              onClick={() => handleTabClick('library', '/library')}
              size="lg"
            />
            <IconButton
              aria-label="Profile"
              icon={<FaUser />}
              variant="ghost"
              colorScheme={activeTab === 'profile' ? 'purple' : 'gray'}
              onClick={() => handleTabClick('profile', '/profile')}
              size="lg"
            />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
} 