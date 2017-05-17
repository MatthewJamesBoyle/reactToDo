import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import {
  View,
  Text,
} from 'react-native';
import { Navigator} from 'react-native-deprecated-custom-components';
class PluralTodo extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state ={
      todos: [
        {
          task: 'Hannah',
        },
        {
          task: 'Hannah 2',
        },
      ]
    }
  }
  onAddStarted(){
    this.nav.push({
      name: 'taskform',
        })

  }

  renderScene(route,nav){
    switch(route.name){
      case 'taskform':
      return (
      <TaskForm
      onAdd= {this.onAdd.bind(this)}
      onCancel= {this.onCancel.bind(this)}
      />
      );
      default:
      return(
        <TaskList onAddStarted={this.onAddStarted.bind(this)}
        onDone={this.onDone.bind(this)}
        todos={this.state.todos}/>
      );

    }
  }
  configureScene(){
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  onCancel(){
    this.nav.pop();

  }

  onAdd(task){
    console.log(task);
    this.state.todos.push({task});
    this.setState({todos: this.state.todos});
    this.nav.pop();
  }
  onDone(todo){
    const filteredTodos =
    this.state.todos.filter((filterToDo)=>{
      return filterToDo !==todo;
    });
    this.setState({todos : filteredTodos});


  }

  render() {
    return (
    <Navigator
      configureScene={this.configureScene}
     initialRoute={{name: 'TaskList'}}
                ref={((nav)=> {
                  this.nav=nav;
                })}
                renderScene={this.renderScene.bind(this)}/>
    );
  }

}

export default PluralTodo;
