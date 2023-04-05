export const RecipesList = ({ items = [] }) => {
  const elements = items.map(({ id, title, image }) => (
    <li key={id}>
      <div>{image}</div>
      <div>{title}</div>
    </li>
  ));
  return <ul>{elements}</ul>;
};
