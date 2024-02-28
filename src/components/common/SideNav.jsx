import React, { useState } from "react";
import homeLogo from "../../assets/home-button.png";

export function SideNav({ onTabChange }) {
  const [expanded, setExpanded] = useState(false); // Define expanded state

  const sidebarElements = [
    { label: "All Tasks", className: "btn-outline-primary", onClick: () => onTabChange("All Tasks") },
    { label: "Personal", className: "btn-outline-warning", onClick: () => onTabChange("Personal") },
    { label: "Grocery List", className: "btn-outline-success", onClick: () => onTabChange("Grocery List") },

    { label: "Work", className: "btn-outline-info", onClick: () => onTabChange("Work") },
  ];

  return (
    <div
      className="sidenav"
      style={{
        backgroundColor: "white",
        paddingLeft: "20px",
        width: "250px",
        height: "100vh",
        overflowY: expanded ? "auto" : "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", marginTop: "20px" }}>
        <img src={homeLogo} alt="Home Logo" style={{ width: "30px", height: "30px", marginRight: "10px" }} />
        <h3 style={{ margin: 0 }}>Home</h3>
      </div>

      <h3
        className="text-black"
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: "pointer", margin: 0, marginBottom: 10 }}
      >
        My Lists
      </h3>

      <ul className="nav flex-column" style={{ display: expanded ? "block" : "none" }}>
        {sidebarElements.map((element, index) => (
          <li className="nav-item mb-3" key={index}>
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
