import React, { useState, useEffect } from "react";
import homeLogo from "../../assets/home-button.png";
import axios from "axios";

export function SideNav({ onTabChange }) {
  const [expanded, setExpanded] = useState(false);
  const [sidebarElements, setSidebarElements] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        const data = response.data.map((category) => ({
          label: category.name,
          id: category.id,
          className: "btn-outline-primary",
          onClick: () => onTabChange(category.id),
        }));
        setSidebarElements(data);
      })
      .catch((error) => {
        console.error("Error fetching sidebar elements:", error);
      });
  }, [onTabChange]);

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
