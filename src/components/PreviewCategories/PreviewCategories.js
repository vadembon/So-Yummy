import {
  CategoriesList,
  CategoriesLink,
  OtherCategories,
} from './PreviewCategories.styled';

const PreviewCategories = () => {
  return (
    <>
      <div>
        <CategoriesList>
          <li>
            <h2>Breakfast</h2>
            <CategoriesLink to="/categories/breakfast">See all</CategoriesLink>
          </li>
          <li>
            <h2>Miscellaneous</h2>
            <CategoriesLink to="/categories/miscellaneous">
              See all
            </CategoriesLink>
          </li>
          <li>
            <h2>Vegan</h2>
            <CategoriesLink to="/categories/vegan">See all</CategoriesLink>
          </li>
          <li>
            <h2>Desserts</h2>
            <CategoriesLink to="/categories/desserts">See all</CategoriesLink>
          </li>
        </CategoriesList>

        <OtherCategories to="/categories">Other categories</OtherCategories>
      </div>
    </>
  );
};

export default PreviewCategories;
