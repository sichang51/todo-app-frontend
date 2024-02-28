import React from "react";

export function Content({ selectedTab }) {
  console.log(selectedTab);

  return (
    <div className="content" style={{ flex: 1 }}>
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
            {/* Render content for Completed Tasks */}
            <h3>Personal Tasks</h3>
            {/* Add your list of completed tasks here */}
          </div>
        )}
        {selectedTab === "Grocery List" && (
          <div>
            {/* Render content for Completed Tasks */}
            <h3>Grocery List</h3>
            {/* Add your list of completed tasks here */}
          </div>
        )}
        {selectedTab === "Work" && (
          <div>
            {/* Render content for Completed Tasks */}
            <h3>Work</h3>
            {/* Add your list of completed tasks here */}
          </div>
        )}
      </div>
    </div>
  );
}
