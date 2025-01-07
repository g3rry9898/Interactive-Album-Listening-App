import { Box, Button, Flex, IconButton, Image, useDisclosure } from '@chakra-ui/react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import Login from '../Auth/Login';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        h="60px"
        bg="gray.800"
        borderBottom="1px"
        borderColor="whiteAlpha.200"
        zIndex={100}
      >
        <Flex h="full" align="center" px={6}>
          {/* Left side with Logo and Login */}
          <Flex align="center" gap={4}>
            <Image
              src="/logo.png"
              alt="Logo"
              h="30px"
            />
            <Button
              onClick={onOpen}
              colorScheme="purple"
              size="sm"
              fontWeight="semibold"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              transition="all 0.2s"
            >
              Login
            </Button>
          </Flex>

          {/* Right side icons - pushed to the right using margin-left: auto */}
          <Flex align="center" gap={4} ml="auto">
            <IconButton
              aria-label="Notifications"
              icon={<FaBell />}
              variant="ghost"
              color="gray.400"
              _hover={{ color: 'white' }}
            />
            <IconButton
              aria-label="Profile"
              icon={<FaUserCircle />}
              variant="ghost"
              color="gray.400"
              _hover={{ color: 'white' }}
            />
          </Flex>
        </Flex>
      </Box>

      {/* Login Modal */}
      {isOpen && <Login isOpen={isOpen} onClose={onClose} />}
    </>
  );
}