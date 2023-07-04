import React, { useEffect, useState } from "react";
import TaskComponent from "../pure/task";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

const TaskListComponent = () => {

  const defaultTask = new Task(
    "Example",
    "Default Description",
    false,
    LEVELS.NORMAL
  );

  // Estado del Componente
  const [task, setTask] = useState([defaultTask]);

  // Control del Ciclo de vida del Componente
  useEffect(() => {
    console.log("Task State has been Modified");
    return () => {
    console.log("TaskList component is going to unmount...");
    }
  }, [task])
  

  const changeCompleted = (id) => {
    console.log("");
  }

  return (
    <div>
        <div>
            Your Task:
        </div>
      <TaskComponent task={ defaultTask } />
    </div>
  );
};

export default TaskListComponent;
