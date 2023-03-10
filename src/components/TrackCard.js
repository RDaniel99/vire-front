import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const TrackCard = ({track}) => {

    useEffect(() => {
        console.log("TRACK PRIMIT = " + track)
    }, [])

    return (
        <Flex className="trackCardFlex ">

        <Box className='trackImage' style={{ backgroundImage: 'url(' + track.image + ')' }}></Box>

        <Box display="flex" flexDirection="column" p="4" alignItems={'flex-start'}>

            <Text
                textAlign={'center'}
                mt="1"
                fontWeight={'bold'}
                as="h4"
                lineHeight="tight"
                isTruncated
            >
                {track.title}
            </Text>
            <Text
                textAlign={'left'}
                mt="1"
                fontWeight={'bold'}
                as="h4"
                lineHeight="tight"
                isTruncated
                >
                Author: {track.creator}
            </Text>
            <Text
                textAlign={'left'}
                mt="1"
                fontWeight={'bold'}
                as="h4"
                lineHeight="tight"
                isTruncated
                >
                Genre: {track.genre}
            </Text>

        </Box>
        
    </Flex>
    );
}


export default TrackCard;