import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import imageExample from '../assets/image.jpg'
import ElementsLibrary from "./ElementsLibrary";
import VerticalLibrary from "./VerticalLibrary";

const VerticalElementsList = () => {

    const getPlaylistsURL = "http://127.0.0.1:5000/playlists"

    const [playlistsIds, setPlaylistsIds] = useState([])

    useEffect(() => {

        console.log('another test')

        if (sessionStorage.getItem('token') != null) {

            const requestOptions = {
                method: 'GET',
                headers: {
                    'Authorization':  'Bearer ' + sessionStorage.getItem('token')
                },
            }

            fetch(getPlaylistsURL, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setPlaylistsIds(data['message'])
            });
        }

    }, []);

    useEffect(() => {
        
        console.log('test')
        console.log(playlistsIds)
        console.log(playlistsIds !== undefined)
        console.log(playlistsIds !== null)
        console.log(playlistsIds.length)
        console.log(playlistsIds.length > 0)
        if (playlistsIds !== undefined && playlistsIds !== null && playlistsIds.length > 0) {

            console.log('inside: ' + playlistsIds)
            for (let index = 0; index < playlistsIds.length; index++) {

                let id = playlistsIds[index] 
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Authorization':  'Bearer ' + sessionStorage.getItem('token')
                    },
                }

                fetch(getPlaylistsURL + "/" + id + "/info", requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    setElements(data['message'])
                })
            }
        }

    }, [playlistsIds])

    const [elements, setElements] = useState([

        {
            id: 1,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        },
        {
            id: 2,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        }
        ,
        {
            id: 3,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        }, {
            id: 4,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        },
        {
            id: 5,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        }
        ,
        {
            id: 6,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        },
        {
            id: 7,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        }
        ,
        {
            id: 8,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        }, {
            id: 9,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        },
        {
            id: 10,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        }
        ,
        {
            id: 11,
            image: imageExample,
            title: "Vinyl Name",
            author: "Author Name",
            genre: "Genre"
        }
    ])

    return (

        <Flex alignItems="flex-start" direction="column">
            <VerticalLibrary elements={elements} />
        </Flex>
    )
}

export default VerticalElementsList;