"use client";
import Landing from "@/components/Main/Landing";
import Marathon from "@/components/Main/Marathon";
import Results from "@/components/Main/Results";
import Way from "@/components/Main/Way";
import Rules from "@/components/Main/Rules";
import Slider from "@/components/Main/Slider";
import Bunner from "@/components/Main/Bunner";
import { Navigation } from "@/types/navigation";
import { Link } from "react-scroll";

export default function Home() {
    return (
        <main>
            <Landing />
            <Marathon />
            <Results />
            {/* <img
                src="/images/how-pass-course.png"
                alt="Как проходит марафон?"
                className="pointer-events-none mx-auto"
            /> */}
            <Way />
            {/* <img src="/images/rules.png" alt="Правила" className=" mx-auto" /> */}
            <Rules />
            {/* <img src="/images/testimonials.png" alt="Отзывы" className="pointer-events-none mx-auto" /> */}
            <Slider />
            <Bunner />

            <Link smooth="true" offset={0} spy={true} to={Navigation.Landing} duration={500}>
                <div className=" cursor-pointer fixed bottom-5 right-5 w-20 h-20 rounded-full  z-0 flex items-center justify-center">
                    <div className="w-7 h-7 border-l-black border-l-2 border-b-black border-b-2 rotate-[135deg] -mb-3"></div>
                </div>
            </Link>
        </main>
    );
}
