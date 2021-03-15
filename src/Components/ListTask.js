import React, { useState } from "react";
import Task from "./Task";

const ListTask = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const addItem = () => {
    if (task) {
      setTaskList([
        ...taskList,
        { task: task, id: Math.random(), isDone: false },
      ]);
      setTask("");
    } else {
      alert("please enter a valid task");
    }
  };
  const completeTask = (id) => {
    setTaskList(
      taskList.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  const deleteTask = (id) => {
    setTaskList(taskList.filter((el) => el.id !== id));
  };
  const editTask = (id, taskModified) => {
    setTaskList(
      taskList.map((el) => (el.id === id ? { ...el, task: taskModified } : el))
    );
  };

  return (
    <div>
      <div>
        <h1>List Of what we should do:</h1>
        <input
          type="text"
          placeholder="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        {taskList.map((item) => (
          <Task
            item={item}
            key={item.id}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
