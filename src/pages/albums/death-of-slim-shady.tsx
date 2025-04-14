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
  useBreakpointValue,
  useDisclosure,
  useToast,
  VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaArrowLeft, FaForward, FaPlay } from 'react-icons/fa';

// Add more keyframe animation
  
interface AlbumData {
  title: string;
  artist: string;
  releaseDate: string;
  description: string;
  cover: string;
  genre: string;
  year: string;
  duration: string;
  rating: number;
  plays: string;
  spotifyEmbed: string;
  youtubeVideos: Array<{
    id: number;
    embedId: string;
    title: string;
  }>;
  analysis: {
    overview: string;
    keyPoints: Array<{
      title: string;
      description: string;
    }>;
  };
  reviews: Array<{
    id: number;
    reviewer: string;
    channelName: string;
    videoUrl: string;
    thumbnail: string;
  }>;
  concerts: Array<{
    id: number;
    title: string;
    venue: string;
    date: string;
    videoUrl: string;
    thumbnail: string;
  }>;
  behindTheScenes: Array<{
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
  }>;
  albumTeasers: {
    videos: Array<{
      url: string;
      title: string;
    }>;
    instagram: {
      url: string;
      title: string;
    };
  };
  tracks: Array<{
    id: number;
    title: string;
    featuring?: string;
    spotifyId?: string;
    hasVideo?: boolean;
    story?: string;
    videoUrl?: string;
  }>;
}

