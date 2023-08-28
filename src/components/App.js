import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (taskDelete) => {
    const updateTasks = tasks.filter(task=>task!==taskDelete);
    setTasks(updateTasks);
  };

  const handleSelectedCategory = (category) => {
    setSelectedCategory(category);

    if(category === "All"){
      setTasks(TASKS);
    }else{
      const filteredTask = TASKS.filter(task => task.category === category);
      setTasks(filteredTask);
    }
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
