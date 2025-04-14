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
  title: 'Chromakopia',
  artist: 'Tyler, The Creator',
  cover: 'https://news.artnet.com/app/news-upload/2024/10/tyler-creator-chromakopia-album-1024x1024.jpg',
  genre: 'Hip-Hop',
  year: '2024',
  duration: '52:30',
  tracks: 14,
  description: 'Welcome to the Chromakopia Experience: Immerse yourself in the vibrant world of Tyler, the Creator\'s latest masterpiece, "Chromakopia". This album blends hip-hop, jazz, and soul, taking you on a sonic journey through Tyler\'s reflections on his past, present, and future. Narrated by Tyler\'s mother, Bonita Smith, each track serves as a chapter in his life, addressing themes like maturity, fears of fatherhood, and the impact of materialism. With collaborations from artists like Daniel Caesar, Lil Wayne, and GloRilla, the album offers a rich tapestry of sounds and emotions. Critics have praised its intricate lyricism, cohesive storytelling, and captivating production. Let the music resonate with you as you explore the depths of Tyler\'s artistic evolution. Enjoy the ride! 🎨🎶',
  rating: 4.8,
  plays: '4.5M',
  releaseDate: 'October 15, 2024',
  label: 'Columbia Records',
  featuredTracks: [
    { id: 1, title: 'St. Chroma', duration: '3:45', plays: '3.2M' },
    { id: 2, title: 'Rah Tah Tah', duration: '3:20', plays: '2.9M' },
    { id: 3, title: 'Noid', duration: '4:10', plays: '2.7M' },
    { id: 4, title: 'Darling, I', duration: '3:55', plays: '2.5M' },
    { id: 5, title: 'Hey Jane', duration: '4:05', plays: '2.3M' },
    { id: 6, title: 'I Killed You', duration: '3:40', plays: '2.1M' },
    { id: 7, title: 'Judge Judy', duration: '3:50', plays: '1.9M' },
    { id: 8, title: 'Sticky', duration: '4:15', plays: '1.8M' },
    { id: 9, title: 'Take Your Mask Off', duration: '3:35', plays: '1.7M' },
    { id: 10, title: 'Tomorrow', duration: '4:00', plays: '1.6M' },
    { id: 11, title: 'Thought I Was Dead', duration: '3:45', plays: '1.5M' },
    { id: 12, title: 'Like Him', duration: '3:30', plays: '1.4M' },
    { id: 13, title: 'Balloon', duration: '3:55', plays: '1.3M' },
    { id: 14, title: 'I Hope You Find Your Way Home', duration: '4:20', plays: '1.2M' }
  ],
  credits: {
    producer: 'Tyler, The Creator',
    executiveProducer: 'Tyler, The Creator',
    mixing: 'Vic Wainstein',
    mastering: 'Mike Bozzi',
    artwork: 'Wolf Haley'
  },
  similarAlbums: [
    {
      title: 'Call Me If You Get Lost',
      artist: 'Tyler, The Creator',
      cover: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Tyler%2C_the_Creator_-_Call_Me_If_You_Get_Lost.png',
      year: '2021'
    },
    {
      title: 'IGOR',
      artist: 'Tyler, The Creator',
      cover: 'https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.png',
      year: '2019'
    }
  ],
  spotifyEmbed: 'https://open.spotify.com/embed/album/1QoyuMHNBe7lg3YW4Qtll4?utm_source=generator',
  youtubeVideos: [
    {
      id: '1',
      title: 'St. Chroma',
      embedId: 'gkZ4dLMH-B8',
      views: '3.2M'
    },
    {
      id: '2',
      title: 'Noid',
      embedId: 'Qer3lwd5hyA',
      views: '2.7M'
    }
  ],
  trackAnalysis: [
    {
      id: 1,
      title: 'St. Chroma',
      analysis: 'A soulful opening track featuring Daniel Caesar, exploring themes of spiritual awakening through color and sound. The collaboration brings together two of R&B\'s most innovative voices.',
      lyrics: 'Sample lyrics here...',
      productionNotes: 'Produced by Tyler, The Creator, featuring lush instrumentation and layered vocals',
      teasers: [
        { type: 'youtube', id: 'gkZ4dLMH-B8', title: 'Official Teaser' },
        { type: 'instagram', url: 'https://instagram.com/p/example', title: 'Studio Session' }
      ]
    }
  ],
      reviews: [
        {
          id: 1,
      reviewer: 'Fantano',
      channelName: 'theneedledrop',
      videoUrl: 'https://www.youtube.com/embed/U3E2a3fUGAE',
      thumbnail: '/images/reviews/fantano.jpg'
        },
        {
          id: 2,
      reviewer: 'Professor Skye',
      channelName: 'Professor Skye\'s Record Review',
      videoUrl: 'https://www.youtube.com/embed/cM8gLLR4ngE',
      thumbnail: '/images/reviews/deepcuts.jpg'
        }
      ],
    concerts: [
        {
          id: 1,
      title: 'CHROMAKOPIA Live at Camp Flog Gnaw 2024',
      venue: 'Madison Square Garden, NYC',
      date: '2024',
      videoUrl: 'https://www.youtube.com/embed/XutD0u4W2p8',
      thumbnail: '/images/concerts/msg-opening.jpg'
    }
      ],
      behindTheScenes: [
        {
          id: 1,
      title: 'Making of Chromakopia',
      description: 'An intimate look into the creative process behind the album',
      videoUrl: 'https://www.youtube.com/embed/KvR_QlXaAfU',
      thumbnail: '/images/bts/making-of.jpg'
    }
  ],
  trackList: [
      {
        id: 1,
        title: "St. Chroma",
        featuring: "Daniel Caesar",
      spotifyId: "1QoyuMHNBe7lg3YW4Qtll4",
        hasVideo: true,
        videoUrl: "https://youtube.com/embed/gkZ4dLMH-B8",
        story: "A soulful opening track featuring Daniel Caesar, exploring themes of spiritual awakening through color and sound. The collaboration brings together two of R&B's most innovative voices."
      },
      {
        id: 2,
        title: "Rah Tah Tah",
      spotifyId: "5RePVWy39tLpHH0WwXgBsK",
        story: "An energetic and upbeat track that captures the listener's attention with catchy hooks and a vibrant beat. The song showcases Tyler's playful side, combining witty wordplay with a dynamic rhythm that keeps the energy high throughout."
      },
      {
        id: 3,
        title: "Noid",
      spotifyId: "1tnZxHryc2wWtjUZC1LQw5",
      hasVideo: true,
        videoUrl: "https://www.youtube.com/embed/Qer3lwd5hyA",
      story: "Serving as the lead single, this track features a groovy bassline and thought-provoking lyrics. Tyler delves into his personal experiences and struggles, reflecting on his journey and growth as an artist."
      },
      {
        id: 4,
        title: "Darling, I",
        featuring: "Teezo Touchdown",
      spotifyId: "0VaeksJaXy5R1nvcTMh3Xk",
      story: "Darling, I features Teezo Touchdown and explores the vulnerability of love. The heartfelt duet emphasizes the emotional intricacies of relationships, creating a poignant and relatable listening experience."
      },
      {
        id: 5,
        title: "Hey Jane",
      spotifyId: "3Umj02ZNl4d356pS1D38mn",
      story: "Hey Jane shifts to a more serene and laid-back atmosphere. With smooth jazz influences and mellow vibes, this track offers a moment of tranquility and introspection."
      },
      {
        id: 6,
        title: "I Killed You",
      spotifyId: "3GdwjAsCsoE79ObhsJFyYb",
      story: "The darker tones of 'I Killed You' present a stark contrast, with hard-hitting lyrics and a gritty beat. This track exposes Tyler's inner conflicts and personal demons."
      },
      {
        id: 7,
        title: "Judge Judy",
      spotifyId: "6ie0uyyvOKTTuIFBMPiNIl",
      story: "'Judge Judy' brings a unique twist with its courtroom theme, featuring witty wordplay and sharp production. Tyler navigates legal metaphors with clever lyricism."
      },
      {
        id: 8,
        title: "Sticky",
        featuring: "GloRilla, Lil Wayne & Sexyy Red",
      spotifyId: "3tFed7YsjGnIfxeLEQwx3R",
        hasVideo: true,
      story: "'Sticky', featuring GloRilla, Lil Wayne, and Sexyy Red, is a star-studded collaboration that brings together powerful verses from each artist."
      },
      {
        id: 9,
        title: "Take Your Mask Off",
        featuring: "Daniel Caesar & LaToiya Williams",
        spotifyId: "4BSR9I4ExlCJdXJo2GpBD5",
      story: "In 'Take Your Mask Off', Daniel Caesar and LaToiya Williams join Tyler to encourage authenticity and self-acceptance."
      },
      {
        id: 10,
        title: "Tomorrow",
      spotifyId: "3yw3m8wgRB4ptDyAvtdhq5",
      story: "'Tomorrow' offers a beacon of hope and optimism. With uplifting lyrics and a bright melody, this track shines a light on the possibilities of the future."
      },
      {
        id: 11,
        title: "Thought I Was Dead",
        featuring: "Santigold & ScHoolboy Q",
      spotifyId: "2aYHxnMF2umAavtgBvmkY1",
      story: "The collaboration with Santigold and ScHoolboy Q on 'Thought I Was Dead' addresses themes of resilience and survival."
      },
      {
        id: 12,
        title: "Like Him",
        featuring: "Lola Young",
        spotifyId: "your_spotify_track_id",
      story: "'Like Him', featuring Lola Young, celebrates identity and individuality. This track explores the importance of staying true to oneself."
      },
      {
        id: 13,
        title: "Balloon",
        featuring: "Doechii",
        spotifyId: "your_spotify_track_id",
      story: "'Balloon', with Doechii, adds a whimsical touch to the album. The playful lyrics and airy beat create a light and fun listening experience."
      },
      {
        id: 14,
        title: "I Hope You Find Your Way Home",
        spotifyId: "your_spotify_track_id",
        hasVideo: true,
        videoUrl: "your_video_url",
      story: "The album closes with 'I Hope You Find Your Way Home', a heartfelt and reflective track that leaves listeners with a sense of closure and introspection."
    }
  ],
  albumTeasers: {
    videos: [
      {
        url: "https://www.youtube.com/embed/gkZ4dLMH-B8",
        title: "First teaser"
      },
      {
        url: "https://www.youtube.com/embed/Qer3lwd5hyA",
        title: "Noid Music Video"
      }
    ],
    instagram: {
      url: "https://www.instagram.com/p/DBOvKSFvDFQ",
      title: "Album Announcement Post"
    }
  },
  analysis: {
    overview: `Chromakopia represents Tyler, The Creator's most ambitious work to date, 
    blending genres from jazz to hip-hop while exploring themes of artistic evolution, 
    personal growth, and cultural identity. The album's production showcases Tyler's 
    signature style while pushing new sonic boundaries.`,
    keyPoints: [
      {
        title: "Production Style",
        description: "The production on Chromakopia is a blend of hip-hop, jazz, and soul, creating a rich and immersive sonic landscape. Tyler seamlessly incorporates soulful vocals, jazzy melodies, and hip-hop beats to craft a cohesive and captivating sound. The album features intricate arrangements and layered instrumentation, showcasing Tyler's versatility as a producer. Collaborations with artists like Daniel Caesar, Lil Wayne, and GloRilla add diverse textures and flavors to the mix. The use of smooth jazz influences in tracks like 'Hey Jane' and the dynamic energy of songs like 'Sticky' highlight Tyler's ability to blend different genres and create a unique auditory experience."
      },
      {
        title: "Cultural Impact",
        description: "Chromakopia has made a significant cultural impact, further solidifying Tyler, the Creator's status as a boundary-pushing artist. The album's exploration of themes like self-acceptance and resilience resonates with a wide audience, offering a message of empowerment and authenticity. Tyler's innovative approach to blending genres and collaborating with diverse artists has influenced the contemporary music landscape, inspiring a new generation of artists to experiment with their sound. The album has received critical acclaim for its lyrical depth, cohesive storytelling, and groundbreaking production, cementing its place in modern music history. Tyler's fearless exploration of personal and societal issues continues to push the boundaries of what is possible in music, making Chromakopia a landmark album in his discography.Chromakopia is not just an album; it's a powerful and introspective journey that invites listeners to reflect on their own lives and experiences, making it a profound addition to Tyler, the Creator\'s body of work. 🎨🎶"
      },
      {
        title: "Lyrical Themes",
        description: "Chromakopia delves deeply into Tyler's personal experiences and growth. The album explores themes of self-discovery, identity, love, vulnerability, and resilience. Tyler reflects on his past, addressing struggles with personal demons and the journey to self-acceptance. Tracks like 'Noid' and 'I Killed You' showcase his introspective nature and willingness to confront darker aspects of his life. Songs like 'Darling, I' and 'Take Your Mask Off' focus on the complexities of relationships and the importance of authenticity. Overall, the lyrics offer a raw and honest glimpse into Tyler's evolving mindset and artistic journey."
      }
    ]
  }
};
  
  export default function ChromakopiaAlbum() {
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
  const backgroundUrl = 'https://cdn.inspireuplift.com/uploads/images/seller_products/29661/iu_1721810691_1.jpg';

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

      </Container>
    </Box>
    );
  }
