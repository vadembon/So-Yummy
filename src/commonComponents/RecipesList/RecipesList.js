export const RecipesList = ({ items = [] }) => {
  const elements = items.map(({ id, title, image, category }) => (
    <li key={id}>
      <img src={image} alt={category} />
      <div>{title}</div>
    </li>
  ));
  return <ul>{elements}</ul>;
};
