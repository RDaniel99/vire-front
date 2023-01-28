import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Stack, Button, Spinner, Card, Image, CardBody, Heading, Text, CardFooter, Link, CardHeader, StackDivider, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import defaultImage from "../assets/image.jpg";

function VinylDetails() {

    const lastfmURL = "http://ws.audioscrobbler.com/2.0/?";
    const apiKey = "f4091c51ed7dfc1d8c150ea8d920897c";
    const format = "json";
    const action = "album.getinfo";

    const { vinylName , artist } = useParams();
    const [vinylsDetails, setVinylsDetails] = useState({});

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        const res = await fetch(lastfmURL + new URLSearchParams({
            method: action,
            api_key: apiKey,
            format: format,
            artist: artist,
            album: vinylName
        }));
        res.json()
            .then(res => {
                console.log(res.album)
                setVinylsDetails(res.album);
            })
    }

    return (
        <Stack className="greenBox" height={"auto"}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline' 
                mb={30}>
                {
                    vinylsDetails.image ? 
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={vinylsDetails.image.find(item => item.size == '') 
                        ? vinylsDetails.image.find(item => item.size == '')["#text"] !== '' 
                            ? vinylsDetails.image.find(item => item.size == '')["#text"]
                            : defaultImage
                        : defaultImage}
                        alt={artist + " " + vinylName}/>
                    :
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='teal.500'
                        size='xl'
                        alignSelf={'center'}/>
                }

                <Stack>
                    <CardBody>
                        <Heading size='md'>{vinylName}</Heading>
                        <Text py='2'>{artist}</Text>
                    </CardBody>

                    <CardFooter>
                    <Button variant='solid' colorScheme='teal'>
                        <Link
                            href={vinylsDetails.url}
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
                    {
                        vinylsDetails.tracks ?
                        <Stack divider={<StackDivider />} spacing='4'>
                        {
                            vinylsDetails.tracks.track.map(t => {
                                return (
                                <Box>
                                    <Heading size='xs' textTransform='uppercase'>
                                    {t.name}
                                    </Heading>
                                    <Link
                                        href={t.url}
                                        textAlign={'center'}
                                        isExternal
                                        lineHeight="tight"
                                        pt='5' 
                                        fontSize='sm'
                                        isTruncated>
                                        Play it on Last.fm <ExternalLinkIcon m='2px' />
                                    </Link>
                                </Box>)
                            })
                        }
                        </Stack>
                        :
                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='teal.500'
                            size='xl'
                            alignSelf={'center'}/>
                    }
                </CardBody>
                </Card>
        </Stack>)
}

export default VinylDetails;