import RunningText from "@/shared/RunningText";
import { Navigation } from "@/types/navigation";
import React from "react";
import { Element } from "react-scroll";

type Props = {};

const Marathon = (props: Props) => {
    return (
        <section className="mx-auto px-4 undefined mt-12 pb-14">
            <Element name={Navigation.Marathon}>
                <article className="prose mx-auto text-base font-serif container leading-7">
                    <h2 className=" text-5xl font-extrabold">
                        #СавваМетод:<span className="text-savva"> Все начинается здесь"</span>
                    </h2>
                    <p className="my-[22px]">
                        <strong>
                            СавваМетод - это комплексная программа, которая сочетает в себе физические упражнения,
                            дыхательные техники и ментальную активацию. Этот марафон предназначен для всех, кто
                            стремится к здоровому образу жизни и хочет достичь лучшей формы своего тела.
                        </strong>
                    </p>
                    <p className="my-[22px]">
                        СавваМетод предлагает ежедневные тренировки, которые помогут укрепить мышцы, сжечь жир и
                        улучшить общую физическую подготовку всего за 10 минут в день. Вы сможете выполнять тренировки в
                        удобное время, не выходя из дома, и это не потребует от вас строгих диетических ограничений.
                    </p>
                    <p>
                        Кроме того, в рамках программы СавваМетод предусмотрены адаптированные тренировки для беременных
                        женщин, чтобы поддерживать их физическую активность и заботиться о благополучии во время
                        беременности. Вы также сможете насладиться 3-минутной вечерней тренировкой для расслабления и
                        снятия напряжения.
                        <span className="text-savva">#СавваМетод_разрядка</span>
                    </p>
                </article>
            </Element>
        </section>
    );
};

export default Marathon;
