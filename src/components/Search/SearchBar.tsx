import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Kbd,
    Spinner,
    Text,
    useColorModeValue,
    VStack
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaFire, FaHistory } from 'react-icons/fa';
  
  const MotionBox = motion(Box);
  
  export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);
    const searchRef = useRef(null);
  
    const bgColor = useColorModeValue('gray.800', 'gray.900');
    const hoverBg = useColorModeValue('gray.700', 'gray.800');
  
    // Mock recent searches
    const recentSearches = [
      'Eminem - Death of Slim Shady',
      'Hip Hop Playlist',
      'Top Charts 2024'
    ];
  
    // Mock trending searches
    const trendingSearches = [
      'New Rap Albums',
      'Best of Eminem',
      'Trending Hip Hop'
    ];
  
    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === '/' && e.ctrlKey) {
          e.preventDefault();
          inputRef.current?.focus();
        }
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };
  
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);
  
    // Handle search input
    const handleSearch = (value: string) => {
      setQuery(value);
      if (value) {
        setIsLoading(true);
        setIsOpen(true);
        // Simulate API call
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } else {
        setIsOpen(false);
      }
    };
  
    return (
      <Box ref={searchRef} position="relative" maxW="600px" mx="auto">
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="red.500" />
          </InputLeftElement>
          <Input
            ref={inputRef}
            placeholder="Search music, artists, albums..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsOpen(true)}
            bg="gray.800"
            border="none"
            _hover={{ bg: 'gray.700' }}
            _focus={{
              bg: 'gray.700',
              boxShadow: '0 0 0 1px #FF0000'
            }}
          />
          <InputRightElement width="4.5rem">
            {query ? (
              <IconButton
                h="1.75rem"
                size="sm"
                aria-label="Clear search"
                icon={<CloseIcon />}
                onClick={() => {
                  setQuery('');
                  setIsOpen(false);
                }}
              />
            ) : (
              <Kbd>Ctrl + /</Kbd>
            )}
          </InputRightElement>
        </InputGroup>
  
        <AnimatePresence>
          {isOpen && (
            <MotionBox
              position="absolute"
              top="100%"
              left="0"
              right="0"
              mt={2}
              bg={bgColor}
              borderRadius="xl"
              boxShadow="2xl"
              zIndex={1000}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              overflow="hidden"
            >
              <VStack spacing={0} align="stretch" maxH="400px" overflowY="auto">
                {isLoading ? (
                  <Flex justify="center" p={4}>
                    <Spinner color="red.500" />
                  </Flex>
                ) : query ? (
                  <SearchResults query={query} />
                ) : (
                  <>
                    <Box p={4}>
                      <Text fontWeight="bold" mb={2}>
                        <Icon as={FaHistory} mr={2} />
                        Recent Searches
                      </Text>
                      {recentSearches.map((search) => (
                        <SearchItem key={search} text={search} />
                      ))}
                    </Box>
                    <Box p={4} borderTop="1px" borderColor="gray.700">
                      <Text fontWeight="bold" mb={2}>
                        <Icon as={FaFire} mr={2} />
                        Trending
                      </Text>
                      {trendingSearches.map((search) => (
                        <SearchItem key={search} text={search} />
                      ))}
                    </Box>
                  </>
                )}
              </VStack>
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
    );
  }
  
  function SearchItem({ text }: { text: string }) {
    return (
      <Box
        p={2}
        borderRadius="md"
        cursor="pointer"
        _hover={{ bg: 'gray.700' }}
        transition="background 0.2s"
      >
        <Text>{text}</Text>
      </Box>
    );
  }
  
  function SearchResults({ query }: { query: string }) {
    return (
      <Box p={4}>
        <Text mb={4}>
          Showing results for "{query}"...
        </Text>
        {/* Add your search results here */}
      </Box>
    );
  }