import React, { useState, useEffect } from "react";
import axios from "axios";
import contentbackground from "../assets/content-background-img.jpeg";
import { TodoIndex } from "../components/common/TodoIndex";

import "../styles/Content.css";

export function Content({ selectedTab }) {
  const [todos, setTodos] = useState([]);
  const [showWhiteBox, setShowWhiteBox] = useState(false);

  useEffect(() => {
    if (selectedTab) {
      axios
        .get(`http://localhost:3000/categories/${selectedTab}`)
        .then((response) => {
          setTodos(response.data.todos);
          setShowWhiteBox(response.data.todos.length === 0);
        })
        .catch((error) => {
          console.error("Error fetching todos:", error);
          setTodos([]);
        });
    }
  }, [selectedTab]);

  return (
    <div className="content" style={{ backgroundImage: `url(${contentbackground})` }}>
      <header>
        <nav className="header-bar">
          <a href="#" className="header-home">
            {selectedTab} {/* Show the selected tab name directly */}
          </a>{" "}
          |{" "}
          <a href="#" className="header-link">
            Link
          </a>
        </nav>
      </header>

      <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
        {todos.length > 0 && (
          <div className="todo-container">
            <TodoIndex todos={todos} />
          </div>
        )}
      </div>
      {showWhiteBox && (
        <div style={{ backgroundColor: "white", padding: "20px", marginTop: "20px" }}>No todos to display</div>
      )}
    </div>
  );
}
