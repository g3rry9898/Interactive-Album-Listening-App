import Login from '@/components/Auth/Login';
import NavigationCards from '@/components/Home/NavigationCards';
import TrendingChart from '@/components/Home/TrendingChart';
import SearchBar from '@/components/Search/SearchBar';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
  
  export default function HomePage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box minH="100vh" bg="gray.900">
        {/* Top Section with Login */}
        <Flex 
          justify="space-between" 
          align="center" 
          p={6}
          borderBottom="1px"
          borderColor="whiteAlpha.200"
        >
          <Button
            onClick={onOpen}
            colorScheme="purple"
            size="md"
            fontWeight="semibold"
          >
            Login / Sign Up
          </Button>
          <SearchBar />
        </Flex>
  
        <Container maxW="container.xl" py={12}>
          {/* Hero Section */}
          <VStack spacing={8} mb={16} textAlign="center">
            <Heading
              size="2xl"
              bgGradient="linear(to-r, purple.400, pink.400)"
              bgClip="text"
            >
              Interactive Album Litsening
            </Heading>
            <Text color="gray.400" fontSize="xl">
              Get the full album expirience and immerse yourself to the story it's telling
            </Text>
          </VStack>
  
          {/* Navigation Cards */}
          <Box mb={16}>
            <Heading size="xl" color="white" mb={8}>
              Featured Albums
            </Heading>
            <NavigationCards />
          </Box>
  
          {/* Trending Section */}
          <Box>
            <Heading size="xl" color="white" mb={8}>
              Top Trending
            </Heading>
            <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
              <TrendingChart />
            </Grid>
          </Box>
        </Container>
  
        {/* Login Modal */}
        <Login isOpen={isOpen} onClose={onClose} />
      </Box>
    );
  }


