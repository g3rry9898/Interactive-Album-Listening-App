import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface TrendingAlbum {
  id: string;
  title: string;
  artist: string;
  cover: string;
}

const mockData: TrendingAlbum[] = [
  {
    id: '1',
    title: 'The Death Of Slim Shady',
    artist: 'Eminem',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '2',
    title: 'GNX',
    artist: 'Kendrick Lamar',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '3',
    title: 'Chromakopia',
    artist: 'Tyler the creator',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  },
  {
    id: '4',
    title: 'I AM MUSIC',
    artist: 'Playboi cati',
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
  }
];

export default function TrendingChart() {
  const [trendingAlbums] = useState<TrendingAlbum[]>(mockData);
  

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
          </Box>
          
          
        </Flex>
      ))}
    </Box>
  );
}