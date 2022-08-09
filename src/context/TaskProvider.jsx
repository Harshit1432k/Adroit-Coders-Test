import { useEffect } from "react";
import { createContext, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const idGen = "Todo-List--" + Math.random().toString(30).substring(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTask = { text: task, id: idGen };

    if (task !== "") {
      setTasks([...tasks, newTask]);
    }
    setTask("");
  };

  const removeTask = (i) => {
    setTasks(tasks.filter((task) => task.id !== i));
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        handleChange,
        handleSubmit,
        tasks,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
