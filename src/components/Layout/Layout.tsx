import { Box, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MusicPlayer from '../Player/MusicPlayer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MotionBox = motion(Box); // Framer Motion wrapper for animations

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MotionBox
      minH="100vh"
      backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRvl7SJhzm5tebYafOafI6YCOwz0d0ko_gA&s')" // Replace with your desired image URL
      backgroundSize="cover"
      backgroundPosition="center"
      initial={{ opacity: 0 }} // Animation starts here
      animate={{ opacity: 1 }} // Animation ends here
      transition={{ duration: 1 }} // Transition duration
    >
      <Navbar />
      <Flex>
        <Sidebar
          _hover={{
            bg: 'gray.700',
            cursor: 'pointer',
          }}
        />
        <MotionBox
          as="main"
          flex="1"
          ml="340px" // Width of sidebar
          mt="60px" // Height of navbar
          pb="100px" // Space for music player
          whileHover={{ scale: 1.02 }} // Slight scaling on hover
        >
          {children}
        </MotionBox>
      </Flex>
      <MusicPlayer />
    </MotionBox>
  );
}
