import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import "./VinylCard.css";

const VinylCard = ({ element }) => {

    return (
        <Flex className="elementCardFlex">

            <Box className='elementImage' style={{ backgroundImage: 'url(' + element.imgPath + ')' }}></Box>

            <Box display="flex" flexDirection="column" p="4" >

                <Text
                    textAlign={'center'}
                    mt="1"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {element.vinyl}
                </Text>
                <Text
                    textAlign={'center'}
                    mt="1"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    color={'grey'}
                >
                    Artist: {element.artist}
                </Text>
                <Text
                    textAlign={'center'}
                    mt="1"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    color={'grey'}
                >
                    Genre: {element.genre}
                </Text>
                <Text
                    textAlign={'center'}
                    mt="1"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    color={'grey'}
                >
                    Released Date: {element.releaseDate}
                </Text>

                <Link
                    textAlign={'center'} 
                    href={'/vinyl/details/' + element.vinyl + "/" + element.artist} 
                    isExternal
                    mt="1"
                    lineHeight="tight"
                    isTruncated
                    color={'teal'}>
                    More details <ExternalLinkIcon mx='2px' />
                </Link>

            </Box>
        </Flex>
    );
}

export default VinylCard;
