import React from "react";
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({ title, icon, tasks, state, handleDelete }) => {
  return (
    <section className="task-column">
      <h2 className="task-column-heading">
        <img className="task-column-icon" src={icon} alt="" /> {title}
      </h2>

      {tasks.map(
        (task, index) =>
          task.state === state && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
