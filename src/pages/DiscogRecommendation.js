import React from "react";
import './DiscogRecommendation.css'
import { Stack, Button } from "@chakra-ui/react";
import ElementsList from "../components/ElementsList";
import imageExample from '../assets/image.jpg'
import { useState } from "react";

function DiscogRecommendation() {
    
    const [elements, setElements] = useState([]);

    const fetchData = async (e) => {
      const data = await fetch("http://localhost:8080/recommendation/discogs?discogs_token=RrWaagWrWvVkHypgNCvcwzypcjIxLVVFMyDRIZsb&discogs_token_secret=mgBbMcklNsaODhzHzECzPZfccenwWsEHLUBZxQcn&page_index=1&page_size=10")
      
      console.log(data.json)

    };


    return (
        <Stack className="greenBox">

            <Button
                mt={5}
                backgroundColor='#4ac7fa'
                type='submit'
                padding={'20px'}
                width='60%'
                alignSelf={'center'}
                onClick={fetchData}
            >
                Get Recommendation based on my Discog information
            </Button>
            <ElementsList elements={elements}></ElementsList>
        </Stack >
    )

}

export default DiscogRecommendation;