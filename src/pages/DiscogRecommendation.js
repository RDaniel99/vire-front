import React from "react";
import './DiscogRecommendation.css'
import { Stack, Button } from "@chakra-ui/react";
import ElementsList from "../components/ElementsList";
import imageExample from '../assets/image.jpg'

function DiscogRecommendation() {
    
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


    return (
        <Stack className="greenBox">

            <Button
                mt={5}
                backgroundColor='#4ac7fa'
                type='submit'
                padding={'20px'}
                width='60%'
                alignSelf={'center'}
            >
                Get Recommendation based on my Discog information
            </Button>
            <ElementsList elements={elements}></ElementsList>
        </Stack >
    )

}

export default DiscogRecommendation;