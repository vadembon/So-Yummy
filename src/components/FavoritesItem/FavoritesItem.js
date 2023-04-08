import { Link } from 'react-router-dom';

export const FavoritesItem = ({ id, image, title }) => {
  return (
    <>
      <div>
        <Link to={`/recipe/${title}`}>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          {title.length > 30 && (
            <div>
              <p>{title}</p>
            </div>
          )}
        </Link>
      </div>
    </>
  );
};
