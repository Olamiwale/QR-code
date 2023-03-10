import React, { useState } from "react";

import './App.css'
import Todo from './Todo'
import Form from './Form'
import FilterButton from './FilterButton'
import { nanoid } from "nanoid";
//import Edith from './Edith'




export default function App(props) {

  
 
const [tasks, setTasks] = useState(props.tasks)
  
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return {...task, completed: !task.completed}
    }
    return task;
  });
  setTasks(updatedTasks);
}




const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));




function addTask(name) {
  const newTask = { id: `todo-${nanoid()}`, name, completed: false };

  setTasks([...tasks, newTask]);
}


const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
const headingText = `${taskList.length} ${tasksNoun} remaining`;


function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}


function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
  
    if (id === task.id) {
      //
      return {...task, name: newName}
    }
    return task;
  });
  setTasks(editedTaskList);
}




return (
  <div className="todoapp stack-large">
    <h1>TodoMatic</h1>
    <Form addTask={addTask} />

    <div className="filters btn-group stack-exception">
      <FilterButton />
      <FilterButton />
      <FilterButton />
    </div>
    <h2 id="list-heading">{headingText}</h2>

    <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      {taskList}
    </ul>

    
  </div>
);
}

