import { Flex } from '@chakra-ui/react';
import './LoginForm.css'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { Button, Heading } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom"
import jwt from 'jwt-decode'
import './Profile.css'

function Profile() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [isDisabledDiscogs, setIsDisablesDicsogs] = useState(false)

    const navigate = useNavigate()


    function getToken() {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://recommandationapi-374817.ew.r.appspot.com/discogs/access_token?oauth_verifier=${oauth_verifier}`);
        }

        const oauth_verifier = searchParams.get("oauth_verifier")

        if (oauth_verifier) {
            fetchData().catch(console.error);
        }
    }, []);

    async function getProfileData(user) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify({
            })
        }

        const profileURL = `https://user-microservice-wade.herokuapp.com/profile/${user}`
        const res = await fetch(profileURL, requestOptions)
        res.json()
            .then(res => {
                if (res.userData.discogs_secret) {

                    setIsDisablesDicsogs(true)
                }
            })
        return res
    }

    useEffect(() => {

        const user = jwt(getToken())
        const res = getProfileData(user.sub)
    }, []);

    const onSubmitDiscogs = async (e) => {

        const res = await fetch('https://recommandationapi-374817.ew.r.appspot.com/discogs/request_token')
        const token = await res.json()
        window.location.replace(token['authorizationUrl']);
    }

    const handleLogout = () => {

        sessionStorage.removeItem('token')
        navigate('/')
        window.location.reload();
    }


    return (
        <Flex className='authForm' gap='4' justify='space-between' margin={'40vh'}>

            <Flex className='titleForm'>
                <Heading as='h3' size='lg' className='darkBlueText'>
                    Profile
                </Heading>
            </Flex>

            <Button
                disabled={isDisabledDiscogs}
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
                onClick={handleLogout}
                type='submit'>
                Logout
            </Button>

        </Flex>
    )
}

export default Profile;