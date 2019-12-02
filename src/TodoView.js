import React, { Component } from 'react';
import { observer } from 'mobx-react';

//观察者
@observer
class TodoView extends Component{
    render(){
        const { todo } = this.props;
        return(
            <div>{ todo.id }</div>
        )
    }
}

export default TodoView;
