import { Button, Box, Flex, Text, Link } from "@chakra-ui/react";
import "./PlaylistCard.css";

const PlaylistCard = ({ element }) => {

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
                >
                    Get Recommendation based on this playlist
                </Button>

            </Box>
            <Link
                mt={5}
                type='submit'
                padding={'20px'}
                alignSelf={'flex-end'}
            >
                See tracks
            </Link>
            <Link
                mt={5}
                type='submit'
                padding={'20px'}
                alignSelf={'flex-end'}
            >
                Share playlist
            </Link>
        </Flex>
    );
}

export default PlaylistCard;
