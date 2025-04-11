"use strict";
exports.__esModule = true;
var icons_1 = require("@chakra-ui/icons");
var react_1 = require("@chakra-ui/react");
var framer_motion_1 = require("framer-motion");
var react_2 = require("react");
var fa_1 = require("react-icons/fa");
var MotionBox = framer_motion_1.motion(react_1.Box);
function SearchBar() {
    var _a = react_2.useState(''), query = _a[0], setQuery = _a[1];
    var _b = react_2.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_2.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var inputRef = react_2.useRef(null);
    var searchRef = react_2.useRef(null);
    var bgColor = react_1.useColorModeValue('gray.800', 'gray.900');
    var hoverBg = react_1.useColorModeValue('gray.700', 'gray.800');
    // Mock recent searches
    var recentSearches = [
        'Eminem - Death of Slim Shady',
        'Hip Hop Playlist',
        'Top Charts 2024'
    ];
    // Mock trending searches
    var trendingSearches = [
        'New Rap Albums',
        'Best of Eminem',
        'Trending Hip Hop'
    ];
    react_2.useEffect(function () {
        var handleKeyPress = function (e) {
            var _a;
            if (e.key === '/' && e.ctrlKey) {
                e.preventDefault();
                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyPress);
        return function () { return window.removeEventListener('keydown', handleKeyPress); };
    }, []);
    // Handle search input
    var handleSearch = function (value) {
        setQuery(value);
        if (value) {
            setIsLoading(true);
            setIsOpen(true);
            // Simulate API call
            setTimeout(function () {
                setIsLoading(false);
            }, 500);
        }
        else {
            setIsOpen(false);
        }
    };
    return (React.createElement(react_1.Box, { ref: searchRef, position: "relative", maxW: "600px", mx: "auto" },
        React.createElement(react_1.InputGroup, { size: "lg" },
            React.createElement(react_1.InputLeftElement, { pointerEvents: "none" },
                React.createElement(icons_1.SearchIcon, { color: "red.500" })),
            React.createElement(react_1.Input, { ref: inputRef, placeholder: "Search music, artists, albums...", value: query, onChange: function (e) { return handleSearch(e.target.value); }, onFocus: function () { return setIsOpen(true); }, bg: "gray.800", border: "none", _hover: { bg: 'gray.700' }, _focus: {
                    bg: 'gray.700',
                    boxShadow: '0 0 0 1px #FF0000'
                } }),
            React.createElement(react_1.InputRightElement, { width: "4.5rem" }, query ? (React.createElement(react_1.IconButton, { h: "1.75rem", size: "sm", "aria-label": "Clear search", icon: React.createElement(icons_1.CloseIcon, null), onClick: function () {
                    setQuery('');
                    setIsOpen(false);
                } })) : (React.createElement(react_1.Kbd, null, "Ctrl + /")))),
        React.createElement(framer_motion_1.AnimatePresence, null, isOpen && (React.createElement(MotionBox, { position: "absolute", top: "100%", left: "0", right: "0", mt: 2, bg: bgColor, borderRadius: "xl", boxShadow: "2xl", zIndex: 1000, initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, overflow: "hidden" },
            React.createElement(react_1.VStack, { spacing: 0, align: "stretch", maxH: "400px", overflowY: "auto" }, isLoading ? (React.createElement(react_1.Flex, { justify: "center", p: 4 },
                React.createElement(react_1.Spinner, { color: "red.500" }))) : query ? (React.createElement(SearchResults, { query: query })) : (React.createElement(React.Fragment, null,
                React.createElement(react_1.Box, { p: 4 },
                    React.createElement(react_1.Text, { fontWeight: "bold", mb: 2 },
                        React.createElement(react_1.Icon, { as: fa_1.FaHistory, mr: 2 }),
                        "Recent Searches"),
                    recentSearches.map(function (search) { return (React.createElement(SearchItem, { key: search, text: search })); })),
                React.createElement(react_1.Box, { p: 4, borderTop: "1px", borderColor: "gray.700" },
                    React.createElement(react_1.Text, { fontWeight: "bold", mb: 2 },
                        React.createElement(react_1.Icon, { as: fa_1.FaFire, mr: 2 }),
                        "Trending"),
                    trendingSearches.map(function (search) { return (React.createElement(SearchItem, { key: search, text: search })); }))))))))));
}
exports["default"] = SearchBar;
function SearchItem(_a) {
    var text = _a.text;
    return (React.createElement(react_1.Box, { p: 2, borderRadius: "md", cursor: "pointer", _hover: { bg: 'gray.700' }, transition: "background 0.2s" },
        React.createElement(react_1.Text, null, text)));
}
function SearchResults(_a) {
    var query = _a.query;
    return (React.createElement(react_1.Box, { p: 4 },
        React.createElement(react_1.Text, { mb: 4 },
            "Showing results for \"",
            query,
            "\"...")));
}
