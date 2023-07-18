"use client";
import React, { useState } from "react";
import { Link, Element } from "react-scroll";



const Header2 = () => {
    const [activeSection, setActiveSection] = useState("");

    const handleSetActiveSection = (section: string) => {
        setActiveSection(section);
    };

    return (
        <header className="fixed top-16">
            <nav>
                <ul>
                    <li>
                        <Link spy={true} to="section1" duration={500} onSetActive={handleSetActiveSection} className={`section ${activeSection === "section1" ? "text-savva" : "text-red-500"}`}>
                            Section 1
                        </Link>
                    </li>
                    <li>
                        <Link spy={true} to="section2" duration={500} onSetActive={handleSetActiveSection} className={`section ${activeSection === "section2" ? "text-savva" : "text-red-500"}`}>
                            Section 2
                        </Link>
                    </li>
                    <li>
                        <Link spy={true} to="section3" duration={500} onSetActive={handleSetActiveSection} className={`section ${activeSection === "section3" ? "text-savva" : "text-red-500"}`}>
                            Section 3
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header2;
