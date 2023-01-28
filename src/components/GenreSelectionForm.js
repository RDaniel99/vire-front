import React, { useState, useEffect } from "react";
import { Stack, Spinner, FormControl, FormLabel, CheckboxGroup, Checkbox, FormHelperText } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


const GenreSelectionForm = ({setChecked, labelText, helperText, colorScheme}) => {
    const pageSize = 5;
    const genreLimit = 50;
    const countURL = "https://recommandationapi-374817.ew.r.appspot.com/recommendation/count";

    const [hasError, setErrors] = useState(false);

    const [genres, setGenres] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [checkedGenres, setCheckedGenres] = useState([]);

    useEffect(() => {
        fetchGenres(pageIndex);

        if (pageIndex*pageSize >= genreLimit) {
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
        setChecked(checkedGenres);
    }, [checkedGenres])

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

    const fetchGenres = async () => {
        console.log(pageIndex)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "field": "genre",
                "limit": genreLimit,
                "pageSize": pageSize,
                "pageIndex": pageIndex
            })
        };

        setIsLoading(true);
        const res = await fetch(countURL, requestOptions);
        res.json()
            .then(res => {
                console.log(res)
                setGenres(res.results)})
            .then(res => setIsLoading(false))
            .catch(err => setErrors(true));

    }

    const updateCheckedGenres = (isChecked, value) => {
        let genreList = [...checkedGenres];
        if (isChecked) {
            genreList.push(value);
        } else {
            const index = genreList.indexOf(value);
            genreList.splice(index, 1);
        }
        setCheckedGenres(genreList);
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
                color='blue.500'
                size='xl'
            />
            : genres.map(genre => {
                return (<Checkbox 
                            value={genre.genre} 
                            key={genre.genre} 
                            onChange={(event) => {updateCheckedGenres(event.target.checked, event.target.value)}}>
                            {genre.genre}
                        </Checkbox>)
            })}
            {showRightArrow ? getRightArrows() : null}
            </Stack>
        </CheckboxGroup>
        <FormHelperText mt={5} mb={10}>{helperText}</FormHelperText>
    </FormControl> 
)
}

export default GenreSelectionForm;