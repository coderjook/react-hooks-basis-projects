import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//key for storage
const TASKS_STORAGE_KEY = "TASKS_STORAGE_KEY";
//local storage tasks {tasks, completedTasks} = taskMap
const storeTasks = (tasksMap) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasksMap));
};

// om de taken uit de local storage op te halen return JSON.parse(localStorage.setItem(TASKS_STORAGE_KEY));
const readStoredTasks = () => {
  // haal op wat er in local storage zit en stop in const
  const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));

  return tasksMap ? tasksMap : { task: [], completedTasks: [] };
};

// ******  functie Tasks ******
const Tasks = () => {
  const [taskText, setTaskText] = useState("");
  const storedTasks = readStoredTasks();
  const [tasks, setTasks] = useState(storedTasks.tasks);
  const [completedTasks, setCompletedTasks] = useState(
    storedTasks.completedTasks
  );

  //om de taken in local storage op te slaan op te slaan
  useEffect(() => {
    storeTasks({ tasks, completedTasks });
  });

  const updateTaskText = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuidv4() }]);
    setTaskText("");
  };

  const completeTask = (completedTask) => () => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.id !== completedTask.id));
  };

  const deleteTask = (task) => () => {
    setCompletedTasks(completedTasks.filter((t) => t.id !== task.id));
  };

  console.log("tasks", tasks);

  return (
    <div>
      <h3>Tasks</h3>
      {/* <div className="form">
        <input value={taskText} onChange={updateTaskText} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id} onClick={completeTask(task)}>
              {taskText}
            </div>
          );
        })}
      </div>
      <div className="completed-list">
        {completedTasks.map((task) => {
          const { id, taskText } = task;
          return (
            <div key={id}>
              {taskText}{" "}
              <span className="delete-task" onClick={deleteTask(task)}>
                x
              </span>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Tasks;
