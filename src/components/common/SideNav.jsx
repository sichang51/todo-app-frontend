import React from "react";

export function SideNav({ onTabChange }) {
  // Define an array containing sidebar elements
  const sidebarElements = [
    { label: "All Tasks", className: "btn-outline-primary", onClick: () => onTabChange("All Tasks") },
    // () => created the actionable click to render content on right side
    { label: "Personal", className: "btn-outline-warning", onClick: () => onTabChange("Personal") },
    { label: "Grocery List", className: "btn-success", onClick: () => onTabChange("Grocery List") },
    { label: "Work", className: "btn-info", onClick: () => onTabChange("Work") },
  ];

  return (
    <div
      className="sidenav"
      style={{
        backgroundColor: "black",
        paddingLeft: "20px",
        width: "250px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 className="text-white">Sidebar Title</h2>
      <ul className="nav flex-column">
        {/* Map over the sidebarElements array */}
        {sidebarElements.map((element, index) => (
          <li className="nav-item mb-3" key={index}>
            {/* Generate button dynamically */}
            <button type="button" className={`btn ${element.className}`} onClick={element.onClick}>
              {element.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
