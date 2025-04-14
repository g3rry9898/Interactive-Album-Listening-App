import Login from '@/components/Auth/Login';
import TrendingChart from '@/components/Home/TrendingChart';
import {
    AspectRatio,
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    Icon,
    Image,
    SimpleGrid,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
    useToast,
    VStack
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FaChartLine, FaCompactDisc, FaCompass, FaHeart, FaPlay } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const navigationItems = [
  {
    title: 'Discover',
    icon: FaCompass,
    description: 'Find new music',
    gradient: 'linear(to-r, #FF0080, #7928CA)',
    path: '/discover'
  },
  {
    title: 'Top Albums',
    icon: FaCompactDisc,
    description: 'Featured Releases',
    gradient: 'linear(to-r, #00C9FF, #92FE9D)',
    path: '/top-albums'
  },
  {
    title: 'Trending',
    icon: FaChartLine,
    description: 'Most Popular',
    gradient: 'linear(to-r, #FF0000, #FF8C00)',
    path: '/trending'
  },
  {
    title: 'Library',
    icon: FaHeart,
    description: 'Your Collection',
    gradient: 'linear(to-r, #8E2DE2, #4A00E0)',
    path: '/library'
  }
];

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();
  const bgGradient = useColorModeValue(
    'linear(to-r, green.500, teal.500)',
    'linear(to-r, green.400, teal.400)'
  );
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleStartListening = () => {
    router.push('/discover');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
    return (
    <Box
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
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
        bg="green.900"
        opacity={0.8}
        zIndex={0}
      />
      <Container maxW="container.xl" py={12} position="relative" zIndex={1}>
        <VStack spacing={8} align="center" textAlign="center" py={24}>
          <MotionBox
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading size="4xl" color="white" mb={4}>
              Discover Your Next Favorite Album
            </Heading>
            <Text color="gray.300" fontSize="xl" maxW="2xl" mx="auto">
              Explore a world of music with our curated collection of albums. From chart-topping hits to hidden gems, find your next musical obsession.
            </Text>
          </MotionBox>

          <MotionBox
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              colorScheme="purple"
              size="lg"
              onClick={handleStartListening}
              leftIcon={<Icon as={FaPlay} />}
            >
              Start Listening
            </Button>
          </MotionBox>
          </VStack>
      </Container>
  
      <Container maxW="container.xl" py={12}>
        {/* Quick Access Section */}
          <Box mb={16}>
            <Heading size="xl" color="white" mb={8}>
            Quick Access
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {navigationItems.map((item) => (
              <MotionBox
                key={item.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                cursor="pointer"
                onClick={() => router.push(item.path)}
              >
                <Box
                  p={6}
                  bg="gray.800"
                  borderRadius="lg"
                  _hover={{ bg: 'gray.700' }}
                  transition="all 0.2s"
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: item.gradient,
                    opacity: 0.1,
                  }}
                >
                  <Icon as={item.icon} w={8} h={8} color="white" mb={4} />
                  <Heading size="md" color="white" mb={2}>
                    {item.title}
            </Heading>
                  <Text color="gray.400">
                    {item.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
          </Box>
  
          {/* Trending Section */}
          <Box>
            <Heading size="xl" color="white" mb={8}>
              Top Trending
            </Heading>
            <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
              <TrendingChart />
            </Grid>
          </Box>

        {/* Featured Artist Section */}
        <Box mt={16}>
          <Heading size="xl" color="white" mb={8}>
            Featured Artist
          </Heading>
          <MotionBox
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AspectRatio ratio={16/9}>
              <Image
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Featured Artist"
                borderRadius="lg"
                objectFit="cover"
              />
            </AspectRatio>
          </MotionBox>
          </Box>
        </Container>
  
        {/* Login Modal */}
        <Login isOpen={isOpen} onClose={onClose} />
      </Box>
    );
  }


