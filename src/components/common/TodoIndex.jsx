export function TodoIndex(props) {
  return (
    <div>
      <h1>All Groceries from GroceryList.jsx</h1>
      {props.todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <h3>{todo.description}</h3>
          <h3>{todo.deadline}</h3>
          <h3>{todo.completed}</h3>
          <h3>{todo.created_at}</h3>
        </div>
      ))}
    </div>
  );
}
