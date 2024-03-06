export function TodoIndex(props) {
  return (
    <div>
      {/* <h1>All Groceries from GroceryList from TodoIndex.jsx</h1> */}
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
          <h3>{todo.deadline}</h3>
          <h3>{todo.completed}</h3>
          <h3>{todo.created_at}</h3>
          <h3>{todo.user_id}</h3>

          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
}
