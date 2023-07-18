import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

const Button = (props: Props) => {
    return (
        <div className={`${props.className} text-xl w-52 cursor-pointer rounded-md bg-savva text-center uppercase text-white`}>
            {props.children}
        </div>
    );
};

export default Button;
