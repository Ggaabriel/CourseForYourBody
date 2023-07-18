"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Button from "@/shared/Button";
import { Link } from "react-scroll";
import { Navigation } from "@/types/navigation";

const Header = () => {
    const [activeSection, setActiveSection] = useState("");

    const handleSetActiveSection = (section: string) => {
        setActiveSection(section);
    };

    const isAboveMediumScreend = useMediaQuery("(min-width: 1024px)");
    const [burger, setBurger] = useState(false);
    const DashedBorder = `border-dashed border-b-black/15 border-b p-2`;
    return (
        <header className=" font-sans z-10 fixed top-0 h-16 w-full">
            <div className=" bg-white grid  grid-cols-[100px_1fr] w-full items-center box-border pl-9">
                <div className=" h-16 w-16 ">
                    <a href="#">
                        <Image src="/images/logoSava.jpg" width={64} height={64} alt="logo" />
                    </a>
                </div>
                <div
                    className={` justify-end items-center flex-grow w-auto mr-8 gap-10 lg:flex max-lg:col-start-1 max-lg:col-end-3 ${
                        burger ? "block" : "hidden"
                    }`}
                >
                    <Link
                        smooth="true"
                        offset={-70}
                        spy={true}
                        to={Navigation.Marathon}
                        duration={500}
                        onSetActive={handleSetActiveSection}
                        className={`${!isAboveMediumScreend ? DashedBorder : ""} section ${
                            activeSection === Navigation.Marathon ? "text-savva" : ""
                        } hover:text-savva cursor-pointer block`}
                    >
                        #СавваМетод Pro
                    </Link>
                    <Link
                        smooth="true"
                        offset={-70}
                        spy={true}
                        to={Navigation.Results}
                        duration={500}
                        onSetActive={handleSetActiveSection}
                        className={`${!isAboveMediumScreend ? DashedBorder : ""} section ${
                            activeSection === Navigation.Results ? "text-savva" : ""
                        } hover:text-savva cursor-pointer block`}
                    >
                        Результаты
                    </Link>
                    <Link
                        smooth="true"
                        offset={-70}
                        spy={true}
                        to={Navigation.Way}
                        duration={500}
                        onSetActive={handleSetActiveSection}
                        className={`${!isAboveMediumScreend ? DashedBorder : ""} section ${
                            activeSection === Navigation.Way ? "text-savva" : ""
                        } hover:text-savva cursor-pointer block`}
                    >
                        Как проходит
                    </Link>
                    <Link
                        smooth="true"
                        offset={-70}
                        spy={true}
                        to={Navigation.Rules}
                        duration={500}
                        onSetActive={handleSetActiveSection}
                        className={`${!isAboveMediumScreend ? DashedBorder : ""} section ${
                            activeSection === Navigation.Rules ? "text-savva" : ""
                        } hover:text-savva cursor-pointer block`}
                    >
                        Правила участия
                    </Link>
                    <Link
                        smooth="true"
                        offset={-70}
                        spy={true}
                        to={Navigation.Slider}
                        duration={500}
                        onSetActive={handleSetActiveSection}
                        className={`${!isAboveMediumScreend ? DashedBorder : ""} section ${
                            activeSection === Navigation.Slider ? "text-savva" : ""
                        } hover:text-savva cursor-pointer block`}
                    >
                        Отзывы
                    </Link>
                    <Link
                        smooth="true"
                        offset={-70}
                        spy={true}
                        to={Navigation.Bunner}
                        duration={500}
                        onSetActive={handleSetActiveSection}
                        className={`${!isAboveMediumScreend ? DashedBorder : ""} section ${
                            activeSection === Navigation.Bunner ? "text-savva" : ""
                        } hover:text-savva cursor-pointer block`}
                    >
                        <Button>Купить</Button>
                    </Link>

                    
                </div>
                <div
                    onClick={(e) => setBurger(!burger)}
                    className=" hidden mr-6 cursor-pointer max-lg:flex max-lg:items-end max-lg:justify-end max-lg:col-start-2 max-lg:row-start-1"
                >
                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.5 2.125V0.375H21.5V2.125H0.5ZM0.5 7.375V5.625H21.5V7.375H0.5ZM0.5 12.625V10.875H21.5V12.625H0.5Z"
                            className=" fill-savva"
                        ></path>
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Header;
