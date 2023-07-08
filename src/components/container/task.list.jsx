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
  const [loading, setLoading] = useState(true);

  // Control del Ciclo de vida del Componente
  useEffect(() => {
    console.log("Task State has been Modified");
    setLoading(false);
    return () => {
      console.log("TaskList component is going to unmount...");
    };
  }, [task]);

  const changeCompleted = (id) => {
    console.log("");
  };

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* CardHeader (title) */}
          <div className="card-header p-3">
            <h5>Your Task:</h5>
          </div>
          {/* CardBody Content */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Iterar sobre una lista de Tareas */}
                <TaskComponent task={defaultTask} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <TaskComponent task={defaultTask} /> */}
    </div>
  );
};

export default TaskListComponent;
