import { Box, Flex, Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import "./ElementsLibrary.css";
import {
    IoIosArrowBack,
    IoIosArrowForward
} from "react-icons/io";
import VinylCard from "./VinylCard";

const ElementsLibrary = ({ elements }) => {
    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        if (!ref.current) return;
        ref.current.scrollLeft += scrollOffset;
    };

    const getRightArrows = () => {
        return (
            <IoIosArrowForward
                className="leftArrowSimple"
                size="120px"
                color={"brand.blue"}
                onClick={() => scroll(600)}
            />
        )
    }

    const getLeftArrows = () => {

        return (
            <IoIosArrowBack
                className="leftArrowSimple"
                size="120px"
                color={"black"}
                onClick={() => scroll(-250)}
            />
        )
    }


    return (
        <Flex
            id="elementsLibrary"
            position="relative"
            direction={"column"}
            textAlign="start"
        >
            <Flex direction={"row"}>
                {getLeftArrows()}
                <Box ref={ref} className="ScrollableList">

                    {elements.map((element) => (
                        <Box className="elementsBox" key={element.id} mr="4" display="inline-block">
                            <VinylCard key={element.id} element={element} />
                        </Box>
                    ))}

                </Box>
                {getRightArrows()}
            </Flex>
        </Flex>
    );
};

export default ElementsLibrary;
