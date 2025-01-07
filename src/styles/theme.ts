import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Playfair Display, serif',
    body: 'Poppins, sans-serif',
  },
  colors: {
    brand: {
      primary: '#2A2D34',
      accent: '#7C3AED',
      text: {
        primary: '#F3F4F6',
        secondary: '#9CA3AF',
      }
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'lg',
      },
      variants: {
        solid: {
          bg: 'purple.500',
          color: 'white',
          _hover: {
            bg: 'purple.600',
          },
        },
        outline: {
          borderColor: 'purple.500',
          color: 'purple.500',
          _hover: {
            bg: 'whiteAlpha.100',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: 'gray.900',
        color: 'white',
      },
    }),
  },
});

export default theme;