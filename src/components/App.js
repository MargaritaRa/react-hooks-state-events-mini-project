import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = React.useState(TASKS);
  const [filteredCategory, setFilteredCategory] = React.useState("All");

  const handleCategorySelect = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskAddition = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDeletion = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  const filteredTasks =
    filteredCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === filteredCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={[...CATEGORIES, "All"]}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskAddition} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleTaskDeletion} />
    </div>
  );
}

export default App;

