import React from "react";
import contentbackground from "../assets/content-background-img.jpeg"; // Adjust the import path to point to the correct location

export function Content({ selectedTab }) {
  console.log(selectedTab);

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
