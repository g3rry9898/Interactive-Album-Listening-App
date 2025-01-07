import {
    Box,
    Button,
    Container,
    Grid,
    Heading,
    HStack,
    Image,
    Text,
    VStack
} from '@chakra-ui/react';
import { FaHeart, FaPlay, FaShare } from 'react-icons/fa';

interface Track {
  id: string;
  title: string;
  duration: string;
  isExplicit: boolean;
}

// Mock data structure (using only publicly available info)
const albumData = {
  id: "death-of-slim-shady",
  title: "Death of Slim Shady",
  artist: "Eminem",
  releaseDate: "2024",
  coverImage: "/images/albums/slim-shady-cover.jpg",
  backgroundColor: "gray.900",
  accentColor: "red.500",
  description: "The anticipated album exploring themes of alter egos and artistic evolution.",
  tracks: [
    {
      id: "1",
      title: "Track 1",
      duration: "3:45",
      isExplicit: true
    },
    // Add more track placeholders
  ]
};

export default function AlbumPage() {
  return (
    <Box 
      minH="100vh" 
      bg={albumData.backgroundColor}
      position="relative"
    >
      {/* Hero Section */}
      <Box 
        position="relative" 
        h="60vh"
        overflow="hidden"
      >
        <Image
          src={albumData.coverImage}
          alt={albumData.title}
          objectFit="cover"
          w="full"
          h="full"
          filter="blur(100px) brightness(0.6)"
          position="absolute"
          top={0}
        />
        
        <Container maxW="container.xl" position="relative" h="full">
          <Grid
            templateColumns={{ base: "1fr", md: "auto 1fr" }}
            gap={8}
            alignItems="center"
            h="full"
          >
            <Image
              src={albumData.coverImage}
              alt={albumData.title}
              boxSize={{ base: "200px", md: "300px" }}
              objectFit="cover"
              borderRadius="xl"
              shadow="2xl"
            />
            
            <VStack align="start" spacing={4}>
              <Heading size="2xl" color="white">
                {albumData.title}
              </Heading>
              <Text fontSize="xl" color="gray.300">
                {albumData.artist}
              </Text>
              <Text color="gray.400">
                Released: {albumData.releaseDate}
              </Text>
              
              <HStack spacing={4} mt={4}>
                <Button
                  leftIcon={<FaPlay />}
                  colorScheme="red"
                  size="lg"
                >
                  Play
                </Button>
                <Button
                  leftIcon={<FaHeart />}
                  variant="outline"
                  colorScheme="red"
                  size="lg"
                >
                  Save
                </Button>
                <Button
                  leftIcon={<FaShare />}
                  variant="ghost"
                  colorScheme="red"
                  size="lg"
                >
                  Share
                </Button>
              </HStack>
            </VStack>
          </Grid>
        </Container>
      </Box>

      {/* Album Content */}
      <Container maxW="container.xl" py={12}>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={12}>
          {/* Track List */}
          <Box>
            <Heading size="lg" color="white" mb={6}>
              Tracks
            </Heading>
            <VStack spacing={4} align="stretch">
              {albumData.tracks.map((track, index) => (
                <HStack
                  key={track.id}
                  p={4}
                  bg="whiteAlpha.50"
                  borderRadius="lg"
                  transition="all 0.2s"
                  _hover={{
                    bg: "whiteAlpha.100",
                    transform: "translateX(8px)"
                  }}
                  cursor="pointer"
                >
                  <Text color="gray.500" w="40px">
                    {index + 1}
                  </Text>
                  <Text color="white" flex={1}>
                    {track.title}
                    {track.isExplicit && (
                      <Box
                        as="span"
                        ml={2}
                        px={1}
                        bg="gray.700"
                        borderRadius="sm"
                        fontSize="xs"
                      >
                        E
                      </Box>
                    )}
                  </Text>
                  <Text color="gray.500">
                    {track.duration}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Album Info */}
          <Box>
            <Heading size="lg" color="white" mb={6}>
              About
            </Heading>
            <Text color="gray.300" lineHeight="tall">
              {albumData.description}
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
} 