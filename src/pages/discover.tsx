import {
    AspectRatio,
    Badge,
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    HStack,
    Icon,
    IconButton,
    Image,
    Input,
    Progress,
    Select,
    SimpleGrid,
    Text,
    Tooltip,
    useBreakpointValue,
    useToast,
    VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaEllipsisH, FaFilter, FaHeart, FaMusic, FaPause, FaPlay, FaSearch, FaShare } from 'react-icons/fa';

const MotionBox = motion(Box);
  
const mockAlbums = [
    {
    id: '1',
      title: 'Chromakopia',
      artist: 'Tyler The Creator',
      cover: 'https://news.artnet.com/app/news-upload/2024/10/tyler-creator-chromakopia-album-1024x1024.jpg',
    genre: 'Hip-Hop',
    year: '2024',
    duration: '48:20',
    tracks: 13,
      path: '/albums/chromakopia',
    description: 'A groundbreaking album that pushes the boundaries of hip-hop with innovative production and thought-provoking lyrics.',
    rating: 4.8,
    plays: '2.5M',
    releaseDate: 'March 15, 2024',
    label: 'Columbia Records',
    featuredTracks: ['Track 1', 'Track 2', 'Track 3']
  },
  {
    id: '2',
      title: 'Death of Slim Shady',
      artist: 'Eminem',
      cover: 'https://upload.wikimedia.org/wikipedia/en/4/4e/Eminem_-_The_Death_of_Slim_Shady_%28Coup_de_Gr%C3%A2ce%29.png',
    genre: 'Hip-Hop',
    year: '2024',
    duration: '45:30',
    tracks: 12,
      path: '/albums/death-of-slim-shady',
    description: 'Eminem\'s latest masterpiece that marks the end of an era while showcasing his unparalleled lyrical prowess.',
    rating: 4.9,
    plays: '3.2M',
    releaseDate: 'February 28, 2024',
    label: 'Shady Records',
    featuredTracks: ['Track 1', 'Track 2', 'Track 3']
  },
  {
    id: '3',
    title: 'GNX',
    artist: 'Kendrick Lamar',
    cover: 'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Faa7b86debf8b362bad3018cb881cfdc1.1000x1000x1.png',
    genre: 'Hip-Hop',
    year: '2024',
    duration: '45:00',
    tracks: 12,
    path: '/albums/gnx',
    description: 'A powerful and introspective album that showcases Kendrick Lamar\'s lyrical prowess and storytelling abilities. Featuring collaborations with SZA, Roddy Ricch, and other talented artists, GNX explores themes of identity, struggle, and triumph.',
    rating: 4.8,
    plays: '5.2M',
    releaseDate: 'March 15, 2024',
    label: 'Top Dawg Entertainment',
    featuredTracks: ['Wacced Out Murals', 'Squabble Up', 'Luther']
  },
  {
    id: '4',
      title: "We Don't Trust You",
      artist: 'Metro Boomin',
      cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Future_and_Metro_Boomin_-_We_Don%27t_Trust_You.png/220px-Future_and_Metro_Boomin_-_We_Don%27t_Trust_You.png',
    genre: 'Hip-Hop',
    year: '2024',
    duration: '50:10',
    tracks: 15,
      path: '/albums/we-dont-trust-you',
    description: 'A collaborative masterpiece featuring Metro Boomin\'s signature production and star-studded features.',
    rating: 4.6,
    plays: '2.1M',
    releaseDate: 'March 22, 2024',
    label: 'Boominati Worldwide',
    featuredTracks: ['Track 1', 'Track 2', 'Track 3']
  },
  {
    id: '5',
    title: 'I AM MUSIC',
    artist: 'PLAYBOI CARTI',
    cover: 'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F84387c03968c8d51fd8be652624f112a.1000x1000x1.png',
    genre: 'Hip-Hop',
    year: '2024',
    duration: '52:30',
    tracks: 16,
    path: '/albums/i-am-music',
    description: 'A powerful and introspective album that showcases Lil Durk\'s lyrical prowess and storytelling abilities.',
    rating: 4.7,
    plays: '4.1M',
    releaseDate: 'March 8, 2024',
    label: 'Only The Family',
    featuredTracks: ['All My Life', 'Pelleco', 'War Bout It']
  },
  {
    id: '6',
    title: 'Alligator Bites Never Heal',
    artist: 'DoeChii',
    cover: 'https://t2.genius.com/unsafe/252x252/https%3A%2F%2Fimages.genius.com%2Fc61d161e957a9e4691ec8d1069ead6d1.1000x1000x1.png',
    genre: 'Hip-Hop',
    year: '2024',
    duration: '45:00',
    tracks: 14,
    path: '/albums/alligator-bites-dont-heal',
    description: 'A deeply personal and introspective album that explores themes of loss, redemption, and self-discovery.',
    rating: 4.6,
    plays: '3.8M',
    releaseDate: 'March 1, 2024',
    label: 'Top Dawg Entertainment',
    featuredTracks: ['Crazy', 'Pro Freak', 'Alone']
  },
  {
    id: '7',
    title: 'Blue Lips',
    artist: 'Schoolboy Q',
    cover: 'https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fe37a0d6a005423ed3ac4c8dd36b665f8.1000x1000x1.png',
    genre: 'Hip-Hop',
    year: '2024',
    duration: '52:30',
    tracks: 16,
    path: '/albums/blue-lips',
    description: 'A powerful and introspective album that showcases Schoolboy Q\'s lyrical prowess and storytelling abilities.',
    rating: 4.7,
    plays: '4.1M',
    releaseDate: 'March 8, 2024',
    label: 'Top Dawg Entertainment',
    featuredTracks: ['Blue Lips', 'Lost Souls', 'West Coast Nights']
  }
];
  
