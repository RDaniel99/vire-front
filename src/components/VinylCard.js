import { Box, Flex, Text } from "@chakra-ui/react";
import { GoCalendar } from 'react-icons/go';
import { GiCommercialAirplane } from 'react-icons/gi'
import "./VinylCard.css";
import imageExample from '../assets/image.jpg'

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

            </Box>
        </Flex>
    );
}

export default VinylCard;
