import { auth } from '@/lib/firebase';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useToast,
    VStack
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginProps) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
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
      
      onClose();
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
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg="gray.900">
        <ModalHeader color="white">Login / Sign Up</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <Button
              onClick={handleGoogleSignIn}
              isLoading={loading}
              loadingText="Signing in..."
              leftIcon={<FcGoogle />}
              colorScheme="blue"
              size="lg"
              width="full"
            >
              Sign in with Google
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
