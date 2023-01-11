import React from "react";
import { Flex } from "@chakra-ui/react";
import imageExample from '../assets/image.jpg'
import ElementsLibrary from "./ElementsLibrary";
import VerticalLibrary from "./VerticalLibrary";

const VerticalElementsList = () => {

    const elements = [

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
    ]

    return (

        <Flex alignItems="flex-start" direction="column">
            <VerticalLibrary elements={elements} />
        </Flex>
    )
}

export default VerticalElementsList;