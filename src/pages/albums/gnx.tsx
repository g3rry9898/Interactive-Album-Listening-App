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
    Image,
    Text,
    useToast,
    VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaArrowLeft, FaPlay } from 'react-icons/fa';

const MotionDiv = motion.div;

const albumData = {
  id: '2',
  title: 'GNX',
  artist: 'Kendrick Lamar',
  cover: 'https://example.com/gnx-cover.jpg',
  genre: 'Hip-Hop',
  year: '2024',
  duration: '45:00',
  tracks: 12,
  description: 'A powerful and introspective album that showcases Kendrick Lamar\'s lyrical prowess and storytelling abilities. Featuring collaborations with SZA, Roddy Ricch, and other talented artists, GNX explores themes of identity, struggle, and triumph.',
  rating: 4.8,
  plays: '5.2M',
  releaseDate: 'March 15, 2024',
  label: 'Top Dawg Entertainment',
  featuredTracks: [
    { id: 1, title: 'Wacced Out Murals', duration: '3:45', plays: '3.2M' },
    { id: 2, title: 'Squabble Up', duration: '3:20', plays: '2.9M' },
    { id: 3, title: 'Luther', duration: '4:10', plays: '2.7M' },
    { id: 4, title: 'Man at the Garden', duration: '3:55', plays: '2.5M' },
    { id: 5, title: 'Hey Now', duration: '4:05', plays: '2.3M' },
    { id: 6, title: 'Reincarnated', duration: '3:40', plays: '2.1M' },
    { id: 7, title: 'TV Off', duration: '3:50', plays: '1.9M' },
    { id: 8, title: 'Dodger Blue', duration: '4:15', plays: '1.8M' },
    { id: 9, title: 'Peekaboo', duration: '3:35', plays: '1.7M' },
    { id: 10, title: 'Heart Pt. 6', duration: '4:00', plays: '1.6M' },
    { id: 11, title: 'GNX', duration: '3:45', plays: '1.5M' },
    { id: 12, title: 'Gloria', duration: '3:30', plays: '1.4M' }
  ],
  trackList: [
    {
      id: 1,
      title: "Wacced Out Murals",
      spotifyId: "5gOfC9UzZQzTyShqPMrpjT",
      story: "Kendrick doesn't hold back—he's throwing shade at fake industry friendships, reflecting on his Super Bowl drama, and even admitting he might've let Lil Wayne down. But instead of wallowing, he's like, \"F**k it, I'll kill 'em all before they kill my joy.\" The whole track feels like a prayer and a war cry rolled into one, with gospel vibes backing his raw, unapologetic truth bombs. It's Kendrick being Kendrick—iconic, untouchable, and always a step ahead."
    },
    {
      id: 2,
      title: "Squabble Up",
      spotifyId: "0nj9Bq5sHDiTxSHunhgkFb",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/fuV4yQWdn_4",
      story: "Finalyyy! Let's Go !Everybody has anticpateley been waiting for this track after it was snipped at the Not Like Us Music video the song had already gone iral without the full version being out"
    },
    {
      id: 3,
      title: "Luther",
      featuring: "SZA",
      spotifyId: "45J4avUb9Ni0bnETYaYFVJ",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/sNY_2TEmzho",
      story: "A powerful collaboration with SZA that explores themes of identity and self-discovery."
    }
  ],
  albumTeasers: {
    videos: [
      {
        url: "https://www.youtube.com/embed/D7liwdjvhWc",
        title: "Album Trailer"
      }
    ]
  },
  analysis: {
    overview: "GNX represents Kendrick Lamar's continued evolution as an artist and storyteller. The album showcases his ability to blend complex themes with accessible production, creating a project that resonates with both casual listeners and hip-hop purists.",
    keyPoints: [
      {
        title: "Artistic Evolution",
        description: "Kendrick continues to push boundaries with his lyricism and storytelling, tackling complex themes with newfound depth and vulnerability."
      },
      {
        title: "Production Innovation",
        description: "The album features a diverse range of production styles, from traditional West Coast beats to experimental soundscapes, pushing the boundaries of hip-hop."
      },
      {
        title: "Cultural Impact",
        description: "GNX continues to solidify Kendrick's position as one of the most important voices in hip-hop while expanding his influence in the broader music landscape."
      }
    ]
  },
  reviews: [
    {
      id: 1,
      reviewer: "The Bigger Picture",
      channelName: "HIPHOPDX",
      videoUrl: "https://www.youtube.com/embed/QQVYEGITulk",
      thumbnail: "/images/reviews/fantano.jpg"
    },
    {
      id: 2,
      reviewer: "Rap life Review",
      channelName: "Apple Music",
      videoUrl: "https://www.youtube.com/embed/-qLcPAO72is?start=464",
      thumbnail: "/images/reviews/deepcuts.jpg"
    }
  ],
  concerts: [
    {
      id: 1,
      title: "GNX Tour 2024",
      venue: "The Forum, Los Angeles",
      date: "2024",
      videoUrl: "https://www.youtube.com/embed/your_video_id",
      thumbnail: "/images/concerts/la.jpg"
    }
  ],
  behindTheScenes: [
    {
      id: 1,
      title: "Making of GNX BY RDCWORLD(PARODY)",
      description: "mustaaaaaaaaaaard",
      videoUrl: "https://www.youtube.com/embed/flN8HhmOTLI",
      thumbnail: "/images/bts/making-of.jpg"
    }
  ]
};

export default function GNXAlbum() {
  const router = useRouter();
  const toast = useToast();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(albumData.trackList[0]);
  const backgroundUrl = 'https://example.com/gnx-background.jpg';

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
          <Box position="relative" role="group">
            <MotionDiv
              style={{
                position: 'relative',
                width: '100%',
                height: '100%'
              }}
              animate={{
                opacity: [0, 1],
                scale: [0.9, 1]
              }}
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
                        leftIcon={<FaPlay />}
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
            </MotionDiv>
          </Box>
    
          {/* Album Info */}
          <MotionDiv
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
            animate={{
              opacity: [0, 1],
              x: [-20, 0]
            }}
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
          </MotionDiv>
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
        <Box mt={12}>
          <Heading size="xl" color="white" mb={6}>
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
                            title={track.title}
                            allowFullScreen
                          />
                        </AspectRatio>
                      </Box>
                    )}
                  </VStack>
                </Grid>
              </Box>
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}