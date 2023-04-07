export const RecipesList = ({ items = [] }) => {
  const elements = items.map(({ id, title, thumb, category }) => (
    <li key={id}>
      <img src={thumb} alt={category} />
      <div>{title}</div>
    </li>
  ));
  return <ul>{elements}</ul>;
};
