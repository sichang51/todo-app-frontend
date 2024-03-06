import React, { useState, useEffect } from "react";
import axios from "axios";
import contentbackground from "../assets/content-background-img.jpeg";
import { TodoIndex } from "../components/common/TodoIndex";

export function Content({ selectedTab }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (selectedTab) {
      axios
        .get(`http://localhost:3000/categories/${selectedTab}`)
        .then((response) => {
          setTodos(response.data.todos);
        })
        .catch((error) => {
          console.error("Error fetching todos:", error);
          setTodos([]); // Set empty array in case of error
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
      }}
    >
      <header>
        <nav>
          <a href="#">Home</a> | <a href="#">Link</a>
        </nav>
      </header>
      <div>
        <h3>{selectedTab}</h3>
        <TodoIndex todos={todos} />
      </div>
    </div>
  );
}
