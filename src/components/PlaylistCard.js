import { Button, Box, Flex, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import "./PlaylistCard.css";
import TrackCard from "./TrackCard";

const PlaylistCard = ({ element }) => {

    const [showTracks, setShowTracks] = useState(false)
    const onShowTracksClicked = () => {
        console.log(showTracks)
        console.log("pressed on show tracks")
        setShowTracks(true)
    }
    const onHideTracksClicked = () => {
        console.log(showTracks)
        console.log("pressed on hide tracks")
        setShowTracks(false)
    }

    const Tracks = () => {
        console.log(element)
        return (
            <div className = 'tracks'>
                {
                    element['tracks'].map((track) => (
                            <Box className="elementsBox margin2" key={String(element.id) + track.title} mr="4">
                                <TrackCard className="chakra-heading css-uqsj0l"
                                 key={track.title + track.creator} track={track} />
                            </Box>
                        ))
                }
            </div>
        )
    }

    const preferencesURL = "https://recommandationapi-374817.ew.r.appspot.com/recommendation/preferences";

    async function getRecommendation() {

        let genres = []
        let authors = []

        console.log('track-uri: ' + element['tracks'])

        for(let index = 0; index < element['tracks'].length; index++) {

            let track = element['tracks'][index]

            console.log('H-am luat ' + track)

            if (!genres.includes(track['genre'])) {
                genres.push(track['genre'])
            }

            if (!authors.includes(track['creator'])) {
                authors.push(track['creator'])
            }
        }

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                "likedArtists": authors,
                "likedGenres": genres,
                "limit": 100,
                "pageSize": 10,
                "pageIndex": Math.floor(Math.random() * 10)
            })
        }

        const res = await fetch(preferencesURL, requestOptions);
        res.json()
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        <Flex className="playlistCardFlex ">

            <Box className='playlistImage' style={{ backgroundImage: 'url(' + element.image + ')' }}></Box>

            <Box display="flex" flexDirection="column" p="4" alignItems={'flex-start'}>

                <Text
                    textAlign={'center'}
                    mt="1"
                    fontWeight={'bold'}
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {element.title}
                </Text>
                <Button
                    mt={5}
                    colorScheme='teal'
                    type='submit'
                    padding={'20px'}
                    alignSelf={'center'}
                    onClick={getRecommendation}
                >
                    Get Recommendation based on this playlist
                </Button>

            </Box>
            <Link
                mt={5}
                type='submit'
                padding={'20px'}
                alignSelf={'flex-end'}
                onClick={
                    showTracks ? onHideTracksClicked : onShowTracksClicked
                }
            >
                {showTracks ? "Hide Tracks": "See tracks"}
            </Link>
            
        </Flex>
        {
            showTracks ? <Tracks/> : null
        }
        </>
    );
}

export default PlaylistCard;
