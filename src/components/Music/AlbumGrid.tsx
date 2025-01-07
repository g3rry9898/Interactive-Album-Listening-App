import {
    Box,
    Image,
    SimpleGrid,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
  
  interface Album {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
  }
  
  const mockAlbums: Album[] = [
    {
      id: '1',
      title: 'Midnight Memories',
      artist: 'The Weeknd',
      coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300',
    },
    {
      id: '2',
      title: 'Summer Nights',
      artist: 'Taylor Swift',
      coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300',
    },
    // Add more mock albums here
  ];
  
  export default function AlbumGrid() {
    const bgColor = useColorModeValue('gray.50', 'gray.900');
    const hoverBg = useColorModeValue('gray.100', 'gray.700');
  
    return (
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4, xl: 5 }} spacing={6}>
        {mockAlbums.map((album) => (
          <Box
            key={album.id}
            bg={bgColor}
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{
              transform: 'translateY(-4px)',
              shadow: 'lg',
              bg: hoverBg,
            }}
            cursor="pointer"
          >
            <Image
              src={album.coverUrl}
              alt={album.title}
              w="full"
              h="auto"
              aspectRatio={1}
              objectFit="cover"
            />
            <VStack align="start" p={4} spacing={1}>
              <Text fontWeight="semibold" noOfLines={1}>
                {album.title}
              </Text>
              <Text fontSize="sm" color="gray.500" noOfLines={1}>
                {album.artist}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    );
  }