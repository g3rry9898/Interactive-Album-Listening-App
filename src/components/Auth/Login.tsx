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
import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Login({ isOpen, onClose }: LoginProps) {
  const toast = useToast();
  const clientId = '423440158487-sqbmb1fuqt4576l0hkhco1ovle5fldmo.apps.googleusercontent.com';


  const handleGoogleSuccess = (response: any) => {
    toast({
      title: 'Login Successful',
      description: `Welcome, ${response.profileObj.name}!`,
      status: 'success',
      duration: 3000,
    });
    // Handle successful login, e.g., save user details or redirect
    console.log('User Info:', response.profileObj);
    onClose(); // Close the modal after successful login
  };

  const handleGoogleFailure = (error: any) => {
    toast({
      title: 'Login Failed',
      description: 'An error occurred during Google Sign-In. Please try again.',
      status: 'error',
      duration: 3000,
    });
    console.error('Error:', error);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg="gray.900">
        <ModalHeader color="white">Login / Sign Up</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <Button
                  w="full"
                  leftIcon={<Icon as={FaGoogle} />}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  colorScheme="red"
                >
                  Continue with Google
                </Button>
              )}
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              cookiePolicy={'single_host_origin'}
            />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
