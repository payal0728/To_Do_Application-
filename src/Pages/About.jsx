import React from 'react'

function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold text-info">About This App</h1>
        <p className="lead text-muted">
          A simple ToDo application built with <strong>React</strong> and <strong>Bootstrap</strong>.
        </p>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h5 className="card-title text-info fw-bold">Why this app?</h5>
          <p className="card-text">
            This app helps you manage your daily tasks efficiently. You can create tasks, 
            mark them as completed, delete them, and filter tasks easily.
          </p>

          <h5 className="card-title text-info fw-bold mt-4">Features</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ Add new tasks</li>
            <li className="list-group-item">✅ Mark tasks as complete/incomplete</li>
            <li className="list-group-item">✅ Delete tasks anytime</li>
            <li className="list-group-item">✅ Search & filter tasks</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
