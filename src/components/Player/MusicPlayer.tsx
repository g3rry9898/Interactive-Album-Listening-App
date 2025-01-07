import {
    Box,
    Flex,
    IconButton,
    Image,
    Progress,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
    FaPause,
    FaPlay,
    FaStepBackward,
    FaStepForward,
    FaVolumeUp,
} from 'react-icons/fa';
  
  export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    
    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.700');
  
    return (
      <Box
        position="fixed"
        bottom={0}
        left={0}
        right={0}
        p={4}
        bg={bgColor}
        borderTop="1px"
        borderColor={borderColor}
        zIndex={1000}
      >
        <Flex align="center" justify="space-between">
          {/* Song Info */}
          <Flex align="center" flex={1} maxW="300px">
            <Image
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120"
              alt="Album cover"
              boxSize="50px"
              objectFit="cover"
              rounded="md"
              mr={3}
            />
            <Box>
              <Text fontWeight="semibold">Song Title</Text>
              <Text fontSize="sm" color="gray.500">Artist Name</Text>
            </Box>
          </Flex>
  
          {/* Controls */}
          <Flex align="center" justify="center" flex={1}>
            <IconButton
              aria-label="Previous song"
              icon={<FaStepBackward />}
              variant="ghost"
              mr={4}
            />
            <IconButton
              aria-label={isPlaying ? 'Pause' : 'Play'}
              icon={isPlaying ? <FaPause /> : <FaPlay />}
              variant="solid"
              colorScheme="purple"
              onClick={() => setIsPlaying(!isPlaying)}
              mx={2}
            />
            <IconButton
              aria-label="Next song"
              icon={<FaStepForward />}
              variant="ghost"
              ml={4}
            />
          </Flex>
  
          {/* Volume & Progress */}
          <Flex align="center" flex={1} maxW="300px" justify="flex-end">
            <IconButton
              aria-label="Volume"
              icon={<FaVolumeUp />}
              variant="ghost"
              size="sm"
            />
          </Flex>
        </Flex>
  
        {/* Progress Bar */}
        <Progress
          value={progress}
          size="xs"
          colorScheme="purple"
          mt={2}
          borderRadius="full"
        />
      </Box>
    );
  }