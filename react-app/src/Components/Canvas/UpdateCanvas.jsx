
import React, { useState } from 'react';

function updateMatrix(matrix, rowIndex, colIndex, newColor) {
    if (rowIndex >= 0 && rowIndex < matrix.length && colIndex >= 0 && colIndex < matrix[0].length) {
        matrix[rowIndex][colIndex] = newColor;
    } 
    else {
        console.error('Недопустимые координаты элемента в матрице');
    }
}

const CanvasUpdate = () => {


}

export default CanvasUpdate;