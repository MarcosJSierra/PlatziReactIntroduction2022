import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de intro', completed: false},
  { text: 'Llorar con la llorona', completed: false}
];

function App(props) {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

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
    setTodos(newTodos);

  };

  const deleteTodo = (text) => {
    // const todoIndex = todos.findIndex( todo => todo.text === text);
    // const newTodos = [...todos];
    // newTodos.splice[todoIndex, 1];
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}/>
        ))}
      </TodoList>
      <CreateTodoButton />
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
