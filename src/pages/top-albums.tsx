import {
    Container,
    Grid,
    Heading,
    Image,
    Text,
    VStack
} from '@chakra-ui/react';
  
  const featuredAlbums = [
    {
      title: 'Chromakopia',
      artist: 'Tyler the creator',
      cover: '/images/albums/chromakopia.jpg',
      path: '/albums/chromakopia'
    },
    {
      title: 'Death of Slim Shady',
      artist: 'Eminem',
      cover: '/images/albums/slim-shady.jpg',
      path: '/albums/death-of-slim-shady'
    },
    {
      title: 'GNX',
      artist: 'Eminem',
      cover: '/images/albums/gnx.jpg',
      path: '/albums/gnx'
    },
    {
      title: "We Don't Trust You",
      artist: 'Metro Boomin, Future',
      cover: '/images/albums/we-dont-trust-you.jpg',
      path: '/albums/we-dont-trust-you'
    }
  ];
  
  export default function TopAlbums() {
    return (
      <Container maxW="container.xl" py={12}>
        <Heading color="white" mb={8}>Top Albums</Heading>
        <Grid 
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
          gap={8}
        >
          {featuredAlbums.map((album) => (
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
              <Image
                src={album.cover}
                alt={album.title}
                borderRadius="lg"
                w="full"
                h="200px"
                objectFit="cover"
              />
              <Text
                color="white"
                fontSize="lg"
                fontWeight="bold"
                textAlign="center"
              >
                {album.title}
              </Text>
              <Text
                color="gray.400"
                fontSize="sm"
              >
                {album.artist}
              </Text>
            </VStack>
          ))}
        </Grid>
      </Container>
    );
  }