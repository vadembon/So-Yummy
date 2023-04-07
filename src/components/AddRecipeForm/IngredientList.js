export const IngredientList = ({ itemArray, handleIngradientDelete }) => {
  return (
    <ul>
      {itemArray.map((item, idx) => (
        <Item
          key={idx}
          {...item}
          idx={idx}
          Delete={handleIngradientDelete}
        ></Item>
      ))}
    </ul>
  );
};

const Item = ({ idx, ttl, quantity, unit, Delete }) => {
  return (
    <li style={{ display: 'flex' }}>
      <p style={{ color: 'black', width: '30px' }}>{idx}</p>
      <p style={{ color: 'black', width: '40%' }}>{ttl}</p>
      <p style={{ color: 'black', width: '100px' }}>{quantity}</p>
      <p style={{ color: 'black', width: '100px' }}>{unit}</p>
      <button
        aria-label="delete contact"
        // icon={<DeleteIcon />}
        onClick={() => Delete(idx)}
      >
        Delete
      </button>
    </li>
  );
};
