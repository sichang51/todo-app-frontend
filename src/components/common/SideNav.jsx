export function SideNav() {
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
        <li className="nav-item mb-3">
          <button type="button" className="btn btn-outline-primary">
            All Tasks
          </button>
        </li>
        <li className="nav-item mb-3">
          <button type="button" className="btn btn-outline-warning">
            Personal
          </button>
        </li>
        <li className="nav-item mb-3">
          <button type="button" class="btn btn-success">
            Grocery List
          </button>
        </li>
        <li className="nav-item mb-3">
          <button type="button" class="btn btn-info">
            Example
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
