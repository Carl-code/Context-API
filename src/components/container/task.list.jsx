import React from "react";
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
