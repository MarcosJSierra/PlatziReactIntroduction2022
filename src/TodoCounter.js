import React from 'react';
import './TodoCounter.css';

const estilos = {
    color: 'red',
    backroundColor: 'yellow',
};

function TodoCounter(){
    return (
        <h2 className="TodoCounter" >Has comletado 2 de 3 TODOs</h2>
    );
}

export { TodoCounter }