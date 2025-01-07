// components/ChromakopiaCard.tsx
import {
    Box,
    Image,
    Skeleton,
    Text,
    VStack,
    keyframes,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
  
  const shine = keyframes`
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  `;
  
  export default function ChromakopiaCard({ onClick }) {
    return (
      <Box
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        cursor="pointer"
        onClick={onClick}
      >
        <VStack
          spacing={4}
          p={4}
          bg="rgba(255, 255, 255, 0.05)"
          borderRadius="xl"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #FF0080, #7928CA, #FF0080)',
            backgroundSize: '200% 100%',
            animation: `${shine} 3s linear infinite`,
          }}
        >
          {/* Image Container */}
          <Box
            position="relative"
            w="full"
            h="200px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src="https://media.pitchfork.com/photos/65c5595464d17e8aa2d2678b/1:1/w_800,h_800,c_limit/Tyler-the-Creator-CALL-ME-IF-YOU-GET-LOST_-The-Estate-Sale.jpg"
              alt="Chromakopia"
              w="full"
              h="full"
              objectFit="cover"
              transition="all 0.3s ease"
              _hover={{ transform: 'scale(1.05)' }}
              fallback={
                <Skeleton
                  w="full"
                  h="full"
                  startColor="whiteAlpha.100"
                  endColor="whiteAlpha.300"
                />
              }
            />
            {/* Gradient Overlay */}
            <Box
              position="absolute"
              inset={0}
              bg="linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
              opacity={0}
              transition="opacity 0.3s"
              _groupHover={{ opacity: 1 }}
            />
          </Box>
  
          {/* Text Content */}
          <VStack spacing={2} zIndex={1}>
            <Text
              color="white"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Chromakopia
            </Text>
            <Text 
              color="gray.400"
              fontSize="md"
            >
              Tyler The Creator
            </Text>
            <Box
              px={3}
              py={1}
              bg="purple.500"
              color="white"
              borderRadius="full"
              fontSize="sm"
              fontWeight="medium"
            >
              Hip-Hop
            </Box>
          </VStack>
  
          {/* Animated Border */}
          <Box
            position="absolute"
            inset={0}
            borderRadius="xl"
            padding="1px"
            background="linear-gradient(45deg, #FF0080, #7928CA, #FF0080)"
            backgroundSize="200% 200%"
            animation={`${shine} 3s linear infinite`}
            opacity={0.5}
            pointerEvents="none"
          />
        </VStack>
      </Box>
    );
  }