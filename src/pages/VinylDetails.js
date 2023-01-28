import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Button, Spinner, Card, Image, CardBody, Heading, Text, CardFooter, Link, CardHeader, StackDivider, Box } from "@chakra-ui/react";
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
        <Stack className="greenBox" height={"auto"}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline' 
                mb={30}>
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
            <Card mt={30}>
                <CardHeader>
                    <Heading size='md'>Track List</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Where the Streets Have No Name
                            </Heading>
                            <Link
                                href="https://www.last.fm/music/U2/The+Joshua+Tree/Where+the+Streets+Have+No+Name"
                                textAlign={'center'}
                                isExternal
                                lineHeight="tight"
                                pt='5' 
                                fontSize='sm'
                                isTruncated>
                                Play it on Last.fm <ExternalLinkIcon m='2px' />
                            </Link>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                            Where the Streets Have No Name
                            </Heading>
                            <Link
                                href="https://www.last.fm/music/U2/The+Joshua+Tree/Where+the+Streets+Have+No+Name"
                                textAlign={'center'}
                                isExternal
                                lineHeight="tight"
                                pt='5' 
                                fontSize='sm'
                                isTruncated>
                                Play it on Last.fm <ExternalLinkIcon m='2px' />
                            </Link>
                        </Box>
                    </Stack>
                </CardBody>
                </Card>
        </Stack>)
}

export default VinylDetails;