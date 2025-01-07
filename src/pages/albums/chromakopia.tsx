"use client";
import {
    AspectRatio,
    Badge,
    Box,
    Container,
    Divider,
    Grid,
    Heading,
    HStack,
    Image,
    Text,
    VStack
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
// Add more keyframe animation
  
  const albumData = {
    title: "Chromakopia",
    artist: "Tyler The creator",
    releaseDate: "2024",
    description: `Welcome to the Chromakopia Experience: Immerse yourself in the vibrant world of Tyler, the Creator's latest masterpiece, "Chromakopia". This album blends hip-hop, jazz, and soul, taking you on a sonic journey through Tyler's reflections on his past, present, and future. Narrated by Tyler's mother, Bonita Smith, each track serves as a chapter in his life, addressing themes like maturity, fears of fatherhood, and the impact of materialism. With collaborations from artists like Daniel Caesar, Lil Wayne, and GloRilla, the album offers a rich tapestry of sounds and emotions. Critics have praised its intricate lyricism, cohesive storytelling, and captivating production. Let the music resonate with you as you explore the depths of Tyler's artistic evolution. Enjoy the ride! 🎨🎶`,
    cover: "https://news.artnet.com/app/news-upload/2024/10/tyler-creator-chromakopia-album-1024x1024.jpg",
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
      },
      reviews: [
        {
          id: 1,
          reviewer: "Fantano",
          channelName: "theneedledrop",
          videoUrl: "https://www.youtube.com/embed/U3E2a3fUGAE",
          thumbnail: "/images/reviews/fantano.jpg"
        },
        {
          id: 2,
          reviewer: "Professor Skye",
          channelName: "Professor Skye's Record Review",
          videoUrl: "https://www.youtube.com/embed/cM8gLLR4ngE",
          thumbnail: "/images/reviews/deepcuts.jpg"
        }
      ],
    concerts: [
        {
          id: 1,
          title: "CHROMAKOPIA Live at Camp Flog Gnaw 2024",
          venue: "Madison Square Garden, NYC",
          date: "2024",
          videoUrl: "https://www.youtube.com/embed/XutD0u4W2p8",
          thumbnail: "/images/concerts/msg-opening.jpg"
        },
        // Add more concerts as needed
      ],
      behindTheScenes: [
        {
          id: 1,
          title: "Making of Chromakopia",
          description: "An intimate look into the creative process behind the album",
          videoUrl: "https://www.youtube.com/embed/KvR_QlXaAfU",
          thumbnail: "/images/bts/making-of.jpg"
        },
        // Add more BTS videos as needed
      ],
    albumTeasers: {
        video1: {
          url: "https://www.youtube.com/embed/dL6LM4DyzU8",
          title: "Teasers"
        },
        video: {
            url:"https://www.youtube.com/embed/gkZ4dLMH-B8"
        },
        instagram: {
          // Instagram post URL example: https://www.instagram.com/p/POST_ID/
          url: "https://www.instagram.com/p/DBOvKSFvDFQ",
           title: "Album Announcement Post"
        }
        
      },
      
    tracks: [  
            
    
      {
        id: 1,
        title: "St. Chroma",
        featuring: "Daniel Caesar",
        spotifyId: "1QoyuMHNBe7lg3YW4Qtll4?si=75eae4e20d364641",
        hasVideo: true,
        videoUrl: "https://youtube.com/embed/gkZ4dLMH-B8",
        story: "A soulful opening track featuring Daniel Caesar, exploring themes of spiritual awakening through color and sound. The collaboration brings together two of R&B's most innovative voices."
      },
      {
        id: 2,
        title: "Rah Tah Tah",
        spotifyId: "5RePVWy39tLpHH0WwXgBsK?si=92fc6ebaa7c54a27",
        videoUrl: "your_video_url",
        story: "An energetic and upbeat track that captures the listener's attention with catchy hooks and a vibrant beat. The song showcases Tyler's playful side, combining witty wordplay with a dynamic rhythm that keeps the energy high throughout."
      },
      {
        id: 3,
        title: "Noid",
        spotifyId: "1tnZxHryc2wWtjUZC1LQw5?si=0d3c793901354f850d3c793901354f85",
        hasVideo:true,
        videoUrl: "https://www.youtube.com/embed/Qer3lwd5hyA",
        story: "Serving as the lead single, this track features a groovy bassline and thought-provoking lyrics. Tyler delves into his personal experiences and struggles, reflecting on his journey and growth as an artist. The song's introspective nature makes it a standout piece on the album."
      },
      {
        id: 4,
        title: "Darling, I",
        featuring: "Teezo Touchdown",
        spotifyId: "0VaeksJaXy5R1nvcTMh3Xk?si=12cccde75ddc41be",
    
        videoUrl: "your_video_url",
        story: "Darling, I features Teezo Touchdown and explores the vulnerability of love. The heartfelt duet emphasizes the emotional intricacies of relationships, creating a poignant and relatable listening experience. The harmonies and lyrics delve into the highs and lows of love, making it a standout track on the album"
      },
      {
        id: 5,
        title: "Hey Jane",
        spotifyId: "3Umj02ZNl4d356pS1D38mn?si=b851847e41ab4ea1",
        story: " Hey Jane shifts to a more serene and laid-back atmosphere. With smooth jazz influences and mellow vibes, this track offers a moment of tranquility and introspection. It's a space for listeners to unwind and reflect, providing a soothing counterpoint to the album's more energetic tracks."
      },
      {
        id: 6,
        title: "I Killed You",
        spotifyId: "3GdwjAsCsoE79ObhsJFyYb?si=40da871e4bfd4e4f",
        videoUrl: "your_video_url",
        story: "The darker tones of 'I Killed You present' a stark contrast, with hard-hitting lyrics and a gritty beat. This track exposes Tyler's inner conflicts and personal demons, creating a powerful and haunting listening experience. It's a raw and unfiltered look at the battles we all face within ourselves.."
      },
      {
        id: 7,
        title: "Judge Judy",
        spotifyId: "https://6ie0uyyvOKTTuIFBMPiNIl?si=ebf4bfa097b24d0f",
        story: "'Judge Judy' brings a unique twist with its courtroom theme, featuring witty wordplay and sharp production. Tyler navigates legal metaphors with clever lyricism, showcasing his storytelling abilities and his knack for turning everyday scenarios into compelling musical narratives.."
      },
      {
        id: 8,
        title: "Sticky",
        featuring: "GloRilla, Lil Wayne & Sexyy Red",
        spotifyId: "3tFed7YsjGnIfxeLEQwx3R?si=138ea255f8f24deb",
        hasVideo: true,
        
        story: "'Sticky', featuring GloRilla, Lil Wayne, and Sexyy Red, is a star-studded collaboration that brings together powerful verses from each artist. The dynamic energy and impactful lyrics create a memorable and engaging track, emphasizing the strength found in unity and shared experiences.."
      },
      {
        id: 9,
        title: "Take Your Mask Off",
        featuring: "Daniel Caesar & LaToiya Williams",
        spotifyId: "4BSR9I4ExlCJdXJo2GpBD5",
        story: "In 'Take Your Mask Off', Daniel Caesar and LaToiya Williams join Tyler to encourage authenticity and self-acceptance. The soulful duet is filled with beautiful harmonies and uplifting lyrics, inspiring listeners to embrace their true selves and live without fear of judgment."
      },
      {
        id: 10,
        title: "Tomorrow",
        spotifyId: "your_spotify_track_id",
        videoUrl: "3yw3m8wgRB4ptDyAvtdhq5?si=842f45e1ef0e476e",
        story: "'Tomorrow' offers a beacon of hope and optimism. With uplifting lyrics and a bright melody, this track shines a light on the possibilities of the future, urging listeners to look forward with positivity and confidence."
      },
      {
        id: 11,
        title: "Thought I Was Dead",
        featuring: "Santigold & ScHoolboy Q",
        spotifyId: "2aYHxnMF2umAavtgBvmkY1?si=24c411f35b1149ff",
        story: "The collaboration with Santigold and ScHoolboy Q on 'Thought I Was Dead' addresses themes of resilience and survival. The powerful messages and strong performances from each artist create a compelling track that resonates with the struggles and triumphs of overcoming life's challenges."
      },
      {
        id: 12,
        title: "Like Him",
        featuring: "Lola Young",
        spotifyId: "your_spotify_track_id",
        videoUrl: "your_video_url",
        story: "'Like Him', featuring Lola Young, celebrates identity and individuality. This track explores the importance of staying true to oneself and embracing personal differences, creating an empowering and thought-provoking song that encourages self-discovery and acceptance.."
      },
      {
        id: 13,
        title: "Balloon",
        featuring: "Doechii",
        spotifyId: "your_spotify_track_id",
        story: "'Balloon', with Doechii, adds a whimsical touch to the album. The playful lyrics and airy beat create a light and fun listening experience, showcasing Tyler's versatility and reminding listeners to find joy in the simpler moments of life."
      },
      {
        id: 14,
        title: "I Hope You Find Your Way Home",
        spotifyId: "your_spotify_track_id",
        hasVideo: true,
        videoUrl: "your_video_url",
        story: "The album closes with 'I Hope You Find Your Way Home', a heartfelt and reflective track that leaves listeners with a sense of closure and introspection. Tyler's sincere delivery and poignant lyrics wrap up the album on an emotional note, inviting listeners to reflect on their own journeys and the importance of finding one's path.."
      }
    ]
  };
  
  
  export default function ChromakopiaAlbum() {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);
    const [selectedTrack, setSelectedTrack] = useState(albumData.tracks[0]);
  
  
    return ( <Container maxW="container.xl" py={12}>
        <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={8} mb={12}>
          {/* Album Cover */}
          <Box
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
          </Box>
  
          {/* Album Info */}
          <VStack 
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
          </VStack>
        </Grid>
  
              {/* Album Teasers - Updated Section */}
<Box mb={12}>
  <Heading size="lg" color="white" mb={6}>
    Teasers
  </Heading>
  <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
    {/* YouTube Teaser */}
    {albumData.albumTeasers.video && (
      <Box>
        <Heading size="md" color="white" mb={4}>
        </Heading>
        <AspectRatio ratio={16/9} maxH="480px">
          <iframe
            src={albumData.albumTeasers.video.url}
            title={albumData.albumTeasers.video.title}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ borderRadius: '12px' }}
          />
        </AspectRatio>
      </Box>
    )}
    {/* Instagram Post */}
    {albumData.albumTeasers.instagram && (
      <Box>
        <Heading size="md" color="white" mb={4}>
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
              borderRadius: '12px',
              background: 'white' 
            }}
          />
        </AspectRatio>
      </Box>
    )}
  </Grid>
