import React from 'react';

const TodoItem = (props) => {
  const { todo, index } = props;
  return (
    <li className="list-group-item">
      <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
      <span className={todo.done ? 'done' : ''}>{todo.title}</span>
      <button className="btn btn-danger btn-sm float-right delete"
      onClick={() => props.removeTodo(index)}>X</button>
    </li>
  );
};

export default TodoItem;
