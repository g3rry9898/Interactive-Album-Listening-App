"use strict";
exports.__esModule = true;
var Login_1 = require("@/components/Auth/Login");
var NavigationCards_1 = require("@/components/Home/NavigationCards");
var TrendingChart_1 = require("@/components/Home/TrendingChart");
var SearchBar_1 = require("@/components/Search/SearchBar");
var react_1 = require("@chakra-ui/react");
function HomePage() {
    var _a = react_1.useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    return (React.createElement(react_1.Box, { minH: "100vh", bg: "gray.900" },
        React.createElement(react_1.Flex, { justify: "space-between", align: "center", p: 6, borderBottom: "1px", borderColor: "whiteAlpha.200" },
            React.createElement(react_1.Button, { onClick: onOpen, colorScheme: "purple", size: "md", fontWeight: "semibold" }, "Login / Sign Up"),
            React.createElement(SearchBar_1["default"], null)),
        React.createElement(react_1.Container, { maxW: "container.xl", py: 12 },
            React.createElement(react_1.VStack, { spacing: 8, mb: 16, textAlign: "center" },
                React.createElement(react_1.Heading, { size: "2xl", bgGradient: "linear(to-r, purple.400, pink.400)", bgClip: "text" }, "Interactive Album Litsening"),
                React.createElement(react_1.Text, { color: "gray.400", fontSize: "xl" }, "Get the full album expirience and immerse yourself to the story it's telling")),
            React.createElement(react_1.Box, { mb: 16 },
                React.createElement(react_1.Heading, { size: "xl", color: "white", mb: 8 }, "Featured Albums"),
                React.createElement(NavigationCards_1["default"], null)),
            React.createElement(react_1.Box, null,
                React.createElement(react_1.Heading, { size: "xl", color: "white", mb: 8 }, "Top Trending"),
                React.createElement(react_1.Grid, { templateColumns: { base: "1fr", lg: "2fr 1fr" }, gap: 8 },
                    React.createElement(TrendingChart_1["default"], null)))),
        React.createElement(Login_1["default"], { isOpen: isOpen, onClose: onClose })));
}
exports["default"] = HomePage;
