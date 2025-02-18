import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task,index)=>(
        <Task 
        task={task}
        category={task.category}
        text={task.text} 
        key={index} 
        onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
