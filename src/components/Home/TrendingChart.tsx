import { Box, Flex, Image, Progress, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface TrendingAlbum {
  id: string;
  title: string;
  artist: string;
  streams: number;
  cover: string;
}

const mockData: TrendingAlbum[] = [
  {
    id: '1',
    title: 'Midnight Memories',
    artist: 'The Weeknd',
    streams: 1500000,
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '2',
    title: 'Summer Nights',
    artist: 'Taylor Swift',
    streams: 1200000,
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '3',
    title: 'Electric Dreams',
    artist: 'Drake',
    streams: 980000,
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '4',
    title: 'Neon Lights',
    artist: 'Ed Sheeran',
    streams: 850000,
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

export default function TrendingChart() {
  const [trendingAlbums] = useState<TrendingAlbum[]>(mockData);
  const maxStreams = Math.max(...trendingAlbums.map(album => album.streams));

  return (
    <Box 
      borderRadius="xl" 
      bg="whiteAlpha.50" 
      p={6}
      backdropFilter="blur(10px)"
    >
      {trendingAlbums.map((album, index) => (
        <Flex 
          key={album.id}
          align="center"
          mb={index !== trendingAlbums.length - 1 ? 6 : 0}
          p={4}
          bg="whiteAlpha.100"
          borderRadius="lg"
          transition="all 0.3s"
          _hover={{ 
            bg: 'whiteAlpha.200',
            transform: 'translateX(8px)'
          }}
          cursor="pointer"
        >
          <Text 
            fontSize="lg" 
            fontWeight="bold" 
            color="gray.500" 
            mr={4}
            minW="24px"
          >
            {index + 1}
          </Text>
          
          <Image
            src={album.cover}
            alt={album.title}
            boxSize="60px"
            objectFit="cover"
            borderRadius="md"
            mr={4}
          />
          
          <Box flex="1">
            <Text fontWeight="semibold" fontSize="lg">
              {album.title}
            </Text>
            <Text fontSize="sm" color="gray.400">
              {album.artist}
            </Text>
            <Progress
              value={(album.streams / maxStreams) * 100}
              size="sm"
              colorScheme="purple"
              mt={2}
              borderRadius="full"
            />
          </Box>
          
          <Text 
            fontSize="sm" 
            color="gray.400"
            ml={4}
            minW="100px"
            textAlign="right"
          >
            {new Intl.NumberFormat().format(album.streams)} streams
          </Text>
        </Flex>
      ))}
    </Box>
  );
}