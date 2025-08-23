import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [expandedTask, setExpandedTask] = useState(null);

  // Search filter
  const filterBySearch = (todo, search) =>
    todo.name.toLowerCase().includes(search.toLowerCase()) ||
    todo.description.toLowerCase().includes(search.toLowerCase());

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
      {/* Header */}
      <div className="text-center mb-4">
        <h1
          className="fw-bold"
          style={{
            background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          📋 My ToDo List
        </h1>
        <p className="text-muted">Stay organized and boost your productivity 🚀</p>
      </div>

      {/* Search + Filter */}
      <div className="row mb-4 g-2">
        <div className="col-md-8">
          <input
            type="text"
            placeholder="🔍 Search Tasks..."
            onChange={(e) => setSearch(e.target.value)}
            className="form-control shadow-sm rounded-pill px-3"
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select shadow-sm rounded-pill px-3"
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
      <h2 className="mb-3 fw-semibold text-primary">All Tasks</h2>
      {filteredToDos.length === 0 ? (
        <div className="alert alert-info shadow-sm rounded-pill text-center">
          No tasks yet! ✨ Add one above.
        </div>
      ) : (
        <div className="row g-4">
          {filteredToDos.map((todo) => {
            const isExpanded = expandedTask === todo.id;
            const shouldTruncate = todo.description.length > 60;
            const displayText = isExpanded
              ? todo.description
              : shouldTruncate
              ? todo.description.slice(0, 60) + "..."
              : todo.description;

            return (
              <div key={todo.id} className="col-sm-12 col-md-6 col-lg-4">
                <div
                  className="card border-0 shadow-sm h-100 rounded-4"
                  style={{
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-5px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div className="card-body">
                    {/* Title */}
                    <h5 className="card-title fw-bold text-dark">
                      {todo.name}
                    </h5>

                    {/* Description */}
                    <p className="card-text text-muted">
                      {displayText}{" "}
                      {shouldTruncate && (
                        <button
                          onClick={() => toggleExpand(todo.id)}
                          className="btn btn-link btn-sm p-0 fw-semibold"
                        >
                          {isExpanded ? "Show Less" : "Show More"}
                        </button>
                      )}
                    </p>

                    {/* Status Badge */}
                    <span
                      className={`badge px-3 py-2 rounded-pill ${
                        todo.isComplete ? "bg-success" : "bg-warning text-dark"
                      }`}
                    >
                      {todo.isComplete ? "✅ Completed" : "⏳ Incomplete"}
                    </span>

                    {/* Action buttons */}
                    <div className="mt-3 d-flex gap-2">
                      <button
                        onClick={() =>
                          dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                        }
                        className="btn btn-sm btn-outline-primary rounded-pill"
                      >
                        🔄 Toggle
                      </button>
                      <button
                        onClick={() =>
                          dispatch({ type: "DELETE_TODO", payload: todo.id })
                        }
                        className="btn btn-sm btn-outline-danger rounded-pill"
                      >
                        🗑️ Delete
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
