import React, { useState } from 'react';

const MatrixGrid = ({ matrix, blockSize }) => {
    return (
        <div style={{ overflow: 'auto', width: '100%', height: '100%' }}>
            <div style={{ width: matrix[0].length * blockSize, height: matrix.length * blockSize }}>
                {matrix.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex' }}>
                        {row.map((cell, colIndex) => (
                            <div
                                key={colIndex}
                                style={{
                                    width: blockSize,
                                    height: blockSize,
                                    backgroundColor: cell,
                                    border: '1px solid #ccc',
                                }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

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

const Canvas = () => {
    const [matrix, setMatrix] = useState(initialMatrix(5, 5));
    const blockSize = 50; // Размер каждого блока матрицы

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MatrixGrid matrix={matrix} blockSize={blockSize} />
        </div>
    );
}

export default Canvas;
