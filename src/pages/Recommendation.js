import React, { useEffect, useState } from "react";
import { Stack, Button, Spinner, Heading, Text } from "@chakra-ui/react";
import ElementsList from "../components/ElementsList";
import ArtistsSelection from "../components/ArtistsSelection";
import GenreSelection from "../components/GenreSelection";
import defaultImage from "../assets/image.jpg";

function Recommendation() {
    const pageSize = 10;
    const vinylsLimit = 100;
    const preferencesURL = "https://recommandationapi-374817.ew.r.appspot.com/recommendation/preferences";

    const [hasError, setErrors] = useState(false);
    const [vinyls, setVinyls] = useState([]);
    const [showVinyls, setShowVinyls] = useState(false);
    const [likedArtists, setLikedArtists] = useState([]);
    const [dislikedArtists, setDislikedArtists] = useState([]);
    const [likedGenres, setLikedGenres] = useState([]);
    const [dislikedGenres, setDislikedGenres] = useState([]);
    const [recomendationIsLoading, setRecomendationIsLoading] = useState([false]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        setRecomendationIsLoading(false);
        if ( currentPage * pageSize >= totalCount ) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage + 1);
        }
    }, [vinyls]);

    useEffect(() => {
        setCurrentPage(1)
    }, [likedArtists, dislikedArtists, likedGenres, dislikedGenres]);

    async function fetchVinyls() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "likedArtists": likedArtists,
                "dislikedArtists": dislikedArtists,
                "likedGenres": likedGenres,
                "dislikedGenres": dislikedGenres,
                "startYear": 0,
                "endYear": 0,
                "limit": vinylsLimit,
                "pageSize": pageSize,
                "pageIndex": currentPage
            })
        };

        setRecomendationIsLoading(true);
        const res = await fetch(preferencesURL, requestOptions);
        res.json()
            .then(res => {
                console.log(res)
                setTotalCount(res.totalCount)
                loadVinyls(res.results)
            })
            .catch(err => setErrors(err));
    }

    async function loadVinyls(fetchData) {
        const vinyls = fetchData
        const albumArt = require('album-art')

        for (let vinyl of vinyls) {
            try {
                const art = await albumArt(vinyl.artist, {album: vinyl.vinyl})
                vinyl.imgPath = art;
            } catch (e) {
                vinyl.imgPath = defaultImage;
                console.log(e);
            }

        }
        setVinyls(vinyls)
    }

    const setPreferencesLikedArtists = (checkedLikedArtists) => {
        setLikedArtists(checkedLikedArtists);
    }

    const setPreferencesDislikedArtists = (checkedDislikedArtists) => {
        setDislikedArtists(checkedDislikedArtists);
    }

    const setPreferencesLikedGenres = (checkedLikedGenres) => {
        setLikedGenres(checkedLikedGenres);
    }

    const setPreferencesDislikedGenres = (checkedDislikedGenres) => {
        setDislikedGenres(checkedDislikedGenres);
    }

    return (
        <Stack className="greenBox" height={"auto"} as='flex'>
            <Heading as='h1' color={'white'} alignSelf='center' paddingBottom={'10px'}>Welcome to ViRe,</Heading>
            <Text color={'white'}  size='lg' alignSelf='center' paddingBottom={'10px'}>Start by inserting your preferences</Text>
            <ArtistsSelection 
                setLikedArtists={setPreferencesLikedArtists} 
                setDislikedArtists={setPreferencesDislikedArtists}/>
            <GenreSelection 
                setLikedGenres={setPreferencesLikedGenres} 
                setDislikedGenres={setPreferencesDislikedGenres}/>
            <Button
                m={10}
                colorScheme='teal'
                type='submit'
                padding={'20px'}
                width='60%'
                alignSelf={'center'}
                onClick={() => { setShowVinyls(true); fetchVinyls() }}
            >
                Get Recommendation based on my preferences
            </Button>
            {showVinyls ?
                recomendationIsLoading
                    ?
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='teal.500'
                        size='xl'
                        alignSelf={'center'}/>
                    :
                    <ElementsList elements={vinyls} />
                : null
            }
        </Stack >
    )

}

export default Recommendation;