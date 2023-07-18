"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css/sea-green';
type Props = {};

const RunningText = (props: Props) => {
    return (
        <Splide options={{ rewind: true }} aria-label="React Splide Example" className="prose mx-auto">
            <SplideSlide>
                <img src="/CourseForYourBody/images/savva.jpg" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
                <img src="/CourseForYourBody/images/savva.jpg" alt="Image 2" />
            </SplideSlide>
        </Splide>
    );
};

export default RunningText;
