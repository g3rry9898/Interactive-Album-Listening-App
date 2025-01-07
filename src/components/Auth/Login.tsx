import {
    Button,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useToast,
    VStack
} from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
  
  interface LoginProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export default function Login({ isOpen, onClose }: LoginProps) {
    const toast = useToast();
  
    const handleGoogleSignIn = () => {
      toast({
        title: "Google Sign-In",
        description: "Coming soon!",
        status: "info",
        duration: 3000,
      });
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
                w="full"
                leftIcon={<Icon as={FaGoogle} />}
                onClick={handleGoogleSignIn}
                colorScheme="red"
              >
                Continue with Google
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }