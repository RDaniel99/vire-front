import React, { useState, useEffect } from "react";
import { Stack, Spinner, FormControl, FormLabel, CheckboxGroup, Checkbox, FormHelperText } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


const ArtistSelectionForm = ({setChecked, labelText, helperText, colorScheme}) => {
    const pageSize = 5;
    const artistsLimit = 50;
    const countURL = "https://recommandationapi-374817.ew.r.appspot.com/recommendation/count";

    const [hasError, setErrors] = useState(false);

    const [artists, setArtists] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [checkedArtists, setCheckedArtists] = useState([]);

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
        setChecked(checkedArtists);
    }, [checkedArtists])

    const getRightArrows = () => {
        return ( 
            <IoIosArrowForward
                className="leftArrowSimple"
                size="20px"
                color={"teal"}
                onClick={async () => {setPageIndex(pageIndex + 1);}}
            />
        )
    }

    const getLeftArrows = () => {
        return (
            <IoIosArrowBack
                className="leftArrowSimple"
                size="20px"
                color={"teal"}
                onClick={() => {setPageIndex(pageIndex - 1);}}
            />
        )
    }

    const fetchArtists = async () => {
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
            .catch(err => setErrors(true));

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

    if (hasError) {
        return (<div>Error</div>)
    }

    return (     
    <FormControl as='fieldset' style={{textAlign:"center"}}>
        <FormLabel as='legend' mb={5} style={{textAlign:"center"}}>{labelText}</FormLabel>
        <CheckboxGroup colorScheme={colorScheme} size='lg' style={{textAlign:"center"}}>
            <Stack spacing={[1,5]} direction={['column', 'row']}>
            {showLeftArrow ? getLeftArrows() : null}
            {isLoading ?
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='teal.500'
                size='xl'
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
        <FormHelperText mt={5} mb={10}>{helperText}</FormHelperText>
    </FormControl> 
)
}

export default ArtistSelectionForm;