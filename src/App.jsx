import React, { useState } from "react";
import SideNav from "./components/common/Sidenav";
import { Content } from "./components/Content";

// import { Footer } from "./Footer";

function App() {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="app-container" style={{ display: "flex" }}>
      <SideNav onTabChange={handleTabChange} />
      <Content selectedTab={selectedTab} />
    </div>
  );
}

export default App;
