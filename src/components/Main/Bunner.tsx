import { Navigation } from "@/types/navigation";
import React from "react";
import { Element } from "react-scroll";

type Props = {};

const Bunner = (props: Props) => {
    return (
        <section className="mt-8 mb-8">
            <Element name={Navigation.Bunner}>
                <div className="mx-auto flex flex-col font-serif prose">
                    <div className="flex flex-row justify-around">
                        <div className="group flex flex-col justify-center content-center items-center cursor-pointer">
                            <div className="flex flex-col">
                                <span className="prose-md font-bold lg:prose-2xl text-nowrap whitespace-nowrap">
                                    Базовый марафон
                                </span>
                            </div>
                            <div className="w-3/4 h-0.5 group-hover:bg-savva ease-in-out duration-300 bg-savva"></div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <ul>
                            <li className="font-bold">
                                Доступ к закрытой группе в telegram в которой проходит марафон
                            </li>
                            <li className="font-bold">12 видео уроков, с доступом на 1 год</li>
                            <li className="font-bold">Без обратной связи и проверки домашнего задания</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <div className="font-bold">• •</div>
                        <div className="prose-2xl font-bold">5 225 ₽</div>
                        <div className="mt-2">
                            <button className="bg-savva text-white w-56 font-bold rounded-md p-2 uppercase">
                                Записаться
                            </button>
                            <a href="#">
                                <p className="flex items-center justify-center">У меня иностранная карта</p>
                            </a>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Bunner;
