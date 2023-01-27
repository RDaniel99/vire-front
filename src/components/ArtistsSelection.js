import React, { useState, useEffect } from "react";
import { Stack, Button, Spinner, FormControl, FormLabel, CheckboxGroup, Checkbox, FormHelperText, useCheckboxGroup } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


const ArtistsSelection = ( {setPreferences} ) => {
    const [artists, setArtists] = useState([]);
    const [showArtists, setShowArtists] = useState(false);
    const [pageIndex, setPageIndex] = useState(1);
    const [hasError, setErrors] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [checkedArtists, setCheckedArtists] = useState([]);

    const pageSize = 5;
    const artistsLimit = 50;
    const countURL = "https://recommandationapi-374817.ew.r.appspot.com/recommendation/count";

    useEffect(() => {
        fetchArtists(pageIndex);

        if (pageIndex*pageSize >= artistsLimit) {
            setShowRightArrow(false);
        } else if (showRightArrow === false) {
            setShowRightArrow(true);
        }

        if (pageIndex <= 1) {
            setShowLeftArrow(false);
        } else if (showLeftArrow === false) {
            setShowLeftArrow(true);
        }

    }, [pageIndex]);

    useEffect(() => {
        setPreferences(checkedArtists);
    }, [checkedArtists])

    const getRightArrows = () => {
        return ( 
            <IoIosArrowForward
                className="leftArrowSimple"
                size="20px"
                color={"brand.blue"}
                onClick={async () => {setPageIndex(pageIndex + 1);}}
            />
        )
    }

    const getLeftArrows = () => {
        return (
            <IoIosArrowBack
                className="leftArrowSimple"
                size="20px"
                color={"black"}
                onClick={() => {setPageIndex(pageIndex - 1);}}
            />
        )
    }

    const fetchArtists = async () => {
        console.log(pageIndex)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "field": "artist",
                "limit": artistsLimit,
                "pageSize": pageSize,
                "pageIndex": pageIndex
            })
        };

        setIsLoading(true);
        const res = await fetch(countURL, requestOptions);
        res.json()
            .then(res => {
                console.log(res)
                setArtists(res.results)})
            .then(res => setIsLoading(false))
            .catch(err => setErrors(err));

    }

    const updateCheckedArtists = (isChecked, value) => {
        let artistList = [...checkedArtists];
        if (isChecked) {
            artistList.push(value);
        } else {
            const index = artistList.indexOf(value);
            artistList.splice(index, 1);
        }
        setCheckedArtists(artistList);
    }

    return (<div style={{width:"100%", textAlign:"center"}}>
        <Button
                m={5}
                backgroundColor='#4ac7fa'
                type='submit'
                padding={'20px'}
                width='60%'
                alignSelf={'center'}
                onClick={() => {setShowArtists(!showArtists);}}
            >
                Set your preferences regarding artists
            </Button>
            { showArtists ?             
            <FormControl as='fieldset'>
                <FormLabel as='legend'>Select your favorite artists</FormLabel>
                <CheckboxGroup colorScheme='green' size='lg'>
                    <Stack spacing={[1,5]} direction={['column', 'row']}>
                    {showLeftArrow ? getLeftArrows() : null}
                    {isLoading ?
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                        alignSelf={'center'}
                    />
                    : artists.map(artist => {
                        return (<Checkbox 
                                    value={artist.artist} 
                                    key={artist.artist} 
                                    onChange={(event) => {updateCheckedArtists(event.target.checked, event.target.value)}}>
                                    {artist.artist}
                                </Checkbox>)
                    })}
                    {showRightArrow ? getRightArrows() : null}
                    </Stack>
                </CheckboxGroup>
                <FormHelperText>Select only if you're a fan.</FormHelperText>
            </FormControl> 
            : null }
    </div>);
}

export default ArtistsSelection;