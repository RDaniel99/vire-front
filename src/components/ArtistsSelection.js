import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import ArtistSelectionForm from "./ArtistSelectionForm";


const ArtistsSelection = ( {setLikedArtists, setDislikedArtists} ) => {

    const [showArtists, setShowArtists] = useState(false);

    return (
    <div style={{width:"100%", textAlign:"center"}}>
        <Button
            mb={10}
            colorScheme='teal'
            type='submit'
            p={'20px'}
            width='60%'
            alignSelf={'center'}
            onClick={() => {setShowArtists(!showArtists);}}>
            Set your preferences regarding artists
        </Button>
        { showArtists 
        ?             
        <div>
            <ArtistSelectionForm 
                setChecked={setLikedArtists} 
                labelText="Select your favorite artists" 
                helperText="Select only if you're a fan."
                colorScheme="green"/> 
            <ArtistSelectionForm 
                setChecked={setDislikedArtists} 
                labelText="Select the artists you don't like" 
                helperText="Select only if you are a hater."
                colorScheme="red"/> 
        </div>
        : 
        null }
    </div>);
}

export default ArtistsSelection;