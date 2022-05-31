import React from "react";

interface ButtonPlayerProps {
    text: string;
    onClick: () => void;
    active: string;
}

export default function ButtonPlayer({text, onClick, active}: ButtonPlayerProps) {
    return(
        <button className={active} onClick={onClick}>{text}</button>
    )
}