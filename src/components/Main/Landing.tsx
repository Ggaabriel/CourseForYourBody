"use client"
import Button from "@/shared/Button";
import { Navigation } from "@/types/navigation";
import React from "react";
import { Element } from "react-scroll";

type Props = {};

const Landing = (props: Props) => {
    return (
        <section>
            <Element name={Navigation.Landing}>
                <div className="relative bg-savva/30 lg:hidden">
                    <div className="clip-hero-bg-white relative h-screen bg-white sm:flex">
                        <div className="clip-hero-bg-mobile absolute flex h-full w-full bg-bgSavva bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    <div className="absolute bottom-6 flex h-1/2 w-full flex-col content-center items-center justify-end font-ristretto">
                        <h1 className="text-savva font-semibold text-8xl leading-none flex flex-col items-center">
                            #СавваМетод
                            <span className="text-cyan-600 font-semibold text-8xl leading-none">_Зарядка</span>
                        </h1>

                        <div className="text-xl mt-1 w-52 cursor-pointer rounded-md bg-savva p-3 text-center uppercase text-white">
                            Купить
                        </div>
                    </div>
                </div>
                <div className="hidden h-screen w-auto bg-savva/40 md:hidden lg:visible lg:flex">
                    <div className="clip-header-white relative flex w-2/5 bg-white bg-cover bg-center bg-no-repeat">
                        <div className="clip-header  -z-0 flex w-full bg-savva/30 bg-bgSavva bg-cover bg-center bg-no-repeat"></div>
                    </div>
                    <div className="mx-auto flex w-1/2 flex-wrap content-center items-center justify-center gap-8">
                        <div className="mr-4 mt-8 flex flex-grow-0 gap-2 font-ristretto">
                            <h1 className="text-savva font-semibold text-8xl leading-none">
                                #СавваМетод
                                <span className="text-cyan-600 font-semibold text-8xl leading-none">_Зарядка</span>
                            </h1>
                        </div>
                        <Button className="p-3">Купить</Button>
                    </div>
                </div>
                <div className="marquee">
                <div className="marquee__inner">
                    <p className="marquee__line">
                        СавваМетод топ СавваМетод топ СавваМетод топ СавваМетод топ СавваМетод топ
                    </p>
                    <p className="marquee__line">
                        СавваМетод топ СавваМетод топ СавваМетод топ СавваМетод топ СавваМетод топ
                    </p>
                </div>
            </div>
            </Element>
            
        </section>
    );
};

export default Landing;
