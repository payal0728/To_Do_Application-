import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { useNavigate } from "react-router-dom";

const ToDoForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useContext(ToDoContext);

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const payload = { name, description };
      dispatch({ type: "ADD_TODO", payload });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="container mt-5"
      style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="row justify-content-center w-100">
        <div className="col-md-6">
          <h1 className="text-center mb-4 fw-bold" 
              style={{ background: "linear-gradient(90deg,#06b6d4,#3b82f6)", 
                       WebkitBackgroundClip: "text", 
                       color: "transparent" }}>
            ✅ To Do Application
          </h1>

          <div
            className="card shadow-lg border-0 rounded-4"
            style={{
              background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
            }}
          >
            <div className="card-body p-5">
              <h3 className="mb-4 text-primary fw-bold text-center">
                Create a New Task
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Task Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Task Name</label>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    placeholder="e.g., Learn React"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control shadow-sm"
                    placeholder="Details about the task"
                    rows="3"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                {/* Submit */}
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn fw-bold px-4 py-2 rounded-pill shadow"
                    style={{
                      background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                      color: "white",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 15px rgba(59,130,246,0.6)")
                    }
                    onMouseOut={(e) => (e.target.style.boxShadow = "none")}
                  >
                    ➕ Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoForm;
