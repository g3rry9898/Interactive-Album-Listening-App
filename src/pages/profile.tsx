import Layout from '@/components/Layout/Layout';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/pages/Auth/ProtectedRoute';
import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    Text,
    useToast,
    VStack,
} from '@chakra-ui/react';

export default function Profile() {
  const { user, signOut } = useAuth();
  const toast = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: 'Signed out successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error signing out',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <Container maxW="container.md" py={10}>
          <VStack spacing={8} align="center">
            <Avatar
              size="2xl"
              src={user?.photoURL || undefined}
              name={user?.displayName || 'User'}
            />
            <Box textAlign="center">
              <Heading size="lg" mb={2}>
                {user?.displayName}
              </Heading>
              <Text color="gray.400">{user?.email}</Text>
            </Box>
            <Button colorScheme="purple" onClick={handleSignOut}>
              Sign Out
            </Button>
          </VStack>
        </Container>
      </Layout>
    </ProtectedRoute>
  );
}