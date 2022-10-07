import React, {useState} from "react";
import { SvgIcon } from "@mui/material";

export function MenuIcon(props: any) {
    const [color, setColor] = useState("#A1A1AA");

    return (
        <SvgIcon
            {...props}
            onMouseEnter={() => setColor("#fff")}
            onMouseLeave={() => setColor("#A1A1AA")}
        >
            <path d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM4 20H8V16H4V20ZM4 14H8V10H4V14ZM10
            14H14V10H10V14ZM16 4V8H20V4H16ZM10 8H14V4H10V8ZM16 14H20V10H16V14ZM16 20H20V16H16V20Z" fill={color} />
        </SvgIcon>
    );
}
