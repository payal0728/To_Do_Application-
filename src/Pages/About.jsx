import React from "react";

function About() {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1
          className="fw-bold mb-3"
          style={{
            background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About This App
        </h1>
        <p className="lead text-muted">
          A simple yet powerful <strong>ToDo Application</strong> built with{" "}
          <span className="text-primary fw-semibold">React</span> and{" "}
          <span className="text-info fw-semibold">Bootstrap</span>.
        </p>
      </div>

      {/* Card Section */}
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ background: "linear-gradient(135deg, #f0f9ff, #ffffff)" }}
      >
        <div className="card-body p-5">
          {/* Why This App */}
          <h4 className="text-info fw-bold mb-3">🌟 Why This App?</h4>
          <p className="card-text">
            Staying organized is important. This app helps you{" "}
            <span className="fw-semibold text-primary">
              manage your daily tasks
            </span>{" "}
            efficiently — so you can focus on what matters most. 🚀
          </p>

          {/* Features */}
          <h4 className="text-info fw-bold mt-4 mb-3">✨ Features</h4>
          <ul className="list-group list-group-flush rounded-3 overflow-hidden">
            <li className="list-group-item d-flex align-items-center">
              <span className="me-2">✅</span> Add new tasks easily
            </li>
            <li className="list-group-item d-flex align-items-center">
              <span className="me-2">✅</span> Mark tasks as complete/incomplete
            </li>
            <li className="list-group-item d-flex align-items-center">
              <span className="me-2">✅</span> Delete tasks anytime
            </li>
            <li className="list-group-item d-flex align-items-center">
              <span className="me-2">✅</span> Search & filter tasks quickly
            </li>
          </ul>

          {/* Footer */}
          <div className="text-center mt-4">
            <p className="text-muted small">
              Made with ❤️ using React & Bootstrap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
