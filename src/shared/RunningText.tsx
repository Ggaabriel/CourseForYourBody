"use client";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import Image from "next/image";
type Props = {};

const RunningText = (props: Props) => {
    return (
        <Splide options={{ rewind: true }} aria-label="React Splide Example" className="prose mx-auto">
            <SplideSlide>
                <Image width={100} height={100} src="/images/savva.jpg" alt="Image 1" layout="responsive"/>
            </SplideSlide>
            <SplideSlide>
                <Image width={100} height={100} src="/images/savva.jpg" alt="Image 2" layout="responsive"/>
            </SplideSlide>
        </Splide>
    );
};

export default RunningText;
