export const PopularList = ({ arrayItem }) => {
  return (
    <ul>
      {arrayItem.map(item => (
        <Item key={item.id} {...item}></Item>
      ))}
    </ul>
  );
};

const Item = ({ id, image, title, about }) => {
  console.log(title);
  return (
    <div style={{ display: 'flex' }}>
      <div>text</div>
      <p>text22</p>
      <p>text333</p>
    </div>
  );
};