const albumData: AlbumData = {
    title: "The Death Of Slim Shady",
    artist: "Eminem",
    releaseDate: "2024",
  description: `It was a sad day when Slim Shady's alter ego was officially declared dead. The wild, controversial figure who shook up the rap scene is no more. But who killed him? Was it Eminem himself, tired of the chaos, or did Shady just burn out from his own antics? As fans wonder if Shady will ever rise again, we're left with a legacy of outrageous lyrics, unforgettable moments, and a whole lot of cringe-worthy laughs.`,
    cover: "https://upload.wikimedia.org/wikipedia/en/4/4e/Eminem_-_The_Death_of_Slim_Shady_%28Coup_de_Gr%C3%A2ce%29.png?20240719185512",
  genre: "Hip-Hop",
  year: "2024",
  duration: "45:00",
  rating: 4.5,
  plays: "10M",
  spotifyEmbed: "https://open.spotify.com/embed/album/your_album_id",
  youtubeVideos: [
    {
      id: 1,
      embedId: "D2iwFyA73Qw",
      title: "Official Trailer"
    }
  ],
    analysis: {
    overview: `Eminem's The Death of Slim Shady (Coup de Grâce) symbolizes his evolution, shedding the chaotic Slim Shady persona for a more introspective, mature perspective. The album masterfully blends sharp societal critiques with personal reflections, backed by a mix of gritty, modern production styles.`,
        keyPoints: [
          {
            title: "Production Style",
        description: "The production is a masterful blend of old-school grit and modern innovation, with Eminem leading the charge alongside legendary producers like Dr. Dre, Luis Resto, Dem Jointz, Fredwreck, and Cubeatz. From the atmospheric, reflective beats of tracks like 'Renaissance' to the experimental vibes of 'Tobey,'' the soundscape perfectly complements the duality of confrontation and introspection. The beats remain dynamic and versatile, grounding the album's storytelling and delivering a balanced mix of fiery energy and moments of raw vulnerability. Tracks like 'Lucifer' and 'Fuel' highlight Eminem's ability to adapt to evolving music trends while staying true to his roots."
          },
          {
            title: "Cultural Impact",
        description: "Eminem's The Death of Slim Shady (Coup de Grâce) is a monumental work that marks the symbolic end of his Slim Shady persona while embracing a new chapter in his artistry. The album's cultural impact is immense, as it tackles the reconciliation of a controversial past with a more self-aware present. This transition resonates deeply with fans who have followed his journey, offering closure on a persona that once shocked the world and influenced hip-hop culture on a massive scale. The themes of personal growth, accountability, and maturity are central, making it a thought-provoking commentary on fame, legacy, and self-reinvention."
          },
          {
            title: "Lyrical Themes",
        description: "Lyrically, the album delves into themes of rebirth, legacy, and societal critique. Eminem reflects on his career and controversies with unflinching honesty, tackling personal struggles in songs like 'Temporary' and 'Habits' while taking sharp aim at societal hypocrisy in tracks like 'Antichrist' and 'Fuel' The album's closing moments, particularly 'Somebody Save Me' offer a rare glimpse of vulnerability, exploring impermanence and the weight of his legacy. Collectively, The Death of Slim Shady (Coup de Grâce) stands as a bold and poignant declaration of growth, signaling the end of an era while opening the door to a refined and more deliberate chapter in Eminem's career. It's a cultural, lyrical, and musical masterpiece that not only celebrates his evolution but also challenges listeners to reflect on their own growth and perceptions."
          }
        ]
      },
      reviews: [
        {
          id: 1,
          reviewer: "Joe Budden Podcast",
          channelName: "theneedledrop",
          videoUrl: "https://www.youtube.com/embed/D2iwFyA73Qw",
          thumbnail: "/images/reviews/fantano.jpg"
        },
        {
          id: 2,
          reviewer: "Fantasric Hip Hop",
          channelName: "Professor Skye's Record Review",
          videoUrl: "https://www.youtube.com/embed/UoEHjAHdj9E",
          thumbnail: "/images/reviews/deepcuts.jpg"
        }
      ],
    concerts: [
        {
          id: 1,
          title: "live from texas",
          venue: "Madison Square Garden, NYC",
          date: "2024",
          videoUrl: "https://www.youtube.com//embed/DxUyT_N1KeU",
          thumbnail: "/images/concerts/msg-opening.jpg"
    }
      ],
      behindTheScenes: [
        {
          id: 1,
          title: "complex cover behind the scenes",
          description: "An intimate look into the creative process behind the album",
          videoUrl: "https://www.youtube.com/embed/WU1o01NinzY",
          thumbnail: "/images/bts/making-of.jpg"
    }
      ],
      albumTeasers: {
        videos: [
          {
            url: "https://www.youtube.com/embed/5dPXGzyZqI8",
            title: "Announcement"
          },
          {
            url: "https://www.youtube.com/embed/X0HIrS6kUYI",
            title: "The Rebirth of slim shady"
          },
          {
            url: "https://www.youtube.com/embed/X0HIrS6kUYI",
            title: "basement trailer"
          },
          {
             url: "https://www.youtube.com/embed/vOJD-6vQpXU",
            title: "graveyard trailer"
          }
        ],
        instagram: {
          url: "https://www.instagram.com/p/C9Tvv3KRga1/",
          title: "Album Announcement Post"
        }
      }, 
    tracks: [
      {
        id: 1,
        title: "Rennaisaince",
        spotifyId: "55u5QIlEuzCipJBtZPdJio?si=63ef172760984ac0",
        hasVideo: false,
      story: "Alright, first stop: the resurrection, baby! Slim's back from the grave like a fing phoenix on crack. He's basically flipping off the world and yelling, 'Look, bh, I ain't dead—I was just busy plotting my next big middle finger to society!' This ain't a gentle comeback; it's a blazing, unapologetic reentry into the mayhem.",
      videoUrl: "https://www.youtube.com/embed/D2iwFyA73Qw"
      },
      {
        id: 2,
        title: "Habits",
        spotifyId: "7I3RalBqE7ZE0RSxgGlGlm?si=dde5a15717cd4ed2",
      story: "Next up, we enter Slim's personal hell. Here, he's wrestling with his demons like a drunken boxer taking swings at his own shadow. With lines like 'Marshall, you're wicked, face it, you are addicted' Slim's telling us that his vices stick around like annoying party crashers—unwanted yet always there, making his life one wild f***ing mess.",
      videoUrl: "https://www.youtube.com/embed/UoEHjAHdj9E"
      },
      {
        id: 3,
        title: "Trouble",
        spotifyId: "59151GHN7yr5g9B3bqlGdR",
        story: "A track delving into the challenges and obstacles in Eminem's life and career."
      },
      {
        id: 4,
        title: "Brand New Dance",
        spotifyId: "77pfjsq0gSZwO8bYVTVROo",
        story: "A fresh take on Eminem's signature style, showcasing new flows and techniques."
      },
      {
        id: 5,
        title: "Evil",
        spotifyId: "21LCotDEwR7R8qOnqPVzi9",
        story: "A dark and introspective track exploring the concept of evil and its manifestations."
      },
      {
        id: 6,
        title: "All You Got",
        spotifyId: "7y8n4wbMzsLMzTI6Qan02f",
        story: "A skit that provides a moment of reflection and transition in the album."
      },
      {
        id: 7,
        title: "Lucifer",
        featuring: "Sly Pyper",
        spotifyId: "50No7LiVffAJCWIChZodmU",
        story: "A collaboration with Sly Pyper exploring themes of temptation and darkness."
      },
      {
        id: 8,
        title: "Antichrist",
        spotifyId: "0DIcssPpatAMqFXLZCxZMN",
        story: "A powerful track delving into themes of rebellion and self-identity."
      },
      {
        id: 9,
        title: "Fuel",
        featuring: "JID",
        spotifyId: "5In8B6Om5OKrhwBMB4tXSi",
        story: "An aggressive track featuring JID that serves as a metaphor for the energy and drive behind Eminem's career."
      },
      {
        id: 10,
        title: "Road Rage",
        featuring: "Dem Jointz & Sly Pyper",
        spotifyId: "0bBnrokPXtfwXQarqCu1Gz",
        story: "A high-intensity track featuring Dem Jointz and Sly Pyper that channels the anger and frustration that has fueled Eminem's music throughout his career."
      },
      {
        id: 11,
        title: "Houdini",
        spotifyId: "1CDQzbCz4KSQxHe7LMEgRM",
        hasVideo: true,
        videoUrl: "https://www.youtube.com/embed/22tVWwmTie8",
        story: "A metaphorical track about disappearing acts and transformations, showcasing Eminem's signature wordplay."
      },
      {
        id: 12,
        title: "Breaking News",
        spotifyId: "0TDXeyH0hdiz0SZQo5w1nm",
        story: "A skit that provides commentary on media and public perception."
      },
      {
        id: 13,
        title: "Guilty Conscience 2",
        spotifyId: "3LkXOTWDwskwciQoARFDzu",
        hasVideo: true,
        story: "A sequel to the classic track, revisiting the concept of moral dilemmas.",
        videoUrl:"https://www.youtube.com/embed/E3uMSsgd6N8"
      },
      {
        id: 14,
        title: "Head Honcho",
        featuring: "Ez Mil",
        spotifyId: "7GXOXYdU950eRvk5rUAE8F",
        story: "A collaboration with Ez Mil exploring themes of leadership and authority."
      },
      {
        id: 15,
        title: "Temporary",
        featuring: "Skylar Grey", 
        spotifyId: "6uMGHQvhZq8YyT4kdnG1L3",
        hasVideo: true,
        videoUrl:"https://www.youtube.com/embed/ZaK9Wi5ho0o",
        story: "A vulnerable track featuring Skylar Grey, exploring the transient nature of life and relationships."
      },
      {
        id: 16,
        title: "Bad One",
        featuring: "White Gold",
        spotifyId: "15qnOSRK5HMWOgL5HURhrc",
        story: "Another collaboration with White Gold, exploring themes of mistakes and redemption."
      },
      {
        id: 17,
        title: "Tobey",
        featuring: "Big Sean & BabyTron",
        spotifyId: "1ymWIr4E5x6xORlDO0bXlP",
        hasVideo: true,
        videoUrl: "https://www.youtube.com/embed/CanCZktm0TQ",
        story: "A high-energy collaboration featuring Big Sean and BabyTron, with references to Spider-Man and comic book culture."
      },
      {
        id: 18,
        title: "Guess Who's Back",
        spotifyId: "0cyN7uQYxTlqwgyh6rm1IH",
        story: "A skit that marks the return of Eminem's iconic persona."
      },
      {
        id: 19,
        title: "Somebody Save Me",
        featuring: "Jelly Roll",
        spotifyId: "4HMUrFl8y6rQCzEbaGEkcj",
        hasVideo: true,
        videoUrl: "https://www.youtube.com/embed/Vwa0HenQMi4",
        story: "A vulnerable track featuring Jelly Roll, exploring themes of redemption and salvation."
      }
    ]
};
  
  
export default function DeathOfSlimShadyAlbum() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState(albumData.tracks[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null);
  const [showTrackPreview, setShowTrackPreview] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const toast = useToast();
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);
  const backgroundUrl = 'https://wallpapercave.com/wp/wp10100175.jpg';

    const MotionBox = motion(Box);
    const MotionVStack = motion(VStack);
    
  const handleBackToDiscover = () => {
    router.push('/discover');
  };

  const handleBack = () => {
    router.push('/albums');
  };

  const handleNextAlbum = () => {
    router.push('/albums/chromakopia');
  };

  const handlePreviousAlbum = () => {
    router.push('/albums/eminem-music-to-be-murdered-by');
  };

  const handlePlayAlbum = () => {
    setIsPlaying(true);
    setSelectedTrack(albumData.tracks[0]);
    setCurrentTrackIndex(0);
    toast({
      title: "Album started playing",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % albumData.tracks.length;
    setCurrentTrackIndex(nextIndex);
    setSelectedTrack(albumData.tracks[nextIndex]);
    toast({
      title: `Playing: ${albumData.tracks[nextIndex].title}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleTrackClick = (track: typeof albumData.tracks[0], index: number) => {
    setSelectedTrack(track);
    setCurrentTrackIndex(index);
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
    <Container maxW="container.xl" py={12}>
        {/* Back to Discover Button */}
        <Button
          position="absolute"
          top={4}
          left={4}
          colorScheme="purple"
          variant="outline"
          onClick={handleBackToDiscover}
          leftIcon={<Icon as={FaArrowLeft} />}
          _hover={{
            bg: "purple.500",
            color: "white",
          }}
        >
          Back to Discover
        </Button>

        <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={8} mb={12}>
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
  
        {/* Album Teasers */}
<Box mb={12}>
  <Heading size="lg" color="white" mb={6}>
    Teasers
  </Heading>
  <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
    {albumData.albumTeasers.videos?.map((video, index) => (
      <Box key={index}>
        <Heading size="md" color="white" mb={4}>
          {video.title}
        </Heading>
        <AspectRatio ratio={16 / 9} maxH="480px">
          <iframe
            src={video.url}
            title={video.title}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: "12px" }}
          />
        </AspectRatio>
      </Box>
    ))}
    {albumData.albumTeasers.instagram && (
      <Box>
        <Heading size="md" color="white" mb={4}>
          {albumData.albumTeasers.instagram.title}
        </Heading>
        <AspectRatio ratio={1} maxW="550px">
          <iframe
            src={`https://www.instagram.com/p/${albumData.albumTeasers.instagram.url.split('/p/')[1].split('/')[0]}/embed/captioned`}
            title={albumData.albumTeasers.instagram.title}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="yes"
            allowTransparency
            style={{
              borderRadius: "12px",
              background: "white"
            }}
          />
        </AspectRatio>
      </Box>
    )}
  </Grid>
</Box>

        {/* Track List */}
        <Box>
            <Heading size="lg" color="white" mb={4}>
              Tracklist
            </Heading>
          <VStack spacing={4} w="100%">
            {albumData.tracks.map((track, index) => (
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
                onClick={() => handleTrackClick(track, index)}
              >
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
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
                    {track.hasVideo && track.videoUrl && (
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

            {/* Concerts & Behind The Scenes */}
<Box mt={16}>
  {/* Concerts Section */}
  <Box mb={12}>
    <Heading size="xl" color="white" mb={6}>
      Concert Highlights
    </Heading>
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
      {albumData.concerts.map((concert) => (
        <Box 
          key={concert.id}
          bg="whiteAlpha.50"
          borderRadius="xl"
          overflow="hidden"
        >
          <AspectRatio ratio={16/9}>
            <iframe
              src={concert.videoUrl}
              title={concert.title}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
          <Box p={4}>
            <Heading size="md" color="white" mb={2}>
              {concert.title}
            </Heading>
            <HStack spacing={2} color="gray.400">
              <Text>{concert.venue}</Text>
              <Text>•</Text>
              <Text>{concert.date}</Text>
            </HStack>
            </Box>
        </Box>
      ))}
    </Grid>
  </Box>

  {/* Behind The Scenes Section */}
  <Box>
    <Heading size="xl" color="white" mb={6}>
      Behind The Scenes
    </Heading>
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
      {albumData.behindTheScenes.map((bts) => (
        <Box 
          key={bts.id}
          bg="whiteAlpha.50"
          borderRadius="xl"
          overflow="hidden"
        >
          <AspectRatio ratio={16/9}>
            <iframe
              src={bts.videoUrl}
              title={bts.title}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
          <Box p={4}>
            <Heading size="md" color="white" mb={2}>
              {bts.title}
            </Heading>
            <Text color="gray.400" noOfLines={2}>
            {bts.description}
            </Text>
          </Box>
        </Box>
      ))}
    </Grid>
  </Box>
</Box>

{/* Album Analysis Section */}
<MotionBox 
  mt={16} 
  as={motion.div}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Heading size="xl" color="white" mb={8}>
    Album Analysis
  </Heading>

  {/* Overview */}
  <MotionBox 
    bg="whiteAlpha.50" 
    p={6} 
    borderRadius="xl" 
    mb={8}
    as={motion.div}
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.2 }}
  >
    <Text color="gray.300" fontSize="lg" lineHeight="tall">
      {albumData.analysis.overview}
    </Text>
  </MotionBox>

  {/* Key Points */}
  <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} mb={12}>
    {albumData.analysis.keyPoints.map((point, index) => (
      <MotionBox 
        key={point.title}
        bg="whiteAlpha.50"
        p={6}
        borderRadius="xl"
        as={motion.div}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ 
          scale: 1.03,
          backgroundColor: "rgba(255, 255, 255, 0.08)" 
        }}
      >
        <Heading size="md" color="white" mb={3}>
          {point.title}
        </Heading>
        <Text color="gray.300">
          {point.description}
        </Text>
      </MotionBox>
    ))}
  </Grid>

  {/* YouTuber Reviews */}
  <Box mb={12}>
    <Heading size="lg" color="white" mb={6}>
      Featured Reviews
    </Heading>
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
      {albumData.reviews.map((review, index) => (
        <MotionBox 
          key={review.id}
          bg="whiteAlpha.50"
          borderRadius="xl"
          overflow="hidden"
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          whileHover={{ 
            scale: 1.02,
            backgroundColor: "rgba(255, 255, 255, 0.08)" 
          }}
        >
          <AspectRatio ratio={16/9}>
            <iframe
              src={review.videoUrl}
              title={`${review.reviewer}'s Review`}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
          <Box p={4}>
            <Heading size="md" color="white" mb={2}>
              {review.reviewer}'s Review
            </Heading>
            <Text color="gray.400">
              {review.channelName}
            </Text>
          </Box>
        </MotionBox>
      ))}
    </Grid>
  </Box>
</MotionBox>
      </Container>
</Box>
    );
  }