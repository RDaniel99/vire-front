import React from "react";
import './LandingPage.css'
import { Stack, FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import { useState } from 'react';
import ElementsList from "../components/ElementsList";
import imageExample from '../assets/image.jpg'

function LandingPage() {

    
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


    const [seachInput, setSeachInput] = useState('')
    const handleSeachInputChange = (e) => setSeachInput(e.target.value)
   
    return (
        <Stack className="greenBox">
            <form className='formBox'>
                <FormControl>
                    <Input isRequired
                        className='searchInput'
                        value={seachInput}
                        placeholder="Enter music preference "
                        onChange={handleSeachInputChange}
                    />
                </FormControl>


                <Button
                    mt={5}
                    backgroundColor='#4ac7fa'
                    type='submit'
                    padding={'20px'}
                    alignSelf={'center'}
                >
                    Search
                </Button>
            </form>
            <ElementsList elements={elements}></ElementsList>
        </Stack>
    )

}

export default LandingPage;