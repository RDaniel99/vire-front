import React from "react";
import './DiscogRecommendation.css'
import { Stack, Button, Spinner } from "@chakra-ui/react";
import ElementsList from "../components/ElementsList";
import { useState } from "react";
import defaultImage from "../assets/image.jpg";

function DiscogRecommendation() {

    const [elements, setElements] = useState([]);
    const [showVinyls, setShowVinyls] = useState(false);
    const [recomendationIsLoading, setRecomendationIsLoading] = useState([false]);

    const fetchData = async (e) => {
        setRecomendationIsLoading(true)
        const data = await fetch("https://recommandationapi-374817.ew.r.appspot.com/recommendation/discogs?discogs_token=RrWaagWrWvVkHypgNCvcwzypcjIxLVVFMyDRIZsb&discogs_token_secret=mgBbMcklNsaODhzHzECzPZfccenwWsEHLUBZxQcn&page_index=1&page_size=10")

        const vinylsJSON = await data.json()
        const vinyls = vinylsJSON.results

        const albumArt = require('album-art')

        for (let vinyl of vinyls) {
            try {
                const art = await albumArt(vinyl['artist'], {album: vinyl['vinyl']})
                vinyl['imgPath'] = art
            } catch (e) {
                vinyl.imgPath = defaultImage;
                console.log(e);
            }
        }

        setElements(vinyls)
        setRecomendationIsLoading(false)
    };


    return (
        <Stack className="greenBox">

            <Button
                mt={5}
                colorScheme='teal'
                type='submit'
                padding={'20px'}
                width='60%'
                alignSelf={'center'}
                onClick={() => { setShowVinyls(true); fetchData() }}
            >
                Get Recommendation based on my Discog information
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
                    <ElementsList elements={elements} />
                : null
            }
        </Stack >
    )

}

export default DiscogRecommendation;