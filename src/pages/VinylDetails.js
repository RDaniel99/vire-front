import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Button, Spinner, Card, Image, CardBody, Heading, Text, CardFooter, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import defaultImage from "../assets/image.jpg";

function VinylDetails() {

    const { vinylName , artist } = useParams();
    const [vinylsDetails, setVinylsDetails] = useState([]);

    useEffect(() => {
        fetchDetails();
    }, [])

    const fetchDetails = () => {

    }

    return (
        <Stack className="greenBox">
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={defaultImage}
                    alt='Caffe Latte'/>

                <Stack>
                    <CardBody>
                        <Heading size='md'>The Joshua Tree</Heading>
                        <Text py='2'>U2</Text>
                    </CardBody>

                    <CardFooter>
                    <Button variant='solid' colorScheme='teal'>
                        <Link
                            href="https://www.last.fm/music/U2/The+Joshua+Tree"
                            textAlign={'center'}
                            isExternal
                            lineHeight="tight"
                            isTruncated>
                            Play it on Last.fm <ExternalLinkIcon m='2px' />
                        </Link>
                    </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </Stack>)
}

export default VinylDetails;