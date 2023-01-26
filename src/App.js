import { useState } from 'react'
import './App.css';


const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value)
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add a new task"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export const ToDoList = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    console.log(newTasks);
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={{ background: "#1a1917", borderRadius: "10px", padding: "50px" }}>
    Pending tasks ({tasks.filter((task) => {return !task.isCompleted}).length})
    <div className="todo-list">
      {tasks.map((task, index) => (
        <div className="todo">
          <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
            {task.text}
          </span>
          <div>
          <button onClick={() => toggleTask(index)} style={{ background: "#3528c7"}}>Complete</button>
          <button onClick={() => removeTask(index)} style={{ background: "red"}}>X</button>
           </div>

        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>
    </div>
  );
}