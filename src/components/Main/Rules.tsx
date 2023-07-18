import { Navigation } from "@/types/navigation";
import React from "react";
import { Element } from "react-scroll";

type Props = {};

const Rules = (props: Props) => {
    return (
        <section className="mx-auto px-4 mt-12 pb-14">
            <Element name={Navigation.Rules}>
                <div className=" h-[480px] w-full bg-gray-500"></div>
                <article className="prose mx-auto text-base font-serif container">
                    <div>
                        <h2>Правила участия:</h2>
                        <p>
                            <strong>ШАГ 1. Оплата происходит через Robokassa на сайте ilovebodyflex.online.</strong>
                        </p>
                        <p>
                            Внимательно указывайте свои личные данные в анкете на сайте (c неправильными данными
                            обратная связь невозможна);
                        </p>
                        <p>
                            <strong>
                                ШАГ 2. После оплаты, на ваш номер телефона в течении 24 часов, пришлют ссылку на
                                Telegram канал, в котором проходит марафон.
                            </strong>
                        </p>
                        <p>
                            Если у вас возникли проблемы с добавлением или оплатой, вы можете написать в Телеграм
                            <a href="#">@shpakmetod</a>
                        </p>
                        (техподдержка С 9:00-22:00)
                        <p>
                            <strong>ШАГ 3. Вы уже похудели! 😇</strong>
                        </p>
                        <h2 className="block text-rose-500">Важно:</h2>
                        <ul className="list-none">
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                После начала марафона оплата не возвращается и не переносится ни по каким причинам;
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Мой марафон - мои правила! Что говорить, как рассуждать, темы лекции и все остальное на
                                марафоне я определяю сама. Ваши советы и рекомендации просьба оставить при себе;
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Скачайте приложение Telegram;
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Заранее будьте уверены в вашем доступе к интернету, его скорости;
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Ещё раз внимательно ознакомьтесь с противопоказаниями;
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Копирование материла с марафона, его распространение запрещено и преследуется законом;
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Детальный разбор новых упражнений
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Придерживаемся принципа персональной ответственности за свое здоровье.
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Следует учесть, что людям с проблемами позвоночника, гипертонией, пупочной или паховой
                                грыжей, а также людям в после операционный период до трёх месяцев Шпакметод зарядка
                                ПРОТИВОПОКАЗАНА. Поэтому предварительно стоит проконсультироваться с врачом.
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                СЛЕДИ ЗА СВОИМ САМОЧУВСТВИЕМ. При любом дискомфорте прекрати тренировку! (Лёгкое
                                головокружение во время первых нескольких дней нормально)
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Теперь что касается беременных. Им также можно делать этот комплекс, но после
                                консультации с врачом; исключая упражнения на животе, исключая втягивание живота на
                                выдохе.
                            </li>
                            <li className="before:content-['❗'] before:-left-6 before:text-xl before:absolute relative">
                                Покупая марафон вы подтверждаете что вы достаточно владеете русским языком письменным и
                                устным ДЛЯ ПОНИМАНИЯ ВСЕГО РАНЕЕ УКАЗАННОГО НА САЙТЕ и того что будет на марафоне.
                            </li>
                        </ul>
                    </div>
                </article>
            </Element>
        </section>
    );
};

export default Rules;
