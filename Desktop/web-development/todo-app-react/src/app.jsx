import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent.js'
import TodoWrapper from './TodoWrapper';
import AddTodo from './AddTodoComponent';
class App extends Component {
  constructor() {
    super();
    this.state = {
      disabled:false,
      disabledDelete:false,
      newTodo: '',
      todos: [{
        title: '',
        done: false
      }]
    };
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy the array
    todos[index] = {
      ...todos[index],
      done: event.target.checked // update done property on copied todo
    }; // copy the todo can also use Object.assign
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, 
        done: true
      };
    });

    this.setState({
      todos,
      disabled:true,
      disabledDelete:true
    });
  }
  allDeselect() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, 
        done: false
      };
    });

    this.setState({
      todos,
      disabled:true
    });
  }
  allDelete() {
    const todos = this.state.todos

    this.setState({
      todos:[],
    });
  }
  render() {
    return (
      <div>
      <HeaderComponent/>
        {/* <h3>{this.state.message}</h3> */}
        <div className="container">
            <div className="row">
             <div className="col text-center">
               <button onClick={() => this.allDone()} className="btn btn-info">select all</button>
               <button disabled={!this.state.disabled} onClick={() => this.allDeselect()}className="btn btn-warning">deselect all</button>
               <button disabled={!this.state.disabledDelete} onClick={() => this.allDelete()}className="btn btn-danger">delete all</button>
              </div></div></div>
        <AddTodo
            newTodo={this.state.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.newTodoChanged.bind(this)} />
            
        <TodoWrapper
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
