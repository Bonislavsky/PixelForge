import React, {useState, createContext } from "react";

export const MatrixContext = createContext();

const Context = (props) =>{

    const initialMatrix = (rows, cols) => {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                row[j] = "#ffffff";          
            }
            matrix[i] = row;
        }
        return matrix;
    };

    const [matrix, setMatrix] = useState(initialMatrix(5, 5));

    const updateMatrix = (rowIndex, colIndex, newColor) => {
        if (rowIndex >= 0 && rowIndex < matrix.length && colIndex >= 0 && colIndex < matrix[0].length) {
            matrix[rowIndex][colIndex] = newColor;
        } 
        else {
            console.error('Недопустимые координаты элемента в матрице');
        }
    }

    const value = {
        matrix,
        updateMatrix
    }

    return <MatrixContext.Provider value = {value}>
        {props.children}
        </MatrixContext.Provider>;
} 

export default Context;