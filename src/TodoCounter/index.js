import React from 'react';
import './TodoCounter.css';

// const estilos = {
//     color: 'red',
//     backroundColor: 'yellow',
// };

function TodoCounter({ total, completed }){

    return (
        <h2 className="TodoCounter" >Has comletado {completed} de {total} TODOs</h2>
    );
}

export { TodoCounter }