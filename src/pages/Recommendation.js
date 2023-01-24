import React, { useState, useEffect } from "react";
import { Stack, Button, Spinner } from "@chakra-ui/react";
import ElementsList from "../components/ElementsList";
import imageExample from '../assets/image.jpg'

function Recommendation() {

    const elements = [

        {
            id: 1,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        },
        {
            id: 2,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        }
        ,
        {
            id: 3,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        }, {
            id: 4,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        },
        {
            id: 5,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        }
        ,
        {
            id: 6,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        },
        {
            id: 7,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        }
        ,
        {
            id: 8,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        }, {
            id: 9,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        },
        {
            id: 10,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        }
        ,
        {
            id: 11,
            image: imageExample,
            vinyl: "Vinyl Name",
            artist: "Author Name",
            genre: "Genre"
        }
    ]

    const [hasError, setErrors] = useState(false);
    const [vinyls, setVinyls] = useState({});

    async function fetchData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "likedArtists": [
                    "Frank Aleksandersen",
                    "Elvis"
                ],
                "dislikedArtists": [
                    "Beatles",
                    "David"
                ],
                "likedGenres": [
                    "disco"
                ],
                "dislikedGenres": [
                    "rock"
                ],
                "startYear": 0,
                "endYear": 0,
                "limit": 0,
                "pageSize": 5,
                "pageIndex": 1
                })
        };

        const res = await fetch("https://recommandationapi-374817.ew.r.appspot.com/recommendation/preferences", requestOptions);
        res.json()
            .then(res => setVinyls(res))
            .catch(err => setErrors(err));

        console.log(res);
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <Stack className="greenBox">

            <Button
                mt={5}
                backgroundColor='#4ac7fa'
                type='submit'
                padding={'20px'}
                width='30%'
                alignSelf={'center'}
            >
                Get Recommendation based on my preferences
            </Button>
            {elements.length > 0 
            ?
            <ElementsList elements={elements}/>
             :
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
             }
        </Stack >
    )

}

export default Recommendation;