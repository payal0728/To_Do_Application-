import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg shadow-sm"
      style={{
        background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
      }}
    >
      <div className="container">
        {/* Brand */}
        <Link
          className="navbar-brand fw-bold text-white d-flex align-items-center"
          to="/"
        >
          <span
            className="px-2 py-1 rounded-circle me-2"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            📋
          </span>
          ToDo's
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler text-white border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { name: "Home", path: "/" },
              { name: "Add Task", path: "/createTask" },
              { name: "About", path: "/about" },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className={`nav-link fw-semibold px-3 rounded-pill ${
                    location.pathname === item.path
                      ? "bg-white text-primary shadow-sm"
                      : "text-white"
                  }`}
                  to={item.path}
                  style={{ transition: "all 0.3s ease" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
