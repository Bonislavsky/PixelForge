import React, { useState, useContext } from 'react';
import { CursorContext } from "./Context";

const Canvas = () => {
    
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

    const { cursor } = useContext(CursorContext);

    const [matrix, setMatrix] = useState(initialMatrix(5, 5));
    const blockSize = 50; // Размер каждого блока матрицы

    const blockStyle = {
        width: blockSize,
        height: blockSize,
        border: '1px solid #ccc',
    };

    const MatrixGrid = () => {
        return (
            <div style={{ overflow: 'auto', width: '100%', height: '100%' }}>
                <div style={{ width: matrix[0].length * blockSize, height: matrix.length * blockSize }}>
                    {matrix.map((row, rowIndex) => (
                        <div key={rowIndex} style={{ display: 'flex' }}>
                            {row.map((cell, colIndex) => (
                                <div
                                    key={colIndex}
                                    style={{
                                        ...blockStyle,
                                        backgroundColor: cell,
                                      }}
                                    onClick={() => UpdateMatrix(rowIndex, colIndex)}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const UpdateMatrix = (rowIndex, colIndex) => {
        setMatrix(prevMatrix => {
          console.log('попытка обновить матрицу', cursor.Color);
          const updatedMatrix = [...prevMatrix];
          updatedMatrix[rowIndex][colIndex] = cursor.Color;
          return updatedMatrix;
        });
    };

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MatrixGrid/>
        </div>
    );
}

export default Canvas;
