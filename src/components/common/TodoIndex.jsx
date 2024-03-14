export function TodoIndex(props) {
  return (
    <div>
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <h3>Title: {todo.title}</h3>
          <h2></h2>
          <div style={{ marginBottom: "10px" }}>
            <h4>Description: {todo.description}</h4>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <h4>{todo.deadline}</h4>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <h4>{todo.completed}</h4>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <h4>{todo.created_at}</h4>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <h4>{todo.user_id}</h4>
          </div>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}
