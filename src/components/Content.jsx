import React, { useState, useEffect } from "react";
import axios from "axios";
import contentbackground from "../assets/content-background-img.jpeg";
import { TodoIndex } from "../components/common/TodoIndex";

export function Content({ selectedTab }) {
  const [todos, setTodos] = useState([]);

  // Function to fetch todos based on category ID
  const handleIndexTodos = (categoryID) => {
    axios.get(`http://localhost:3000/todos.json?category_id=${categoryID}`).then((response) => {
      setTodos(response.data);
    });
  };

  // Fetch todos for all tasks initially
  useEffect(() => {
    handleIndexTodos(null);
  }, []);

  // Fetch todos based on the selected tab
  useEffect(() => {
    if (selectedTab === "Personal") {
      handleIndexTodos(2); // Fetch todos for Personal
    } else if (selectedTab === "Grocery List") {
      handleIndexTodos(3); // Fetch todos for Grocery List
    } else if (selectedTab === "Work") {
      handleIndexTodos(4); // Fetch todos for Work
    } else {
      handleIndexTodos(null); // Fetch all todos for other tabs
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
        height: "100vh", // Set height to fill the viewport
        overflow: "auto", // Enable scrolling if content exceeds viewport height
        padding: "20px", // Add padding to prevent content from sticking to the edges
      }}
    >
      <header>
        <nav>
          <a href="#">Home</a> | <a href="#">Link</a>
        </nav>
      </header>
      <div>
        {selectedTab === "All Tasks" && (
          <div>
            {/* Render content for All Tasks */}
            <h3>All Tasks</h3>
            {/* Add your list of tasks here */}
          </div>
        )}
        {selectedTab === "Personal" && (
          <div>
            {/* Render content for Personal Tasks */}
            <h3>Personal Tasks</h3>
            {/* Add your list of personal tasks here */}
          </div>
        )}
        {selectedTab === "Grocery List" && (
          <div>
            {/* Render content for Grocery List */}
            <h3>Grocery List</h3>
            <TodoIndex todos={todos} />
            {/* Add your list of grocery items here */}
          </div>
        )}
        {selectedTab === "Work" && (
          <div>
            {/* Render content for Work */}
            <h3>Work</h3>
            {/* Add your list of work-related tasks here */}
          </div>
        )}
      </div>
    </div>
  );
}
