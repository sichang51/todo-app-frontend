export function CategoryIndex(props) {
  return (
    <div>
      <h1>All Groceries from GroceryList.jsx</h1>
      {props.categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
}
