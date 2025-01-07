import {
    Button,
    Container,
    Grid,
    Icon,
    Image,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    VStack
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCheck, FaDownload } from 'react-icons/fa';
  
  const libraryAlbums = [
    {
      title: 'Chromakopia',
      artist: 'Artist Name',
      cover: '/images/albums/chromakopia.jpg',
      isDownloaded: false
    },
    {
      title: 'Death of Slim Shady',
      artist: 'Eminem',
      cover: '/images/albums/slim-shady.jpg',
      isDownloaded: true
    },
    // Add more albums
  ];
  
  export default function LibraryPage() {
    const [downloads, setDownloads] = useState(
      libraryAlbums.map(album => album.isDownloaded)
    );
  
    const handleDownload = (index: number) => {
      setDownloads(prev => {
        const newDownloads = [...prev];
        newDownloads[index] = true;
        return newDownloads;
      });
    };
  
    return (
      <Container maxW="container.xl" py={12}>
        <Tabs variant="soft-rounded" colorScheme="purple">
          <TabList mb={8}>
            <Tab color="white" _selected={{ bg: 'purple.500' }}>All</Tab>
            <Tab color="white" _selected={{ bg: 'purple.500' }}>Downloads</Tab>
            <Tab color="white" _selected={{ bg: 'purple.500' }}>Playlists</Tab>
          </TabList>
  
          <TabPanels>
            <TabPanel>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
                {libraryAlbums.map((album, index) => (
                  <VStack
                    key={album.title}
                    spacing={4}
                    p={4}
                    bg="whiteAlpha.100"
                    borderRadius="xl"
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
                    >
                      {album.title}
                    </Text>
                    <Text color="gray.400">
                      {album.artist}
                    </Text>
                    <Button
                      leftIcon={<Icon as={downloads[index] ? FaCheck : FaDownload} />}
                      colorScheme={downloads[index] ? "green" : "purple"}
                      onClick={() => handleDownload(index)}
                      isDisabled={downloads[index]}
                      w="full"
                    >
                      {downloads[index] ? 'Downloaded' : 'Download'}
                    </Button>
                  </VStack>
                ))}
              </Grid>
            </TabPanel>
  
            <TabPanel>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
                {libraryAlbums
                  .filter((_, index) => downloads[index])
                  .map((album) => (
                    <VStack
                      key={album.title}
                      spacing={4}
                      p={4}
                      bg="whiteAlpha.100"
                      borderRadius="xl"
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
                      >
                        {album.title}
                      </Text>
                      <Text color="gray.400">
                        {album.artist}
                      </Text>
                      <Button
                        leftIcon={<Icon as={FaCheck} />}
                        colorScheme="green"
                        isDisabled
                        w="full"
                      >
                        Downloaded
                      </Button>
                    </VStack>
                  ))}
              </Grid>
            </TabPanel>
  
            <TabPanel>
              <Text color="gray.400">Your playlists will appear here</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    );
  }