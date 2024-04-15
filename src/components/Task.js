import React from "react";

function Task({ task, onDelete }) {
  const { text, category } = task;

  return (
    <div className="task">
      <div className="label">Category: {category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>
        X
      </button>
    </div>
  );
}

export default Task;

