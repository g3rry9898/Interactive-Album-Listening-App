import { ChakraProvider } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;