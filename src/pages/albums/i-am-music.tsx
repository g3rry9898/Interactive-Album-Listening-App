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
    useToast,
    VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaArrowLeft, FaForward, FaPlay } from 'react-icons/fa';

const albumData = {
  id: '1',
  title: 'I AM MUSIC',
  artist: 'Lil Durk',
  cover: 'https://example.com/i-am-music-cover.jpg', // Placeholder for album cover
  genre: 'Hip-Hop',
  year: '2024',
  duration: '48:30',
  tracks: 16,
  description: 'A deeply personal album that showcases Lil Durk\'s growth as an artist and storyteller. I AM MUSIC blends emotional vulnerability with street narratives, featuring a mix of melodic flows and hard-hitting bars.',
  rating: 4.5,
  plays: '3.2M',
  releaseDate: 'March 15, 2024',
  label: 'Only The Family / Alamo Records',
  trackList: [
    {
      id: 1,
      title: "Intro (I AM MUSIC)",
      spotifyId: "your_spotify_id",
      hasVideo: true,
      videoUrl: "https://youtube.com/embed/your_video_id",
      story: "The opening track sets the tone for the album, with Durk reflecting on his journey and the power of music."
    },
    {
      id: 2,
      title: "All My Life",
      featuring: "J. Cole",
      spotifyId: "your_spotify_id",
      story: "A powerful collaboration with J. Cole about perseverance and overcoming obstacles."
    },
    {
      id: 3,
      title: "Stand By Me",
      spotifyId: "your_spotify_id",
      story: "A heartfelt track about loyalty and the importance of having people you can trust."
    }
  ],
  albumTeasers: {
    videos: [
      {
        url: "https://www.youtube.com/embed/your_video_id",
        title: "Album Trailer"
      },
      {
        url: "https://www.youtube.com/embed/your_video_id",
        title: "All My Life Music Video"
      }
    ]
  },
  analysis: {
    overview: `"I AM MUSIC" represents Lil Durk's most mature and introspective work to date. The album seamlessly blends his signature melodic style with deeper lyrical content, creating a project that resonates with both longtime fans and new listeners.`,
    keyPoints: [
      {
        title: "Emotional Depth",
        description: "Durk explores themes of loss, success, and personal growth with unprecedented vulnerability, showing a new side of his artistry."
      },
      {
        title: "Musical Evolution",
        description: "The album showcases Durk's growth as a musician, incorporating more complex melodies and diverse production styles while maintaining his authentic sound."
      },
      {
        title: "Cultural Impact",
        description: "I AM MUSIC continues to solidify Durk's position as a leading voice in the Chicago drill scene while expanding his influence in mainstream hip-hop."
      }
    ]
  },
  reviews: [
    {
      id: 1,
      reviewer: "Fantano",
      channelName: "theneedledrop",
      videoUrl: "https://www.youtube.com/embed/your_video_id",
      thumbnail: "/images/reviews/fantano.jpg"
    },
    {
      id: 2,
      reviewer: "Professor Skye",
      channelName: "Professor Skye's Record Review",
      videoUrl: "https://www.youtube.com/embed/your_video_id",
      thumbnail: "/images/reviews/deepcuts.jpg"
    }
  ],
  concerts: [
    {
      id: 1,
      title: "I AM MUSIC Tour 2024",
      venue: "United Center, Chicago",
      date: "2024",
      videoUrl: "https://www.youtube.com/embed/your_video_id",
      thumbnail: "/images/concerts/chicago.jpg"
    }
  ],
  behindTheScenes: [
    {
      id: 1,
      title: "Making of I AM MUSIC",
      description: "An inside look at the creative process behind the album",
      videoUrl: "https://www.youtube.com/embed/your_video_id",
      thumbnail: "/images/bts/making-of.jpg"
    }
  ]
};

export default function IAmMusicAlbum() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(albumData.trackList[0]);
  const toast = useToast();
  const backgroundUrl = 'https://example.com/i-am-music-background.jpg'; // Placeholder for background image

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