const featuredAlbums = [
  {
    id: '1',
    title: 'Chromakopia',
    artist: 'Tyler, The Creator',
    cover: 'https://news.artnet.com/app/news-upload/2024/10/tyler-creator-chromakopia-album-1024x1024.jpg',
    year: '2024',
  },
  {
    id: '2',
    title: 'The Death Of Slim Shady',
    artist: 'Eminem',
    cover: 'https://wallpapercave.com/wp/wp10100175.jpg',
    year: '2024',
  },
];

const categories = [
  {
    id: '1',
    title: 'New Releases',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '2',
    title: 'Trending',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: '3',
    title: 'Genres',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];
  
  export default function DiscoverPage() {
    const router = useRouter();
    const toast = useToast();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [selectedYear, setSelectedYear] = useState('all');
    const [hoveredAlbum, setHoveredAlbum] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const isMobile = useBreakpointValue({ base: true, md: false });

    const genres = ['all', 'Hip-Hop', 'Electronic', 'Alternative', 'Pop'];
    const years = ['all', '2024', '2023', '2022', '2021'];

    const filteredAlbums = mockAlbums.filter(album => {
      const matchesSearch = album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           album.artist.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === 'all' || album.genre === selectedGenre;
      const matchesYear = selectedYear === 'all' || album.year === selectedYear;
      return matchesSearch && matchesGenre && matchesYear;
    });

    const handlePlayAlbum = (albumId: string) => {
      setIsPlaying(!isPlaying);
      toast({
        title: isPlaying ? "Album paused" : "Album playing",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    };

    const handleFavorite = (albumId: string) => {
      toast({
        title: "Added to favorites",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    };

    const handleAlbumClick = (albumId: string) => {
      const album = mockAlbums.find(a => a.id === albumId);
      if (album) {
        router.push(album.path);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      toast({
        title: "Album started playing",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    };
  
    return (
    <Box minH="100vh" bg="green.900" py={8}>
      <Container maxW="container.xl">
        {/* Header */}
        <VStack spacing={8} align="stretch" mb={12}>
          <Heading
            size="2xl"
            bgGradient="linear(to-r, green.400, teal.400)"
            bgClip="text"
          >
            Discover Albums
          </Heading>
          <Text color="gray.400" fontSize="xl">
            Explore and listen to complete albums from your favorite artists
          </Text>

          {/* Search and Filter */}
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={4}>
            <HStack>
              <Icon as={FaSearch} color="gray.400" />
              <Input
                placeholder="Search albums or artists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="gray.800"
                borderColor="gray.700"
                color="white"
                _focus={{ borderColor: 'green.400' }}
              />
            </HStack>
            <HStack>
              <Icon as={FaFilter} color="gray.400" />
              <Select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                bg="gray.800"
                borderColor="gray.700"
                color="white"
                _focus={{ borderColor: 'green.400' }}
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre === 'all' ? 'All Genres' : genre}
                  </option>
                ))}
              </Select>
            </HStack>
            <HStack>
              <Icon as={FaFilter} color="gray.400" />
              <Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                bg="gray.800"
                borderColor="gray.700"
                color="white"
                _focus={{ borderColor: 'green.400' }}
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </Select>
            </HStack>
          </Grid>
        </VStack>
  
          {/* Albums Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={8}>
            {filteredAlbums.map((album) => (
            <MotionBox
              key={album.id}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onHoverStart={() => setHoveredAlbum(album.id)}
              onHoverEnd={() => setHoveredAlbum(null)}
              bg="gray.800"
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              _hover={{ boxShadow: 'xl' }}
              cursor="pointer"
              onClick={() => handleAlbumClick(album.id)}
              >
                <Image
                  src={album.cover}
                  alt={album.title}
                  w="full"
                h="300px"
                objectFit="cover"
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="linear-gradient(to top, rgba(0,0,0,0.9), transparent)"
                opacity={hoveredAlbum === album.id ? 1 : 0}
                transition="all 0.3s"
              >
                <Flex
                  h="full"
                  direction="column"
                  justify="space-between"
                  p={6}
                >
                  <VStack align="start" spacing={2}>
                    <Badge colorScheme="green" px={2} py={1}>
                      {album.genre}
                    </Badge>
                    <Heading size="md" color="white">
                      {album.title}
                    </Heading>
                    <Text color="gray.400">
                      {album.artist}
                    </Text>
                    <Text color="gray.500" fontSize="sm">
                      {album.description}
                    </Text>
                    <HStack spacing={2} color="gray.500">
                      <Text fontSize="sm">{album.year}</Text>
                      <Text fontSize="sm">•</Text>
                      <Text fontSize="sm">{album.duration}</Text>
                      <Text fontSize="sm">•</Text>
                      <Text fontSize="sm">{album.tracks} tracks</Text>
                    </HStack>
                  </VStack>
                  <VStack align="start" spacing={2}>
                    <HStack spacing={2}>
                      <Icon as={FaMusic} color="green.400" />
                      <Text color="gray.400" fontSize="sm">
                        {album.plays} plays
                      </Text>
                    </HStack>
                    <Progress 
                      value={album.rating * 20} 
                      size="sm" 
                      colorScheme="green"
                      borderRadius="full"
                    />
                    <HStack spacing={4} mt={4}>
                      <Tooltip label={isPlaying ? "Pause" : "Play"}>
                        <IconButton
                          aria-label="Play album"
                          icon={<Icon as={isPlaying ? FaPause : FaPlay} />}
                          colorScheme="green"
                          size="lg"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePlayAlbum(album.id);
                          }}
                        />
                      </Tooltip>
                      <Tooltip label="Add to favorites">
                        <IconButton
                          aria-label="Add to favorites"
                          icon={<Icon as={FaHeart} />}
                          variant="ghost"
                          color="white"
                          _hover={{ color: 'teal.400' }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleFavorite(album.id);
                          }}
                        />
                      </Tooltip>
                      <Tooltip label="Share">
                        <IconButton
                          aria-label="Share"
                          icon={<Icon as={FaShare} />}
                          variant="ghost"
                          color="white"
                          _hover={{ color: 'green.400' }}
                        />
                      </Tooltip>
                      <Tooltip label="More options">
                        <IconButton
                          aria-label="More options"
                          icon={<Icon as={FaEllipsisH} />}
                          variant="ghost"
                          color="white"
                          _hover={{ color: 'green.400' }}
                        />
                      </Tooltip>
                    </HStack>
                  </VStack>
                </Flex>
              </Box>
              <Box p={6}>
                <Badge colorScheme="green" mb={2}>
                  {album.genre}
                </Badge>
                <Heading size="md" color="white" mb={2}>
                {album.title}
                </Heading>
                <Text color="gray.400" mb={2}>
                {album.artist}
              </Text>
                <HStack spacing={4} color="gray.500">
                  <Text fontSize="sm">{album.year}</Text>
                  <Text fontSize="sm">{album.duration}</Text>
                  <Text fontSize="sm">{album.tracks} tracks</Text>
                </HStack>
              </Box>
            </MotionBox>
            ))}
          </SimpleGrid>

          {/* Featured Albums */}
          <Box mb={16}>
            <Heading size="xl" color="white" mb={8}>
              Featured Albums
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={8}>
              {featuredAlbums.map((album) => (
                <MotionBox
                  key={album.id}
                  position="relative"
                  role="group"
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleAlbumClick(album.id)}
                  cursor="pointer"
                >
                  <AspectRatio ratio={1}>
                    <Box position="relative">
                      {/* Shadow */}
                      <Box
                        position="absolute"
                        inset={0}
                        bg="blackAlpha.400"
                        filter="blur(20px)"
                        transform="translateY(10px)"
                        zIndex={0}
                        borderRadius="xl"
                      />

                      {/* Album Cover Image */}
                      <Box
                        position="relative"
                        zIndex={1}
                        overflow="hidden"
                        borderRadius="xl"
                        transition="all 0.3s ease"
                        _hover={{
                          transform: "scale(1.02)",
                        }}
                      >
                        <Image
                          src={album.cover}
                          alt={`${album.title} album cover`}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          borderRadius="xl"
                          transition="all 0.3s ease"
                          _groupHover={{
                            transform: "scale(1.05)",
                            filter: "brightness(1.1)"
                          }}
                        />

                        {/* Play Button */}
                        <Box
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                          zIndex={3}
                          opacity={0}
                          transition="all 0.3s ease"
                          _groupHover={{ opacity: 1 }}
                        >
                          <Button
                            colorScheme="green"
                            size="lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlay();
                            }}
                            leftIcon={<Icon as={FaPlay} />}
                          >
                            Play Album
                          </Button>
                        </Box>

                        {/* Hover Overlay */}
                        <Box
                          position="absolute"
                          inset={0}
                          bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                          opacity={0}
                          transition="all 0.3s ease"
                          _groupHover={{ opacity: 1 }}
                          borderRadius="xl"
                          zIndex={2}
                        />
                      </Box>

                      {/* Glowing Border */}
                      <Box
                        position="absolute"
                        inset={-2}
                        borderRadius="xl"
                        bg="linear-gradient(45deg, #38A169, #319795, #38A169)"
                        opacity={0}
                        transition="opacity 0.3s"
                        _groupHover={{ opacity: 0.5 }}
                        zIndex={0}
                      />
                    </Box>
                  </AspectRatio>

                  {/* Album Info */}
                  <Box mt={4}>
                    <Text color="white" fontSize="xl" fontWeight="bold">
                      {album.title}
                    </Text>
                    <Text color="gray.400">
                      {album.artist} • {album.year}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Categories */}
          <Box mb={16}>
            <Heading size="xl" color="white" mb={8}>
              Categories
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={8}>
              {categories.map((category) => (
                <MotionBox
                  key={category.id}
                  position="relative"
                  role="group"
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  cursor="pointer"
                >
                  <AspectRatio ratio={16/9}>
                    <Box position="relative">
                      {/* Shadow */}
                      <Box
                        position="absolute"
                        inset={0}
                        bg="blackAlpha.400"
                        filter="blur(20px)"
                        transform="translateY(10px)"
                        zIndex={0}
                        borderRadius="xl"
                      />

                      {/* Category Image */}
                      <Box
                        position="relative"
                        zIndex={1}
                        overflow="hidden"
                        borderRadius="xl"
                        transition="all 0.3s ease"
                        _hover={{
                          transform: "scale(1.02)",
                        }}
                      >
                        <Image
                          src={category.image}
                          alt={category.title}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                          borderRadius="xl"
                          transition="all 0.3s ease"
                          _groupHover={{
                            transform: "scale(1.05)",
                            filter: "brightness(1.1)"
                          }}
                        />

                        {/* Hover Overlay */}
                        <Box
                          position="absolute"
                          inset={0}
                          bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
                          opacity={0}
                          transition="all 0.3s ease"
                          _groupHover={{ opacity: 1 }}
                          borderRadius="xl"
                          zIndex={2}
                        />
                      </Box>

                      {/* Glowing Border */}
                      <Box
                        position="absolute"
                        inset={-2}
                        borderRadius="xl"
                        bg="linear-gradient(45deg, #38A169, #319795, #38A169)"
                        opacity={0}
                        transition="opacity 0.3s"
                        _groupHover={{ opacity: 0.5 }}
                        zIndex={0}
                      />
                    </Box>
                  </AspectRatio>

                  {/* Category Title */}
                  <Box position="absolute" bottom={4} left={4} zIndex={3}>
                    <Text color="white" fontSize="xl" fontWeight="bold">
                      {category.title}
                    </Text>
                  </Box>
                </MotionBox>
              ))}
            </Grid>
          </Box>
      </Container>
    </Box>
    );
  }