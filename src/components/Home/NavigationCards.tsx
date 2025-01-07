import { Box, Grid, Icon, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaChartLine, FaCompactDisc, FaCompass, FaHeart } from 'react-icons/fa';

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
    path: '/top-albums',
    featuredAlbums: [
      'Chromakopia',
      'Death of Slim Shady',
      'GNX',
      "We Don't Trust You"
    ]
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

export default function NavigationCards() {
  const router = useRouter();

  return (
    <Grid 
      templateColumns={{ 
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)" 
      }}
      gap={6}
    >
      {navigationItems.map((item) => (
        <Box
          key={item.title}
          position="relative"
          h="200px"
          cursor="pointer"
          onClick={() => router.push(item.path)}
          overflow="hidden"
          borderRadius="xl"
          bgGradient={item.gradient}
          transition="all 0.3s"
          _hover={{
            transform: 'translateY(-8px)',
            boxShadow: '2xl',
          }}
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.400"
            transition="all 0.3s"
            _hover={{ bg: "blackAlpha.200" }}
          />
          
          <VStack
            position="relative"
            justify="center"
            align="center"
            h="full"
            spacing={4}
            p={6}
          >
            <Icon 
              as={item.icon} 
              w={12} 
              h={12} 
              color="white" 
            />
            <Text
              fontSize="xl"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              {item.title}
            </Text>
            <Text
              color="whiteAlpha.900"
              fontSize="sm"
            >
              {item.description}
            </Text>
          </VStack>
        </Box>
      ))}
    </Grid>
  );
}