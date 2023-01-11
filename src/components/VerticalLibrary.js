import { Box, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import PlaylistCard from "./PlaylistCard";
import "./VerticalLibrary.css";
import VinylCard from "./VinylCard";

const VerticalLibrary = ({ elements }) => {
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        if (!ref.current) return;
        ref.current.scrollLeft += scrollOffset;
    };


    return (
        <Flex
            id="elementsLibraryVertical"
            textAlign="start"
        >
            <Flex direction={"row"} width='100%'>
                <Box ref={ref} className="ScrollableListVertical">

                    {elements.map((element) => (
                        <Box className="elementsBox" key={element.id} mr="4">
                            <PlaylistCard key={element.id} element={element} />
                        </Box>
                    ))}

                </Box>
            </Flex>
        </Flex>
    );
};

export default VerticalLibrary;
