import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Welcome to Machine Coding Questions (JSX)</h1>
        <p className="lead text-muted mt-3">
          A curated collection of real-world frontend coding problems in <strong>React</strong> and <strong>JavaScript</strong>, designed to help you understand how developers structure code and build robust solutions.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <Link to="/easy" className="text-decoration-none">
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">Easy</h5>
                <p className="card-text text-dark">
                  Simple and foundational coding problems with clean solutions and test cases — perfect for beginners or warm-ups.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/medium" className="text-decoration-none">
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <div className="card-body">
                <h5 className="card-title text-warning fw-bold">Medium</h5>
                <p className="card-text text-dark">
                  Learn reusable patterns, props/state handling, conditional rendering, and test cases that simulate real interview questions.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="/hard" className="text-decoration-none">
            <div className="card h-100 shadow-sm border-0 hover-shadow">
              <div className="card-body">
                <h5 className="card-title text-danger fw-bold">Hard</h5>
                <p className="card-text text-dark">
                  Explore advanced scenarios involving state machines, complex UI behavior, and test-driven React components asked in top companies.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="fw-semibold">🎯 How This Helps You</h4>
        <ul className="list-group list-group-flush mt-3">
          <li className="list-group-item">✅ View detailed solutions for real-world frontend problems</li>
          <li className="list-group-item">🧪 Understand how test cases are written for different scenarios</li>
          <li className="list-group-item">🏢 Know where a problem was asked — linked to actual companies</li>
          <li className="list-group-item">💡 Learn how to structure and approach UI code for clarity and reusability</li>
        </ul>
      </div>

      <div className="mt-5 text-center">
        <p className="text-muted">
          Special thanks to <a href="https://namastedev.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold">NamasteDev.com</a>
          &nbsp;and <span className="fw-semibold">Akshay Saini</span> 🙏 for creating incredible learning resources that inspired this initiative.
        </p>
      </div>
    </div>
  );
};

export default Home;
