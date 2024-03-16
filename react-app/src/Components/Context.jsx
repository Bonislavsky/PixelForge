import React, {useState, createContext } from "react";

export const CursorContext = createContext();

const Context = (props) =>{

    const [cursor, setCursor] = useState({ Color: "#ffffff" });

    const UpdateColor = (color) => {
        setCursor({ Color: color });
        console.log('Текущий цвет курсора:', cursor.Color);
    };

    const value = {
        cursor,
        UpdateColor,
    }

    return <CursorContext.Provider value = {value}>
        {props.children}
        </CursorContext.Provider>;
} 

export default Context;