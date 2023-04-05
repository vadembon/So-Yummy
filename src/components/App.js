import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { MainPage } from 'pages/MainPage';
import { CategoriesPage } from 'pages/CategoriesPage';
import { AddRecipePage } from 'pages/AddRecipePage';
import { FavoritePage } from 'pages/FavoritePage';
import { MyRecipesPage } from 'pages/MyRecipesPage';
import { RecipePage } from 'pages/RecipePage';
import { SearchPage } from 'pages/SearchPage';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ApiTest } from 'api/testComponents/ApiTest';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="main" element={<MainPage />} />
          <Route path="categories/:categoryName" element={<CategoriesPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route path="favorite" element={<FavoritePage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="my" element={<MyRecipesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="api-test" element={<ApiTest />} />
          <Route path="*" element={<Navigate to={<NotFoundPage />} />} />
        </Route>
      </Routes>
    </div>
  );
};
