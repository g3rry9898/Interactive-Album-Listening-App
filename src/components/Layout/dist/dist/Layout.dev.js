"use strict";

exports.__esModule = true;

var react_1 = require("@chakra-ui/react");

var framer_motion_1 = require("framer-motion");

var MusicPlayer_1 = require("../Player/MusicPlayer");

var Navbar_1 = require("./Navbar");

var Sidebar_1 = require("./Sidebar");

var MotionBox = framer_motion_1.motion(react_1.Box); // Framer Motion wrapper for animations

function Layout(_a) {
  var children = _a.children;
  return React.createElement(MotionBox, {
    minH: "100vh",
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShRvl7SJhzm5tebYafOafI6YCOwz0d0ko_gA&s')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    initial: {
      opacity: 0
    },
    // Animation starts
    animate: {
      opacity: 1
    },
    // Animation ends
    transition: {
      duration: 1
    } // Transition duration

  }, React.createElement(Navbar_1["default"], null), React.createElement(react_1.Flex, null, React.createElement(Sidebar_1["default"], {
    _hover: {
      bg: 'gray.700',
      cursor: 'pointer' // Hover effect for the sidebar 

    }
  }), React.createElement(MotionBox, {
    as: "main",
    flex: "1",
    ml: "240px",
    // Width of sidebar
    mt: "60px",
    // Height of navbar
    pb: "100px",
    // Space for music player
    whileHover: {
      scale: 1.02
    } // Scaling effect on hover

  }, children)), React.createElement(MusicPlayer_1["default"], null));
}

exports["default"] = Layout;