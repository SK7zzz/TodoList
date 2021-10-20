import React from "react";
import "./TodosLoading.css";
function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-deleteIcon">X</span>

      <p>
        Estamos en ello macho, espero que no inviertas en crypto siendo tan
        impaciente...
      </p>
    </div>
  );
}

export { TodosLoading };