</Box>
  
        {/* Tracklist and Details */}
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
          {/* Tracklist */}
          <VStack align="stretch" spacing={4}>
            <Heading size="lg" color="white" mb={4}>
              Tracklist
            </Heading>
            {albumData.tracks.map((track) => (
              <Box
                key={track.id}
                p={4}
                bg={selectedTrack.id === track.id ? "whiteAlpha.200" : "whiteAlpha.50"}
                borderRadius="lg"
                cursor="pointer"
                onClick={() => setSelectedTrack(track)}
                transition="all 0.2s"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                <HStack justify="space-between">
                  <VStack align="start" spacing={1}>
                    <Text color="white" fontSize="lg">
                      {track.title}
                      {track.hasVideo && (
                        <Badge ml={2} colorScheme="purple">
                          Video
                        </Badge>
                      )}
                    </Text>
                    {track.featuring && (
                      <Text color="gray.400" fontSize="sm">
                        Featuring {track.featuring}
                      </Text>
                    )}
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
          
          {/* Selected Track Details */}
          <VStack align="stretch" spacing={6}>
            <Heading size="lg" color="white">
              {selectedTrack.title}
            </Heading>
            
            {/* Spotify Embed */}
            <Box bg="whiteAlpha.50" p={4} borderRadius="lg">
              <AspectRatio ratio={16/9} maxH="180px">
                <iframe 
                  src={`https://open.spotify.com/embed/track/${selectedTrack.spotifyId}`}
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allow="encrypted-media"
                />
              </AspectRatio>
            </Box>
  
            {/* Video (if available) */}
            {selectedTrack.hasVideo && (
              <Box>
                <Heading size="md" color="white" mb={4}>
                  Music Video
                </Heading>
                <AspectRatio ratio={16/9}>
                  <iframe
                    src={selectedTrack.videoUrl}
                    title={`${selectedTrack.title} video`}
                    allowFullScreen
                    style={{ borderRadius: '12px' }}
                  />
                </AspectRatio>
              </Box>
            )}

            
            
  
            {/* Story */}
            <Box>
              <Heading size="md" color="white" mb={4}>
                Story
              </Heading>
              <Text color="gray.300" fontSize="lg" lineHeight="tall">
                {selectedTrack.story}
              </Text>
            </Box>
          </VStack>
          
        </Grid>
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
<Box 
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
  <Box 
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
  </Box>

  {/* Key Points */}
  <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} mb={12}>
    {albumData.analysis.keyPoints.map((point, index) => (
      <Box 
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
      </Box>
    ))}
  </Grid>

  {/* YouTuber Reviews */}
  <Box mb={12}>
    <Heading size="lg" color="white" mb={6}>
      Featured Reviews
    </Heading>
    <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
      {albumData.reviews.map((review, index) => (
        <Box 
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
        </Box>
      ))}
    </Grid>
  </Box>
</Box>

      </Container>
            
      
    );
  }
