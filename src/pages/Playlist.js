import React from "react";
import './DiscogRecommendation.css'
import { Stack, Button } from "@chakra-ui/react";
import VerticalElementsList from "../components/VerticalElementsList";

function Playlist() {

    return (
        <Stack className="greenBox">
            <Button
                backgroundColor='#4ac7fa'
                type='submit'
                padding={'20px'}
                alignSelf={'flex-start'}
            >
                Add Playlist
            </Button>
            <VerticalElementsList></VerticalElementsList>
        </Stack >
    )

}

export default Playlist;