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
            <div id = 'tracks'>
                {
                    element['tracks'].map((track) => (
                            <Box className="elementsBox" key={String(element.id) + track.title} mr="4">
                                <TrackCard key={track.title + track.creator} track={track} />
                            </Box>
                        ))
                }
            </div>
        )
    }

    const preferencesURL = "https://recommandationapi-374817.ew.r.appspot.com/recommendation/preferences";

    async function getRecommendation() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({
                "likedArtists": [element['author']],
                "likedGenres": [element['genre']],
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
            <Link
                mt={5}
                type='submit'
                padding={'20px'}
                alignSelf={'flex-end'}
            >
                Share playlist
            </Link>
            {
                showTracks ? <Tracks/> : null 
            }
        </Flex>
    );
}

export default PlaylistCard;
