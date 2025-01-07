import { Badge, Box, Grid, Image, Text } from '@chakra-ui/react';

interface Album {
  id: string;
  title: string;
  artist: string;
  cover: string;
  genre: string;
}

export default function FeaturedAlbums() {
  const albums: Album[] = [
    {
      id: '1',
      title: 'Album Title',
      artist: 'Artist Name',
      cover: '/placeholder.jpg',
      genre: 'Hip Hop'
    },
    // Add more albums
  ];

  return (
    <Grid 
      templateColumns={{ 
        base: "repeat(1, 1fr)", 
        md: "repeat(2, 1fr)", 
        lg: "repeat(4, 1fr)" 
      }}
      gap={6}
    >
      {albums.map((album) => (
        <Box
          key={album.id}
          bg="whiteAlpha.100"
          borderRadius="xl"
          overflow="hidden"
          transition="all 0.3s"
          _hover={{
            transform: 'translateY(-5px)',
          }}
        >
          <Image
            src={album.cover}
            alt={album.title}
            w="full"
            h="200px"
            objectFit="cover"
          />
          <Box p={4}>
            <Badge colorScheme="purple" mb={2}>
              {album.genre}
            </Badge>
            <Text fontWeight="semibold" fontSize="lg">
              {album.title}
            </Text>
            <Text color="brand.text.secondary">
              {album.artist}
            </Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}