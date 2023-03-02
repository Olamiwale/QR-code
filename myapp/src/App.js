import react, { useEffect, useState } from "react";
import Todo from "./Todo";
import "./App.css";
import { nanoid } from "nanoid";

export default function App(props) {
  const [newItems, setNewItems] = useState("");
  const [items, setItems] = useState([]);
  

  let list = items.map((item) => {
    return (
      <Todo
        key={nanoid()}
        onChange={item.handleChange}
        newItems={item.newItems}
        deleteTask={deleteTask}
        
      />
    );
  });

  const addItem = () => {
    let todoItems = { newItems };
    setItems((prev) => [...prev, todoItems]);
    setNewItems("");
  }

  function deleteTask (id) {
    console.log('dfj')
   const aa = items.filter((task) => id !== task.id)
   setItems(aa)
  }



  const tasksNoun = list.length > 1 ? "tasks" : "task";
  const headingText = `${list.length} ${tasksNoun} selected `;

  return (
    <div className="todo">
      <h2 className="what-todo">What need to be done</h2>

      <div className="btn-input">
        <input
          className="input-todo"
          type="text"
          onChange={(e) => setNewItems(e.target.value)}
          value={newItems}
        />
        <button onClick={addItem} className="add-btn">
          {" "}
          Add Task
        </button>
      </div>
      {list}
    </div>
  );
}
