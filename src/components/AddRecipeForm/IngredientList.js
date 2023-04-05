export const IngredientList = ({ arrayItem }) => {
  return (
    <ul>
      {arrayItem.map(item => (
        <Item key={item.id} {...item}></Item>
      ))}
    </ul>
  );
};

const Item = ({ id, l, k }) => {
  return (
    <div style={{ display: 'flex' }}>
      <p>{l}</p>
      <p>{k}</p>
      <button
        aria-label="delete contact"
        // icon={<DeleteIcon />}
        // onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
