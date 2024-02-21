import SideNav from "./components/common/SideNav";
import { Content } from "./components/Content";
// import { Footer } from "./Footer";

function App() {
  return (
    <div className="app-container" style={{ display: "flex" }}>
      <SideNav />
      <Content />
    </div>
  );
}

export default App;
