import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TodoView from './TodoView';

@observer
class App extends Component{
  handlePush = () => {
    this.props.todoList.push();
  }
  handleDel = () => {
    this.props.todoList.pop()
  }
  render(){
    return (
      <div>
        <ul>
          <li>
            {
              this.props.todoList.todos.map((todo,index) => {
                return (
                  <TodoView todo={todo} key={todo.id} />
                )
              })
            }
          </li>
        </ul>
        <button onClick={this.handlePush}>添加</button>
        <button onClick={this.handleDel}>删除</button>
      </div>
    );
  }
}

export default App;
