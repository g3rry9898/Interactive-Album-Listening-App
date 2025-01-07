import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Skeleton // Add this import
    ,






    Text,
    VStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react'; // Add this import
  
const featuredAlbums = [
    {
      title: 'Chromakopia',
      artist: 'Tyler The Creator',
      // Updated with direct image URL
      cover: 'https://news.artnet.com/app/news-upload/2024/10/tyler-creator-chromakopia-album-1024x1024.jpg',
      path: '/albums/chromakopia',
      genre: 'Hip-Hop'
    },
    {
      title: 'Death of Slim Shady',
      artist: 'Eminem',
      // Eminem album cover
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Eminem_-_The_Death_of_Slim_Shady_%28Coup_de_Gr%C3%A2ce%29.png',
      path: '/albums/death-of-slim-shady',
      genre: 'Hip-Hop'
    },
    {
      title: 'GNX',
      artist: 'Artist Name',
      // Placeholder image for GNX
      cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/Kendrick_Lamar_-_GNX.png',
      path: '/albums/gnx',
      genre: 'Alternative'
    },
    {
      title: "We Don't Trust You",
      artist: 'Metro Boomin',
      // Metro Boomin album cover
      cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Future_and_Metro_Boomin_-_We_Don%27t_Trust_You.png/220px-Future_and_Metro_Boomin_-_We_Don%27t_Trust_You.png',
      path: '/albums/we-dont-trust-you',
      genre: 'Hip-Hop'
    }
  ];
  
  const genres = ['All', 'Hip-Hop', 'Electronic', 'Alternative', 'Pop'];
  
  export default function DiscoverPage() {
    const router = useRouter();
    const [selectedGenre, setSelectedGenre] = useState('All');
  
    const filteredAlbums = selectedGenre === 'All' 
      ? featuredAlbums 
      : featuredAlbums.filter(album => album.genre === selectedGenre);
  
    return (
      <Container maxW="container.xl" py={12}>
        <VStack spacing={8} align="stretch">
          <Heading color="white">Discover</Heading>
  
          {/* Genre Filter */}
          <Flex gap={4} overflowX="auto" pb={4}>
            {genres.map((genre) => (
              <Button
                key={genre}
                colorScheme={selectedGenre === genre ? 'purple' : 'gray'}
                variant={selectedGenre === genre ? 'solid' : 'outline'}
                onClick={() => setSelectedGenre(genre)}
                minW="fit-content"
              >
                {genre}
              </Button>
            ))}
          </Flex>
  
          {/* Albums Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {filteredAlbums.map((album) => (
              <VStack
              key={album.title}
              spacing={4}
              p={4}
              bg="whiteAlpha.100"
              borderRadius="xl"
              transition="all 0.3s"
              _hover={{
                transform: 'translateY(-4px)',
                bg: 'whiteAlpha.200'
              }}
              cursor="pointer"
              onClick={() => router.push(album.path)}
            >
              <Box
                position="relative"
                w="full"
                h="200px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  src={album.cover}
                  alt={album.title}
                  w="full"
                  h="full"
                  objectFit="cover"
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.05)' }}
                  fallback={
                    <Skeleton
                      w="full"
                      h="full"
                      startColor="whiteAlpha.100"
                      endColor="whiteAlpha.300"
                    />
                  }
                  onError={(e) => {
                    // Fallback image if the main image fails to load
                    e.target.src = 'https://via.placeholder.com/400x400?text=Album+Cover';
                  }}
                />
              </Box>
              <Text
                color="white"
                fontSize="lg"
                fontWeight="bold"
                textAlign="center"
              >
                {album.title}
              </Text>
              <Text color="gray.400">
                {album.artist}
              </Text>
              <Text
                color="purple.400"
                fontSize="sm"
              >
                {album.genre}
              </Text>
            </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    );
  }