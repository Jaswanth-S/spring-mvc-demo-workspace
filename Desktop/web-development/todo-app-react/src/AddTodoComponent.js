import React from 'react';

const AddTodo = (props) => {
  return (
    <div className="container">
          <div id ="main" className="card card-body">
          <h2 className="title"> Add Items</h2>
    <form onSubmit={props.formSubmitted} className="form-inline mb-3">
      <input onChange={props.newTodoChanged} id="newTodo" name="newTodo" className="form-control mr-2" value={props.newTodo} />
      <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    </div>
  )
};

export default AddTodo;
