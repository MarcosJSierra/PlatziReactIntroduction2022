import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de intro', completed: false},
//   { text: 'Llorar con la llorona', completed: false}
// ];

function App(props) {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos= [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  const saveTodos = (newTodos) =>{
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  if(!searchValue.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchTex = searchValue.toLowerCase();
      return todoText.includes(searchTex);

    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);

  };

  const deleteTodo = (text) => {
    // const todoIndex = todos.findIndex( todo => todo.text === text);
    // const newTodos = [...todos];
    // newTodos.splice[todoIndex, 1];
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  return (
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
