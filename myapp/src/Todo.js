import react from "react";

function Todo(props) {
  const { newItems, setNewItems, deleteTask} = props;



  return (
    <div className="new-tasks">
      <input
        className="new-todo"
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      <div className="buttons">
        <button className="btn-done"  > Done</button>
        <button className="btn-edit"  > Edit</button>
        <button className="btn-delete" onClick={deleteTask} > Delete</button>
      </div>
    </div>
  );
}

export default Todo;
