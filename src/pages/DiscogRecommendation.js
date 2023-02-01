import React from "react";
import './DiscogRecommendation.css'
import { Stack, Button, Spinner } from "@chakra-ui/react";
import ElementsList from "../components/ElementsList";
import { useState, useEffect } from "react";
import defaultImage from "../assets/image.jpg";
import { useNavigate } from "react-router-dom"
import jwt from 'jwt-decode'

function DiscogRecommendation() {

    function getToken() {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken
    }
 
    const navigate = useNavigate()
    const [elements, setElements] = useState([]);
    const [showVinyls, setShowVinyls] = useState(false);
    const [recomendationIsLoading, setRecomendationIsLoading] = useState([false]);
    const [discogsSecret, setDiscogsSecret] = useState('')
    const [discogsToken, setDiscogsToken] = useState('')
    const [isAvailableDiscogs, setIsAvailableDiscogs] = useState(false)

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
                if (res.userData.discogs_secret && res.userData.discogs_token) {

                    setDiscogsSecret(res.userData.discogs_secret)
                    setDiscogsToken(res.userData.discogs_token)
                    setIsAvailableDiscogs(true)
                }
            })
        return res
    }

    useEffect(() => {

        const user = jwt(getToken())
        getProfileData(user.sub)
    }, []);

    const fetchData = async (e) => {
        setRecomendationIsLoading(true)
        const data = await fetch(`https://recommandationapi-374817.ew.r.appspot.com/recommendation/discogs?discogs_token=${discogsToken}&discogs_token_secret=${discogsSecret}&page_index=1&page_size=10`)

        const vinylsJSON = await data.json()
        const vinyls = vinylsJSON.results

        const albumArt = require('album-art')

        for (let vinyl of vinyls) {
            try {
                const art = await albumArt(vinyl['artist'], {album: vinyl['vinyl']})
                vinyl['imgPath'] = art
            } catch (e) {
                vinyl.imgPath = defaultImage;
                console.log(e);
            }
        }

        setElements(vinyls)
        setRecomendationIsLoading(false)
    };


    return (
        <Stack className="greenBox">

            <Button
                mt={5}
                colorScheme='teal'
                type='submit'
                padding={'20px'}
                width='60%'
                alignSelf={'center'}
                onClick={isAvailableDiscogs ? () => { setShowVinyls(true); fetchData() } : () => {navigate('/profile')}}
            >
               {isAvailableDiscogs ? "Get Recommendation based on my Discog information" : "Connect to discogs"}
            </Button>
            {showVinyls ?
                recomendationIsLoading
                    ?
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='teal.500'
                        size='xl'
                        alignSelf={'center'}
                    />
                    :
                    <ElementsList elements={elements} />
                : null
            }
        </Stack >
    )

}

export default DiscogRecommendation;