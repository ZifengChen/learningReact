import { observable, action } from 'mobx';

//被观察者
class TodoList {
    @observable todos = [];
    @action push(){
        let length = this.todos.length;
        this.todos.push({id: ++length});
    }
    @action pop(){
        this.todos.pop();
    }
}

export default new TodoList();
