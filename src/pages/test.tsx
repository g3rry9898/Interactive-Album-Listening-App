import { auth } from '@/lib/firebase';
import { Box, Container, Text } from '@chakra-ui/react';

export default function TestPage() {
  const config = {
    apiKey: auth.app.options.apiKey,
    authDomain: auth.app.options.authDomain,
    projectId: auth.app.options.projectId
  };

  return (
    <Container mt={10}>
      <Box>
        <Text>Firebase Configuration:</Text>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </Box>
    </Container>
  );
}



