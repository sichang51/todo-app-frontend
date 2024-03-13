export function TodoIndex(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <h2>Title: {todo.title}</h2>
          <h2></h2>
          <div style={{ marginBottom: "10px" }}>
            <h3>Description: {todo.description}</h3>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <h3>{todo.deadline}</h3>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <h3>{todo.completed}</h3>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <h3>{todo.created_at}</h3>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <h3>{todo.user_id}</h3>
          </div>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}
