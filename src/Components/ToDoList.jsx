import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";


const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [expandedTask, setExpandedTask] = useState(null);

  // Search filter
  const filterBySearch = (todo, search) => {
    return (
      todo.name.toLowerCase().includes(search.toLowerCase()) ||
      todo.description.toLowerCase().includes(search.toLowerCase())
    );
  };

  // Status filter
  const filterByStatus = (todo, filter) => {
    if (filter === "complete") return todo.isComplete;
    if (filter === "incomplete") return !todo.isComplete;
    return true;
  };

  const filteredToDos = state.todos.filter(
    (todo) => filterBySearch(todo, search) && filterByStatus(todo, filter)
  );

  const toggleExpand = (id) => {
    setExpandedTask(expandedTask === id ? null : id);
  };

  return (
    <div className="container py-4">
      {/* Search + Filter */}
      <div className="row mb-4">
        <div className="col-md-8 mb-2">
          <input
            type="text"
            placeholder="Search Tasks..."
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Tasks</option>
            <option value="complete">Completed Tasks</option>
            <option value="incomplete">Incomplete Tasks</option>
          </select>
        </div>
      </div>

      {/* Task List */}
      <h2 className="mb-3">All Tasks</h2>
      {filteredToDos.length === 0 ? (
        <div className="alert alert-info">No tasks yet!</div>
      ) : (
        <div className="row g-3">
          {filteredToDos.map((todo) => {
            const isExpanded = expandedTask === todo.id;
            const shouldTruncate = todo.description.length > 50;
            const displayText = isExpanded
              ? todo.description
              : shouldTruncate
              ? todo.description.slice(0, 50) + "..."
              : todo.description;

            return (
              <div key={todo.id} className="col-sm-12 col-md-6 col-lg-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{todo.name}</h5>
                    <p className="card-text">
                      {displayText}{" "}
                      {shouldTruncate && (
                        <button
                          onClick={() => toggleExpand(todo.id)}
                          className="btn btn-link btn-sm p-0"
                        >
                          {isExpanded ? "Show Less" : "Show More"}
                        </button>
                      )}
                    </p>

                    {/* Status */}
                    <span
                      className={`badge ${
                        todo.isComplete ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {todo.isComplete ? "Completed" : "Incomplete"}
                    </span>

                    {/* Action buttons */}
                    <div className="mt-3 d-flex gap-2">
                      <button
                        onClick={() =>
                          dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                        }
                        className="btn btn-outline-success btn-sm"
                      >
                        Toggle
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "DELETE_TODO", payload: todo.id })
                        }
                        className="btn btn-outline-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToDoList;
