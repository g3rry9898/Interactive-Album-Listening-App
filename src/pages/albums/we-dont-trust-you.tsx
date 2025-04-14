"use client";
import {
    AspectRatio,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Heading,
    HStack,
    Icon,
    Image,
    Text,
    useDisclosure,
    useToast,
    VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaArrowLeft, FaForward, FaPlay } from 'react-icons/fa';

const albumData = {
  id: '1',
  title: 'We Don\'t Trust You',
  artist: 'Future & Metro Boomin',
  cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Future_and_Metro_Boomin_-_We_Don%27t_Trust_You.png/220px-Future_and_Metro_Boomin_-_We_Don%27t_Trust_You.png', // Placeholder for album cover
  genre: 'Hip-Hop',
  year: '2024',
  duration: '45:00',
  tracks: 17,
  description: 'Future and Metro Boomin reunite for their highly anticipated collaborative album "We Don\'t Trust You". The project showcases their signature dark, atmospheric production and Future\'s distinctive flow, creating a cohesive body of work that pushes the boundaries of modern trap music.',
  rating: 4.7,
  plays: '15M',
  releaseDate: 'March 22, 2024',
  label: 'Freebandz / Boominati Worldwide / Epic Records',
  featuredTracks: [
    { id: 1, title: 'Type Shit', duration: '3:20', plays: '8.2M' },
    { id: 2, title: 'Like That', duration: '3:45', plays: '7.8M' },
    { id: 3, title: 'Magic Don Juan', duration: '3:15', plays: '6.5M' }
  ],
  credits: {
    producer: 'Metro Boomin',
    executiveProducer: 'Future, Metro Boomin',
    mixing: 'Mixed by Joe LaPorta',
    mastering: 'Mastered by Joe LaPorta',
    artwork: 'Design by Joe Perez'
  },
  similarAlbums: [
    {
      title: 'SAVAGE MODE II',
      artist: '21 Savage & Metro Boomin',
      cover: 'https://example.com/savage-mode-ii.jpg',
      year: '2020'
    },
    {
      title: 'HNDRXX',
      artist: 'Future',
      cover: 'https://example.com/hndrxx.jpg',
      year: '2017'
    }
  ],
  spotifyEmbed: 'https://open.spotify.com/embed/album/your_album_id',
  youtubeVideos: [
    {
      id: '1',
      title: 'Type Shit',
      embedId: 'your_video_id',
      views: '8.2M'
    },
    {
      id: '2',
      title: 'Like That',
      embedId: 'your_video_id',
      views: '7.8M'
    }
  ],
  trackAnalysis: [
    {
      id: 1,
      title: 'Type Shit',
      analysis: 'Opening track that sets the tone for the album with Metro\'s signature dark production and Future\'s confident delivery.',
      lyrics: 'Sample lyrics here...',
      productionNotes: 'Produced by Metro Boomin, featuring atmospheric synths and heavy bass',
      teasers: [
        { type: 'youtube', id: 'your_video_id', title: 'Official Teaser' }
      ]
    }
  ],
  reviews: [
    {
      id: 1,
      reviewer: 'Fantano',
      channelName: 'theneedledrop',
      videoUrl: 'https://www.youtube.com/embed/your_video_id',
      thumbnail: '/images/reviews/fantano.jpg'
    },
    {
      id: 2,
      reviewer: 'Professor Skye',
      channelName: 'Professor Skye\'s Record Review',
      videoUrl: 'https://www.youtube.com/embed/your_video_id',
      thumbnail: '/images/reviews/deepcuts.jpg'
    }
  ],
  concerts: [
    {
      id: 1,
      title: 'We Don\'t Trust You Tour 2024',
      venue: 'State Farm Arena, Atlanta',
      date: '2024',
      videoUrl: 'https://www.youtube.com/embed/your_video_id',
      thumbnail: '/images/concerts/atlanta.jpg'
    }
  ],
  behindTheScenes: [
    {
      id: 1,
      title: 'Making of We Don\'t Trust You',
      description: 'An intimate look into the creative process behind the album',
      videoUrl: 'https://www.youtube.com/embed/your_video_id',
      thumbnail: '/images/bts/making-of.jpg'
    }
  ],
  trackList: [
    {
      id: 1,
      title: "Type Shit",
      featuring: "Travis Scott, Playboi Carti",
      spotifyId: "your_spotify_id",
      hasVideo: true,
      videoUrl: "https://youtube.com/embed/your_video_id",
      story: "The opening track sets the tone with Future and Metro\'s signature dark, atmospheric production."
    },
    {
      id: 2,
      title: "Like That",
      featuring: "Kendrick Lamar",
      spotifyId: "your_spotify_id",
      story: "A standout track featuring Kendrick Lamar, showcasing their chemistry over Metro\'s production."
    },
    {
      id: 3,
      title: "Magic Don Juan",
      spotifyId: "your_spotify_id",
      story: "Future reflects on his journey and success over Metro\'s signature dark production."
    }
  ],
  albumTeasers: {
    videos: [
      {
        url: "https://www.youtube.com/embed/kxrTIkEKXm0",
        title: "Album Announcement"
      },
      {
        url: "https://www.youtube.com/embed/OyoTzTWDn_M",
        title: "Type Shit Music Video"
      }
    ],
    instagram: {
      url: "https://www.instagram.com/p/your_post_id",
      title: "Album Announcement Post"
    }
  },
  analysis: {
    overview: `"We Don't Trust You" represents Future and Metro Boomin's triumphant return as a collaborative force. The album showcases their signature dark, atmospheric production and Future's distinctive flow, creating a cohesive body of work that pushes the boundaries of modern trap music.`,
    keyPoints: [
      {
        title: "Production Style",
        description: "Metro Boomin's production on the album is characterized by dark, atmospheric beats, heavy bass, and intricate drum patterns. The sound design creates a cohesive sonic landscape that perfectly complements Future's delivery."
      },
      {
        title: "Cultural Impact",
        description: "The album has made a significant impact on the hip-hop landscape, further solidifying Future and Metro Boomin's positions as trendsetters in the genre. Their collaborative chemistry continues to influence the sound of modern trap music."
      },
      {
        title: "Lyrical Themes",
        description: "Future explores themes of success, wealth, and street life throughout the album. His distinctive flow and delivery add depth to the lyrics, creating a compelling narrative that resonates with listeners."
      }
    ]
  }
};

