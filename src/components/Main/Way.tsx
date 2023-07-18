import { Navigation } from "@/types/navigation";
import React from "react";
import { Element } from "react-scroll";

type Props = {};

const Way = (props: Props) => {
    return (
        <section className="mx-auto px-4 undefined mt-12 pb-14">
            <Element name={Navigation.Way}>
                <div className="marquee">
                    <div className="marquee__inner">
                        <p className="marquee__line2">
                            СавваМетод топ СавваМетод топ СавваМетод топ СавваМетод топ СавваМетод топ
                        </p>
                        <p className="marquee__line2">
                            СавваМетод топ СавваМетод топ СавваМетод топ СавваМетод топ СавваМетод топ
                        </p>
                    </div>
                </div>
                <div className=" h-[480px] w-full bg-gray-500"></div>
                <article className="prose mx-auto text-base font-serif container">
                    <div>
                        <h2>Как проходит марафон?</h2>
                        <ul>
                            <li className="before:content-['✅'] before:-left-6 before:text-xl before:absolute relative">
                                В день оплаты, в течении 24 часов, на ваш номер телефона пришлют ссылку на закрытый
                                Телеграм канал, именно там проходит марафон.
                            </li>
                            <li className="before:content-['✅'] before:-left-6 before:text-xl before:absolute relative">
                                После того как вас добавили в в закрытый телеграм канал, вы получаете доступ к урокам -
                                техника дыхания, разборы упражнений, тренировки. Плюс 3 урока теории от Алины Шпак. Вы
                                можете смотреть их в удобное для вас время. Доступ к информации – 1 год со дня начала
                                марафона.
                            </li>
                        </ul>
                        <h3>Что нужно подготовить для марафона:</h3>
                        <ul>
                            <li className="before:content-['✅'] before:-left-6 before:text-xl before:absolute relative">
                                Коврик или большое полотенце, свободную стенку
                            </li>
                        </ul>
                        <ul>
                            <li className="before:content-['✅'] before:-left-6 before:text-xl before:absolute relative">
                                Антицеллюлитный крем, крем для груди, маски для лица, патчи по желанию
                            </li>
                        </ul>
                    </div>
                </article>
            </Element>
        </section>
    );
};

export default Way;
