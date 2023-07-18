import RunningText from "@/shared/RunningText";
import { Navigation } from "@/types/navigation";
import React from "react";
import { Element } from "react-scroll";

type Props = {};

const Slider = (props: Props) => {
    return (
        <section className="mx-auto px-4 undefined mt-12 pb-14">
            <Element name={Navigation.Slider}>
                <div className=" h-[480px] w-full bg-gray-500"></div>
                <article className="prose mx-auto text-base font-serif container">
                    <h2 className="text-5xl font-extrabold text-center mb-0 mt-10">Отзывы наших гигачадов</h2>
                    <RunningText />
                    <p>
                        Проще говоря, цитирую своих Королев: «Алина, твои марафоны - лучшее вложение в себя в своё
                        будущее». И это 100% истина, так как мы прокачиваем не только своё тело, но и мозги!
                    </p>
                </article>
            </Element>
        </section>
    );
};

export default Slider;
