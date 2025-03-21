"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var framer_motion_1 = require("framer-motion");
var react_2 = require("react");
// Add more keyframe animation
var albumData = {
    title: "The Death Of Slim Shady",
    artist: "Eminem",
    releaseDate: "2024",
    description: "It was a sad day when Slim Shady\u2019s alter ego was officially declared dead. The wild, controversial figure who shook up the rap scene is no more. But who killed him? Was it Eminem himself, tired of the chaos, or did Shady just burn out from his own antics? As fans wonder if Shady will ever rise again, we\u2019re left with a legacy of outrageous lyrics, unforgettable moments, and a whole lot of cringe-worthy laughs'.\n",
    cover: "https://upload.wikimedia.org/wikipedia/en/4/4e/Eminem_-_The_Death_of_Slim_Shady_%28Coup_de_Gr%C3%A2ce%29.png?20240719185512",
    analysis: {
        overview: "Eminem's The Death of Slim Shady (Coup de Gr\u00E2ce) symbolizes his evolution, shedding the chaotic Slim Shady persona for a more introspective, mature perspective. The album masterfully blends sharp societal critiques with personal reflections, backed by a mix of gritty, modern production styles.\n\n",
        keyPoints: [
            {
                title: "Production Style",
                description: "The production is a masterful blend of old-school grit and modern innovation, with Eminem leading the charge alongside legendary producers like Dr. Dre, Luis Resto, Dem Jointz, Fredwreck, and Cubeatz. From the atmospheric, reflective beats of tracks like 'Renaissance' to the experimental vibes of 'Tobey,'' the soundscape perfectly complements the duality of confrontation and introspection. The beats remain dynamic and versatile, grounding the album’s storytelling and delivering a balanced mix of fiery energy and moments of raw vulnerability. Tracks like 'Lucifer' and 'Fuel' highlight Eminem's ability to adapt to evolving music trends while staying true to his roots."
            },
            {
                title: "Cultural Impact",
                description: "Eminem’s The Death of Slim Shady (Coup de Grâce) is a monumental work that marks the symbolic end of his Slim Shady persona while embracing a new chapter in his artistry. The album’s cultural impact is immense, as it tackles the reconciliation of a controversial past with a more self-aware present. This transition resonates deeply with fans who have followed his journey, offering closure on a persona that once shocked the world and influenced hip-hop culture on a massive scale. The themes of personal growth, accountability, and maturity are central, making it a thought-provoking commentary on fame, legacy, and self-reinvention."
            },
            {
                title: "Lyrical Themes",
                description: "Lyrically, the album delves into themes of rebirth, legacy, and societal critique. Eminem reflects on his career and controversies with unflinching honesty, tackling personal struggles in songs like 'Temporary' and 'Habits' while taking sharp aim at societal hypocrisy in tracks like 'Antichrist' and 'Fuel' The album’s closing moments, particularly 'Somebody Save Me' offer a rare glimpse of vulnerability, exploring impermanence and the weight of his legacy. Collectively, The Death of Slim Shady (Coup de Grâce) stands as a bold and poignant declaration of growth, signaling the end of an era while opening the door to a refined and more deliberate chapter in Eminem’s career. It’s a cultural, lyrical, and musical masterpiece that not only celebrates his evolution but also challenges listeners to reflect on their own growth and perceptions."
            }
        ]
    },
    reviews: [
        {
            id: 1,
            reviewer: "Joe Budden Podcast",
            channelName: "theneedledrop",
            videoUrl: "https://www.youtube.com/embed/D2iwFyA73Qw",
            thumbnail: "/images/reviews/fantano.jpg"
        },
        {
            id: 2,
            reviewer: "Fantasric Hip Hop",
            channelName: "Professor Skye's Record Review",
            videoUrl: "https://www.youtube.com/embed/UoEHjAHdj9E",
            thumbnail: "/images/reviews/deepcuts.jpg"
        }
    ],
    concerts: [
        {
            id: 1,
            title: "live from texas",
            venue: "Madison Square Garden, NYC",
            date: "2024",
            videoUrl: "https://www.youtube.com//embed/DxUyT_N1KeU",
            thumbnail: "/images/concerts/msg-opening.jpg"
        },
    ],
    behindTheScenes: [
        {
            id: 1,
            title: "complex cover behind the scenes",
            description: "An intimate look into the creative process behind the album",
            videoUrl: "https://www.youtube.com/embed/WU1o01NinzY",
            thumbnail: "/images/bts/making-of.jpg"
        },
    ],
    albumTeasers: {
        videos: [
            {
                url: "https://www.youtube.com/embed/5dPXGzyZqI8",
                title: "Announcement"
            },
            {
                url: "https://www.youtube.com/embed/X0HIrS6kUYI",
                title: "The Rebirth of slim shady"
            },
            {
                url: "https://www.youtube.com/embed/X0HIrS6kUYI",
                title: "basement trailer"
            },
            {
                url: "https://www.youtube.com/embed/vOJD-6vQpXU",
                title: "graveyard trailer"
            }
        ],
        instagram: {
            url: "https://www.instagram.com/p/C9Tvv3KRga1/",
            title: "Album Announcement Post"
        }
    },
    tracks: [
        {
            id: 1,
            title: "Rennaisaince",
            featuring: "Daniel Caesar",
            spotifyId: "55u5QIlEuzCipJBtZPdJio?si=63ef172760984ac0",
            hasVideo: false,
            story: "Alright, first stop: the resurrection, baby! Slim’s back from the grave like a fing phoenix on crack. He’s basically flipping off the world and yelling, “Look, bh, I ain’t dead—I was just busy plotting my next big middle finger to society!” This ain’t a gentle comeback; it’s a blazing, unapologetic reentry into the mayhem."
        },
        {
            id: 2,
            title: "Habits",
            spotifyId: "7I3RalBqE7ZE0RSxgGlGlm?si=dde5a15717cd4ed2",
            videoUrl: "your_video_url",
            story: "Next up, we enter Slim’s personal hell. Here, he’s wrestling with his demons like a drunken boxer taking swings at his own shadow. With lines like 'Marshall, you're wicked, face it, you are addicted' Slim’s telling us that his vices stick around like annoying party crashers—unwanted yet always there, making his life one wild f***ing mess."
        },
        {
            id: 3,
            title: " Trouble",
            spotifyId: "59151GHN7yr5g9B3bqlGdR?si=88315920d0dc4e79",
            hasVideo: false,
            story: "Slim it's getting worse what did deaf, blind people f***ing do to you  ."
        },
        {
            id: 4,
            title: "Brand New Dance",
            spotifyId: "0VaeksJaXy5R1nvcTMh3Xk?si=12cccde75ddc41be",
            videoUrl: "your_video_url",
            story: "Darling, I features Teezo Touchdown and explores the vulnerability of love. The heartfelt duet emphasizes the emotional intricacies of relationships, creating a poignant and relatable listening experience. The harmonies and lyrics delve into the highs and lows of love, making it a standout track on the album"
        },
        {
            id: 5,
            title: "Evil",
            spotifyId: "3Umj02ZNl4d356pS1D38mn?si=b851847e41ab4ea1",
            story: " Hey Jane shifts to a more serene and laid-back atmosphere. With smooth jazz influences and mellow vibes, this track offers a moment of tranquility and introspection. It's a space for listeners to unwind and reflect, providing a soothing counterpoint to the album's more energetic tracks."
        },
        {
            id: 6,
            title: "All you got(skit)",
            spotifyId: "3GdwjAsCsoE79ObhsJFyYb?si=40da871e4bfd4e4f",
            videoUrl: "your_video_url",
            story: "The darker tones of 'I Killed You present' a stark contrast, with hard-hitting lyrics and a gritty beat. This track exposes Tyler's inner conflicts and personal demons, creating a powerful and haunting listening experience. It's a raw and unfiltered look at the battles we all face within ourselves.."
        },
        {
            id: 7,
            title: "Lucifer",
            spotifyId: "https://6ie0uyyvOKTTuIFBMPiNIl?si=ebf4bfa097b24d0f",
            story: "'Judge Judy' brings a unique twist with its courtroom theme, featuring witty wordplay and sharp production. Tyler navigates legal metaphors with clever lyricism, showcasing his storytelling abilities and his knack for turning everyday scenarios into compelling musical narratives..",
            featuring: "Sly pyper"
        },
        {
            id: 8,
            title: "Antichrist",
            featuring: "GloRilla, Lil Wayne & Sexyy Red",
            spotifyId: "3tFed7YsjGnIfxeLEQwx3R?si=138ea255f8f24deb",
            hasVideo: false,
            featuring: "Bizarre",
            story: "'Sticky', featuring GloRilla, Lil Wayne, and Sexyy Red, is a star-studded collaboration that brings together powerful verses from each artist. The dynamic energy and impactful lyrics create a memorable and engaging track, emphasizing the strength found in unity and shared experiences.."
        },
        {
            id: 9,
            title: "Fuel",
            featuring: "JID",
            spotifyId: "4BSR9I4ExlCJdXJo2GpBD5",
            story: "In 'Take Your Mask Off', Daniel Caesar and LaToiya Williams join Tyler to encourage authenticity and self-acceptance. The soulful duet is filled with beautiful harmonies and uplifting lyrics, inspiring listeners to embrace their true selves and live without fear of judgment."
        },
        {
            id: 10,
            title: "Road Rage",
            spotifyId: "your_spotify_track_id",
            videoUrl: "3yw3m8wgRB4ptDyAvtdhq5?si=842f45e1ef0e476e",
            story: "'Tomorrow' offers a beacon of hope and optimism. With uplifting lyrics and a bright melody, this track shines a light on the possibilities of the future, urging listeners to look forward with positivity and confidence."
        },
        {
            id: 11,
            title: "Houdini",
            spotifyId: "2aYHxnMF2umAavtgBvmkY1?si=24c411f35b1149ff",
            story: "The collaboration with Santigold and ScHoolboy Q on 'Thought I Was Dead' addresses themes of resilience and survival. The powerful messages and strong performances from each artist create a compelling track that resonates with the struggles and triumphs of overcoming life's challenges."
        },
        {
            id: 12,
            title: "Like Him",
            featuring: "Lola Young",
            spotifyId: "your_spotify_track_id",
            videoUrl: "your_video_url",
            story: "'Like Him', featuring Lola Young, celebrates identity and individuality. This track explores the importance of staying true to oneself and embracing personal differences, creating an empowering and thought-provoking song that encourages self-discovery and acceptance.."
        },
        {
            id: 13,
            title: "Balloon",
            featuring: "Doechii",
            spotifyId: "your_spotify_track_id",
            story: "'Balloon', with Doechii, adds a whimsical touch to the album. The playful lyrics and airy beat create a light and fun listening experience, showcasing Tyler's versatility and reminding listeners to find joy in the simpler moments of life."
        },
        {
            id: 14,
            title: "I Hope You Find Your Way Home",
            spotifyId: "your_spotify_track_id",
            hasVideo: true,
            videoUrl: "your_video_url",
            story: "The album closes with 'I Hope You Find Your Way Home', a heartfelt and reflective track that leaves listeners with a sense of closure and introspection. Tyler's sincere delivery and poignant lyrics wrap up the album on an emotional note, inviting listeners to reflect on their own journeys and the importance of finding one's path.."
        }
    ]
};
function ChromakopiaAlbum() {
    var _a;
    var _b = react_2.useState(false), imageError = _b[0], setImageError = _b[1];
    var _c = react_2.useState(true), imageLoading = _c[0], setImageLoading = _c[1];
    var _d = react_2.useState(albumData.tracks[0]), selectedTrack = _d[0], setSelectedTrack = _d[1];
    var url = 'https://cdn.inspireuplift.com/uploads/images/seller_products/29661/iu_1721810691_1.jpg';
    return (React.createElement(react_1.Box, { style: {
            backgroundImage: "url(" + url + ")",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            width: '100%'
        } },
        React.createElement(react_1.Container, { maxW: "container.xl", py: 12 },
            React.createElement(react_1.Grid, { templateColumns: { base: "1fr", md: "300px 1fr" }, gap: 8, mb: 12 },
                React.createElement(react_1.Box, { position: "relative", role: "group", as: framer_motion_1.motion.div, initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } },
                    React.createElement(react_1.AspectRatio, { ratio: 1 },
                        React.createElement(react_1.Box, { position: "relative" },
                            React.createElement(react_1.Box, { position: "absolute", inset: 0, bg: "blackAlpha.400", filter: "blur(20px)", transform: "translateY(10px)", zIndex: 0, borderRadius: "xl" }),
                            React.createElement(react_1.Box, { position: "relative", zIndex: 1, overflow: "hidden", borderRadius: "xl", transition: "all 0.3s ease", _hover: {
                                    transform: "scale(1.02)"
                                } },
                                React.createElement(react_1.Image, { src: albumData.cover, alt: albumData.title + " album cover", w: "100%", h: "100%", objectFit: "cover", borderRadius: "xl", transition: "all 0.3s ease", _groupHover: {
                                        transform: "scale(1.05)",
                                        filter: "brightness(1.1)"
                                    } }),
                                React.createElement(react_1.Box, { position: "absolute", inset: 0, bg: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", opacity: 0, transition: "all 0.3s ease", _groupHover: { opacity: 1 }, borderRadius: "xl", zIndex: 2 })),
                            React.createElement(react_1.Box, { position: "absolute", inset: -2, borderRadius: "xl", bg: "linear-gradient(45deg, #FF0080, #7928CA, #FF0080)", opacity: 0, transition: "opacity 0.3s", _groupHover: { opacity: 0.5 }, zIndex: 0 })))),
                React.createElement(react_1.VStack, { align: "start", spacing: 4, as: framer_motion_1.motion.div, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 0.2 } },
                    React.createElement(react_1.Heading, { size: "2xl", color: "white" }, albumData.title),
                    React.createElement(react_1.Text, { color: "gray.400", fontSize: "xl" }, albumData.artist),
                    React.createElement(react_1.Text, { color: "gray.300", fontSize: "md" },
                        "Released: ",
                        albumData.releaseDate),
                    React.createElement(react_1.Divider, { borderColor: "whiteAlpha.200" }),
                    React.createElement(react_1.Text, { color: "gray.300", fontSize: "lg", lineHeight: "tall" }, albumData.description))),
            React.createElement(react_1.Box, { mb: 12 },
                React.createElement(react_1.Heading, { size: "lg", color: "white", mb: 6 }, "Teasers"),
                React.createElement(react_1.Grid, { templateColumns: { base: "1fr", lg: "2fr 1fr" }, gap: 6 }, (_a = albumData.albumTeasers.videos) === null || _a === void 0 ? void 0 :
                    _a.map(function (video, index) { return (React.createElement(react_1.Box, { key: index },
                        React.createElement(react_1.Heading, { size: "md", color: "white", mb: 4 }, video.title),
                        React.createElement(react_1.AspectRatio, { ratio: 16 / 9, maxH: "480px" },
                            React.createElement("iframe", { src: video.url, title: video.title, width: "100%", height: "100%", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true, style: { borderRadius: "12px" } })))); }),
                    albumData.albumTeasers.instagram && (React.createElement(react_1.Box, null,
                        React.createElement(react_1.Heading, { size: "md", color: "white", mb: 4 }, albumData.albumTeasers.instagram.title),
                        React.createElement(react_1.AspectRatio, { ratio: 1, maxW: "550px" },
                            React.createElement("iframe", { src: "https://www.instagram.com/p/" + albumData.albumTeasers.instagram.url.split('/p/')[1].split('/')[0] + "/embed/captioned", title: albumData.albumTeasers.instagram.title, width: "100%", height: "100%", frameBorder: "0", scrolling: "yes", allowTransparency: true, style: {
                                    borderRadius: "12px",
                                    background: "white"
                                } })))))),
            React.createElement(react_1.Grid, { templateColumns: { base: "1fr", lg: "1fr 1fr" }, gap: 8 },
                React.createElement(react_1.VStack, { align: "stretch", spacing: 4 },
                    React.createElement(react_1.Heading, { size: "lg", color: "white", mb: 4 }, "Tracklist"),
                    albumData.tracks.map(function (track) { return (React.createElement(react_1.Box, { key: track.id, p: 4, bg: selectedTrack.id === track.id ? "whiteAlpha.200" : "whiteAlpha.50", borderRadius: "lg", cursor: "pointer", onClick: function () { return setSelectedTrack(track); }, transition: "all 0.2s", _hover: { bg: "whiteAlpha.200" } },
                        React.createElement(react_1.HStack, { justify: "space-between" },
                            React.createElement(react_1.VStack, { align: "start", spacing: 1 },
                                React.createElement(react_1.Text, { color: "white", fontSize: "lg" },
                                    track.title,
                                    track.hasVideo && (React.createElement(react_1.Badge, { ml: 2, colorScheme: "purple" }, "Video"))),
                                track.featuring && (React.createElement(react_1.Text, { color: "gray.400", fontSize: "sm" },
                                    "Featuring ",
                                    track.featuring)))))); })),
                React.createElement(react_1.VStack, { align: "stretch", spacing: 6 },
                    React.createElement(react_1.Heading, { size: "lg", color: "white" }, selectedTrack.title),
                    React.createElement(react_1.Box, { bg: "whiteAlpha.50", p: 4, borderRadius: "lg" },
                        React.createElement(react_1.AspectRatio, { ratio: 16 / 9, maxH: "180px" },
                            React.createElement("iframe", { src: "https://open.spotify.com/embed/track/" + selectedTrack.spotifyId, width: "100%", height: "352", frameBorder: "0", allow: "encrypted-media" }))),
                    selectedTrack.hasVideo && (React.createElement(react_1.Box, null,
                        React.createElement(react_1.Heading, { size: "md", color: "white", mb: 4 }, "Music Video"),
                        React.createElement(react_1.AspectRatio, { ratio: 16 / 9 },
                            React.createElement("iframe", { src: selectedTrack.videoUrl, title: selectedTrack.title + " video", allowFullScreen: true, style: { borderRadius: '12px' } })))),
                    React.createElement(react_1.Box, null,
                        React.createElement(react_1.Heading, { size: "md", color: "white", mb: 4 }, "Story"),
                        React.createElement(react_1.Text, { color: "gray.300", fontSize: "lg", lineHeight: "tall" }, selectedTrack.story)))),
            React.createElement(react_1.Box, { mt: 16 },
                React.createElement(react_1.Box, { mb: 12 },
                    React.createElement(react_1.Heading, { size: "xl", color: "white", mb: 6 }, "Concert Highlights"),
                    React.createElement(react_1.Grid, { templateColumns: { base: "1fr", md: "repeat(2, 1fr)" }, gap: 6 }, albumData.concerts.map(function (concert) { return (React.createElement(react_1.Box, { key: concert.id, bg: "whiteAlpha.50", borderRadius: "xl", overflow: "hidden" },
                        React.createElement(react_1.AspectRatio, { ratio: 16 / 9 },
                            React.createElement("iframe", { src: concert.videoUrl, title: concert.title, width: "100%", height: "100%", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true })),
                        React.createElement(react_1.Box, { p: 4 },
                            React.createElement(react_1.Heading, { size: "md", color: "white", mb: 2 }, concert.title),
                            React.createElement(react_1.HStack, { spacing: 2, color: "gray.400" },
                                React.createElement(react_1.Text, null, concert.venue),
                                React.createElement(react_1.Text, null, "\u2022"),
                                React.createElement(react_1.Text, null, concert.date))))); }))),
                React.createElement(react_1.Box, null,
                    React.createElement(react_1.Heading, { size: "xl", color: "white", mb: 6 }, "Behind The Scenes"),
                    React.createElement(react_1.Grid, { templateColumns: { base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: 6 }, albumData.behindTheScenes.map(function (bts) { return (React.createElement(react_1.Box, { key: bts.id, bg: "whiteAlpha.50", borderRadius: "xl", overflow: "hidden" },
                        React.createElement(react_1.AspectRatio, { ratio: 16 / 9 },
                            React.createElement("iframe", { src: bts.videoUrl, title: bts.title, width: "100%", height: "100%", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true })),
                        React.createElement(react_1.Box, { p: 4 },
                            React.createElement(react_1.Heading, { size: "md", color: "white", mb: 2 }, bts.title),
                            React.createElement(react_1.Text, { color: "gray.400", noOfLines: 2 }, bts.description)))); })))),
            React.createElement(react_1.Box, { mt: 16, as: framer_motion_1.motion.div, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } },
                React.createElement(react_1.Heading, { size: "xl", color: "white", mb: 8 }, "Album Analysis"),
                React.createElement(react_1.Box, { bg: "whiteAlpha.50", p: 6, borderRadius: "xl", mb: 8, as: framer_motion_1.motion.div, whileHover: { scale: 1.01 }, transition: { duration: 0.2 } },
                    React.createElement(react_1.Text, { color: "gray.300", fontSize: "lg", lineHeight: "tall" }, albumData.analysis.overview)),
                React.createElement(react_1.Grid, { templateColumns: { base: "1fr", md: "repeat(3, 1fr)" }, gap: 6, mb: 12 }, albumData.analysis.keyPoints.map(function (point, index) { return (React.createElement(react_1.Box, { key: point.title, bg: "whiteAlpha.50", p: 6, borderRadius: "xl", as: framer_motion_1.motion.div, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.4, delay: index * 0.1 }, whileHover: {
                        scale: 1.03,
                        backgroundColor: "rgba(255, 255, 255, 0.08)"
                    } },
                    React.createElement(react_1.Heading, { size: "md", color: "white", mb: 3 }, point.title),
                    React.createElement(react_1.Text, { color: "gray.300" }, point.description))); })),
                React.createElement(react_1.Box, { mb: 12 },
                    React.createElement(react_1.Heading, { size: "lg", color: "white", mb: 6 }, "Featured Reviews"),
                    React.createElement(react_1.Grid, { templateColumns: { base: "1fr", md: "repeat(2, 1fr)" }, gap: 6 }, albumData.reviews.map(function (review, index) { return (React.createElement(react_1.Box, { key: review.id, bg: "whiteAlpha.50", borderRadius: "xl", overflow: "hidden", as: framer_motion_1.motion.div, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: index * 0.2 }, whileHover: {
                            scale: 1.02,
                            backgroundColor: "rgba(255, 255, 255, 0.08)"
                        } },
                        React.createElement(react_1.AspectRatio, { ratio: 16 / 9 },
                            React.createElement("iframe", { src: review.videoUrl, title: review.reviewer + "'s Review", width: "100%", height: "100%", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true })),
                        React.createElement(react_1.Box, { p: 4 },
                            React.createElement(react_1.Heading, { size: "md", color: "white", mb: 2 },
                                review.reviewer,
                                "'s Review"),
                            React.createElement(react_1.Text, { color: "gray.400" }, review.channelName)))); })))))));
}
exports["default"] = ChromakopiaAlbum;
