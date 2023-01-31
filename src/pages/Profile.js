import { Flex } from '@chakra-ui/react';
import './LoginForm.css'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { Button, Heading } from '@chakra-ui/react';
import './Profile.css'

function Profile() {

    const [searchParams, setSearchParams] = useSearchParams();

    const onSubmitDiscogs = async (e) => {

        const res = await fetch('https://recommandationapi-374817.ew.r.appspot.com/discogs/request_token')

        const token = await res.json()

        await window.location.replace(token['authorizationUrl']);
    }

    useEffect(() => {
        const oauth_verifier = searchParams.get("oauth_verifier")

        const fetchData = async () => {
            const data = await fetch(`https://recommandationapi-374817.ew.r.appspot.com/discogs/access_token?oauth_verifier=${oauth_verifier}`);
        }

        if (searchParams !== '') {
            fetchData().catch(console.error);
        }

    }, []);

    const handleLogout = () => {

        sessionStorage.setItem('token', null)
    }


    return (
        <Flex className='authForm' gap='4' justify='space-between' margin={'40vh'}>

            <Flex className='titleForm'>
                <Heading as='h3' size='lg' className='darkBlueText'>
                    Profile
                </Heading>
            </Flex>

            <Button
                className='submitButton full'
                type='submit'
                onClick={onSubmitDiscogs}
                colorScheme='teal'>
                Associate account with Discogs
            </Button>

            <Button
                className='submitButton full'
                type='submit'
                colorScheme='teal'>
                Associate account with Last.fm
            </Button>

            <Button
                className='submitButton'
                colorScheme={'red'}
                onSubmit={handleLogout}
                type='submit'>
                Logout
            </Button>

        </Flex>
    )
}

export default Profile;