import React, { Component }from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos:[
      {
        id:uuid.v4(),
        title:'Take out the trash',
        completed: false
      },
      {
        id:2,
        title:'Dinner with wife',
        completed: true
      },
      {
        id:3,
        title:'Meeting with boss',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({todo: this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id)] })
  }

  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title,
      completed :false
    } 
    this.setState({todos: [...this.state.todos, newTodo]})   
  }

  render(){    
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
  
}

export default App;
