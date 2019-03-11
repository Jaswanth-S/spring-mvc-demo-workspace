import React from 'react';
import TodoItem from './TodoItem';

const TodoWrapper = (props) => {
  return (
    <div className="container">
      <div id="main" className="card card-body">
      <h2 className="title">Todo Items</h2>
      
    <ul className="list-group">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />
        )
      })}
    </ul>
    </div>
    </div>
  );
};

export default TodoWrapper;
