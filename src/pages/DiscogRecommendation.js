import React from "react";
import './DiscogRecommendation.css'
import { Stack, Button } from "@chakra-ui/react";
import ElementsList from "../components/ElementsList";

function DiscogRecommendation() {

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
            <ElementsList></ElementsList>
        </Stack >
    )

}

export default DiscogRecommendation;