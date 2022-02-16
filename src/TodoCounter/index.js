import React from 'react';
import './TodoCounter.css';
import { TodoContext, TodoProvider } from '../TodoContext';
// const estilos = {
//     color: 'red',
//     backroundColor: 'yellow',
// };

function TodoCounter(){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter" >Has comletado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter }