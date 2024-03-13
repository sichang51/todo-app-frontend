import React, { useState, useEffect } from "react";
import axios from "axios";
import contentbackground from "../assets/content-background-img.jpeg";
import { TodoIndex } from "../components/common/TodoIndex";

export function Content({ selectedTab }) {
  const [todos, setTodos] = useState([]);
  const [showWhiteBox, setShowWhiteBox] = useState(false);

  useEffect(() => {
    if (selectedTab) {
      axios
        .get(`http://localhost:3000/categories/${selectedTab}`)
        .then((response) => {
          setTodos(response.data.todos);
          setShowWhiteBox(response.data.todos.length === 0); // Show white box if there are no todos
        })
        .catch((error) => {
          console.error("Error fetching todos:", error);
          setTodos([]);
        });
    }
  }, [selectedTab]);

  return (
    <div
      className="content"
      style={{
        flex: 1,
        backgroundImage: `url(${contentbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header>
        <nav>
          <a href="#">Home</a> | <a href="#">Link</a>
        </nav>
      </header>
      <div style={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
        {todos.length > 0 && ( // Only render TodoIndex component if there are todos
          <div
            className="todo-container"
            style={{
              backgroundColor: "white",
              width: "40%",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              maxHeight: "80vh",
              overflowY: "auto",
              marginTop: "50px",
            }}
          >
            {/* <h3>{selectedTab}</h3> */}
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
