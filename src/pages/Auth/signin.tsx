import Layout from '@/components/Layout/Layout';
import { auth } from '@/lib/firebase';
import {
  Button,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
  useToast,
  VStack
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function SignIn() {
  const router = useRouter();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      
      toast({
        title: 'Welcome!',
        description: 'Successfully signed in.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      
      router.push('/');
    } catch (error: any) {
      console.error('Sign in error:', error);
      
      toast({
        title: 'Error signing in',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Container maxW="container.sm" py={10}>
        <VStack spacing={8}>
          <Stack
            spacing={8}
            w="full"
            maxW="md"
            bg="whiteAlpha.100"
            backdropFilter="blur(10px)"
            rounded="xl"
            boxShadow="lg"
            p={8}
            textAlign="center"
          >
            <Heading 
              fontSize="2xl"
              bgGradient="linear(to-r, purple.400, pink.400)"
              bgClip="text"
            >
              Welcome to MusicApp
            </Heading>
            
            <Text fontSize="md" color="gray.400">
              Sign in to access your music library
            </Text>

            <Button
              w="full"
              size="lg"
              leftIcon={<FcGoogle />}
              onClick={handleGoogleSignIn}
              isLoading={isLoading}
              loadingText="Signing in..."
              bg="whiteAlpha.200"
              _hover={{
                bg: 'whiteAlpha.300'
              }}
            >
              Continue with Google
            </Button>

            <Divider />

            <Text fontSize="sm" color="gray.500">
              By continuing, you agree to our{' '}
              <Text as="span" color="purple.400" cursor="pointer">
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text as="span" color="purple.400" cursor="pointer">
                Privacy Policy
              </Text>
            </Text>
          </Stack>
        </VStack>
      </Container>
    </Layout>
  );
}