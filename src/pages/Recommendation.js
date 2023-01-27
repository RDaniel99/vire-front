import React, { useState } from "react";
import { Stack, Button, Spinner } from "@chakra-ui/react";
import ElementsList from "../components/ElementsList";
import ArtistsSelection from "../components/ArtistsSelection"

function Recommendation() {

    const [hasError, setErrors] = useState(false);
    const [vinyls, setVinyls] = useState([]);
    const [showVinyls, setShowVinyls] = useState(false);
    const [likedArtists, setLikedArtists] = useState([]);
    const [dislikedArtists, setDislikedArtists] = useState([]);
    const [recomendationIsLoading, setRecomendationIsLoading] = useState([false]);

    const pageSize = 50;
    const vinylsLimit = 100;
    const preferencesURL = "https://recommandationapi-374817.ew.r.appspot.com/recommendation/preferences";

    async function fetchVinyls() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "likedArtists": likedArtists,
                "dislikedArtists": dislikedArtists,
                "likedGenres": [
                    "disco"
                ],
                "dislikedGenres": [
                    "rock"
                ],
                "startYear": 0,
                "endYear": 0,
                "limit": vinylsLimit,
                "pageSize": pageSize,
                "pageIndex": 1
            })
        };

        console.log(requestOptions)
        setRecomendationIsLoading(true);
        const res = await fetch(preferencesURL, requestOptions);
        res.json()
            .then(res => {
                console.log(res.results)
                loadVinyls(res.results)
            })
            .then(res => setRecomendationIsLoading(false))
            .catch(err => setErrors(err));
    }

    async function loadVinyls(fetchData) {
        const vinyls = fetchData
        const albumArt = require('album-art')

        for (let vinyl of vinyls) {

            const art = await albumArt(vinyl.artist)
            vinyl.imgPath = art
        }
        console.log(vinyls)
        setVinyls(vinyls)
    }

    const setPreferencesLikedArtists = (checkedLikedArtists) => {
        setLikedArtists(checkedLikedArtists);
    }

    const setPreferencesDislikedArtists = (checkedDislikedArtists) => {
        setDislikedArtists(checkedDislikedArtists);
    }

    return (
        <Stack className="greenBox">
            <ArtistsSelection setLikedArtists={setPreferencesLikedArtists} setDislikedArtists={setPreferencesDislikedArtists}/>
            <Button
                m={5}
                backgroundColor='#4ac7fa'
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
                        color='blue.500'
                        size='xl'
                        alignSelf={'center'}
                    />
                    :
                    <ElementsList elements={vinyls} />
                : null
            }
        </Stack >
    )

}

export default Recommendation;