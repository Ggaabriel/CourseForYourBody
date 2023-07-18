import React from "react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="flex text-center justify-center md:justify-around text-gray-400 font-serif bg-white p-10">
            <div className="flex flex-col md:flex-row prose justify-around gap-4 w-full">
                <div>
                    <div className="prose-sm">ИП SAVVA SUPERMAN</div>
                    <div>ИНН ---</div>
                </div>
                <div>
                    <div>Email: savva1234567890@random.ru</div>
                    <a href="#">
                        <div>Договор оферты</div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