export default function WeDontTrustYouAlbum() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(albumData.trackList[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [showTrackPreview, setShowTrackPreview] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const toast = useToast();
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const backgroundUrl = 'https://example.com/we-dont-trust-you-background.jpg'; // Placeholder for background image

  const MotionBox = motion(Box);
  const MotionVStack = motion(VStack);

  const handleBackToDiscover = () => {
    router.push('/discover');
  };

  const handlePlayAlbum = () => {
    setIsPlaying(true);
    setSelectedTrack(albumData.trackList[0]);
    setCurrentTrackIndex(0);
    toast({
      title: "Album started playing",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % albumData.trackList.length;
    setCurrentTrackIndex(nextIndex);
    setSelectedTrack(albumData.trackList[nextIndex]);
    toast({
      title: `Playing: ${albumData.trackList[nextIndex].title}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleTrackClick = (track: typeof albumData.trackList[0]) => {
    setSelectedTrack(track);
    setCurrentTrackIndex(track.id - 1);
    setIsPlaying(true);
  };

  return (
    <Box
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.800"
        zIndex={0}
      />
      <Container maxW="container.xl" py={12} position="relative" zIndex={1}>
        <Box position="relative" mb={8}>
          <Button
            leftIcon={<FaArrowLeft />}
            onClick={handleBackToDiscover}
            position="absolute"
            top={4}
            left={4}
            zIndex={2}
            colorScheme="purple"
            variant="outline"
          >
            Back to Discover
          </Button>
        </Box>

        <Grid templateColumns="300px 1fr" gap={8} mb={12}>
          {/* Album Cover */}
          <MotionBox
            position="relative"
            role="group"
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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
                    src={albumData.cover}
                    alt={`${albumData.title} album cover`}
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
                      colorScheme="purple"
                      size="lg"
                      onClick={handlePlayAlbum}
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
                  bg="linear-gradient(45deg, #FF0080, #7928CA, #FF0080)"
                  opacity={0}
                  transition="opacity 0.3s"
                  _groupHover={{ opacity: 0.5 }}
                  zIndex={0}
                />
              </Box>
            </AspectRatio>
          </MotionBox>
  
          {/* Album Info */}
          <MotionVStack 
            align="start" 
            spacing={4}
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading size="2xl" color="white">
              {albumData.title}
            </Heading>
            <Text color="gray.400" fontSize="xl">
              {albumData.artist}
            </Text>
            <Text color="gray.300" fontSize="md">
              Released: {albumData.releaseDate}
            </Text>
            <Divider borderColor="whiteAlpha.200" />
            <Text color="gray.300" fontSize="lg" lineHeight="tall">
              {albumData.description}
            </Text>
          </MotionVStack>
        </Grid>
  
        {/* Album Teasers Section */}
        <Box mt={12}>
          <Heading size="xl" color="white" mb={6}>
            Album Teasers
          </Heading>
          <VStack spacing={6}>
            {albumData.albumTeasers.videos.map((teaser, index) => (
              <Box key={index} w="100%" bg="gray.800" p={6} borderRadius="lg">
                <AspectRatio ratio={16/9} mb={4}>
                  <iframe
                    src={teaser.url}
                    title={teaser.title}
                    allowFullScreen
                  />
                </AspectRatio>
                <Text color="white" fontWeight="bold">
                  {teaser.title}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Tracklist */}
        <Box>
          <Heading size="lg" color="white" mb={4}>
            Tracklist
          </Heading>
          <VStack spacing={4} w="100%">
            {albumData.trackList.map((track, index) => (
              <Box
                key={track.id}
                w="100%"
                p={4}
                borderRadius="lg"
                bg={selectedTrack?.id === track.id ? "whiteAlpha.200" : "whiteAlpha.100"}
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.200"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  bg: "whiteAlpha.200",
                  transform: "translateX(10px)",
                }}
                onClick={() => handleTrackClick(track)}
              >
                <Grid templateColumns="1fr 1fr" gap={8}>
                  {/* Left Section - Track Info and Spotify */}
                  <VStack align="start" spacing={4}>
                    {/* Track Info */}
                    <HStack spacing={4}>
                      <Text color="white" fontWeight="bold" minW="30px">
                        {index + 1}
                      </Text>
                      <VStack align="start" flex={1}>
                        <Text color="white" fontWeight="medium">
                          {track.title}
                        </Text>
                        {track.featuring && (
                          <Text color="gray.400" fontSize="sm">
                            Featuring: {track.featuring}
                          </Text>
                        )}
                      </VStack>
                    </HStack>
            
                    {/* Spotify Embed */}
                    <Box w="100%">
                      <AspectRatio ratio={1} maxH="180px">
                        <iframe 
                          src={`https://open.spotify.com/embed/track/${track.spotifyId}?autoplay=${isPlaying && currentTrackIndex === index ? 1 : 0}`}
                          width="100%" 
                          height="100%" 
                          frameBorder="0" 
                          allow="encrypted-media"
                        />
                      </AspectRatio>
                    </Box>
                  </VStack>
  
                  {/* Right Section - Video and Story */}
                  <VStack align="start" spacing={4}>
                    {/* Video (if available) */}
                    {track.hasVideo && (
                      <Box w="100%">
                        <AspectRatio ratio={16/9} maxH="300px">
                          <iframe
                            src={track.videoUrl}
                            title={`${track.title} video`}
                            allowFullScreen
                            style={{ borderRadius: '8px' }}
                          />
                        </AspectRatio>
                      </Box>
                    )}

                    {/* Story Section */}
                    <Box w="100%" pt={4} borderTop="1px solid" borderColor="whiteAlpha.200">
                      <Text color="gray.300" fontSize="sm" lineHeight="tall">
                        {track.story}
                      </Text>
                    </Box>
                  </VStack>
                </Grid>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Next Track Button */}
        {isPlaying && (
          <Box mt={8} textAlign="center">
            <Button
              colorScheme="purple"
              size="lg"
              onClick={handleNextTrack}
              rightIcon={<Icon as={FaForward} />}
            >
              Next Track
            </Button>
          </Box>
        )}

        {/* Analysis Section */}
        <Box mt={12}>
          <Heading size="xl" color="white" mb={6}>
            Album Analysis
          </Heading>
          <VStack spacing={6} align="stretch">
            <Box bg="gray.800" p={6} borderRadius="lg">
              <Text color="gray.300" fontSize="lg" lineHeight="tall">
                {albumData.analysis.overview}
              </Text>
            </Box>
            {albumData.analysis.keyPoints.map((point, index) => (
              <Box key={index} bg="gray.800" p={6} borderRadius="lg">
                <Heading size="md" color="white" mb={4}>
                  {point.title}
                </Heading>
                <Text color="gray.300" lineHeight="tall">
                  {point.description}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Reviews Section */}
        <Box mt={12}>
          <Heading size="xl" color="white" mb={6}>
            Reviews
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {albumData.reviews.map((review) => (
              <Box key={review.id} bg="gray.800" p={6} borderRadius="lg">
                <AspectRatio ratio={16/9} mb={4}>
                  <iframe
                    src={review.videoUrl}
                    title={`${review.reviewer} review`}
                    allowFullScreen
                  />
                </AspectRatio>
                <Text color="white" fontWeight="bold" mb={2}>
                  {review.reviewer}
                </Text>
                <Text color="gray.400">
                  {review.channelName}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Concerts Section */}
        <Box mt={12}>
          <Heading size="xl" color="white" mb={6}>
            Concerts
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {albumData.concerts.map((concert) => (
              <Box key={concert.id} bg="gray.800" p={6} borderRadius="lg">
                <AspectRatio ratio={16/9} mb={4}>
                  <iframe
                    src={concert.videoUrl}
                    title={concert.title}
                    allowFullScreen
                  />
                </AspectRatio>
                <Text color="white" fontWeight="bold" mb={2}>
                  {concert.title}
                </Text>
                <Text color="gray.400">
                  {concert.venue} - {concert.date}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Behind the Scenes Section */}
        <Box mt={12}>
          <Heading size="xl" color="white" mb={6}>
            Behind the Scenes
          </Heading>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {albumData.behindTheScenes.map((bts) => (
              <Box key={bts.id} bg="gray.800" p={6} borderRadius="lg">
                <AspectRatio ratio={16/9} mb={4}>
                  <iframe
                    src={bts.videoUrl}
                    title={bts.title}
                    allowFullScreen
                  />
                </AspectRatio>
                <Text color="white" fontWeight="bold" mb={2}>
                  {bts.title}
                </Text>
                <Text color="gray.400">
                  {bts.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
} 