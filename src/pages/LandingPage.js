import React from "react";
import './LandingPage.css'
import { Stack, FormControl, FormLabel, Button, Input } from "@chakra-ui/react";
import { useState } from 'react';
import ElementsList from "../components/ElementsList";

function LandingPage() {

    const [seachInput, setSeachInput] = useState('')
    const handleSeachInputChange = (e) => setSeachInput(e.target.value)

    function onClickHandler(e){
        e.preventDefault();
        fetch('https://recommandationapi-374817.ew.r.appspot.com/recommendationSparQL')
        .then(response => console.log(response.body))
    }

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
                    onClick={onClickHandler}
                >
                    Search
                </Button>
            </form>
            <ElementsList></ElementsList>
        </Stack>
    )

}

export default LandingPage;