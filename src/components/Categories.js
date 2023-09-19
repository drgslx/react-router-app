import { Link, NavLink, Outlet } from "react-router-dom";
import { getCategories } from "../api";

export default function Categories() {
  // Fetch the list of categories
  const categories = getCategories();

  return (
    <div className="container">
      {/* Display a heading for the categories page */}
      <h1>Session Categories</h1>

      <ul className="categories">
        {categories.map(cat => (
          <li key={cat.id}>
            {/* Create a NavLink for each category */}
            <NavLink
              // Highlight the NavLink if the route matches
              className={({ isActive }) =>
                isActive ? "category-active" : null
              }
              to={cat.id}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Render nested content (Category or Session) based on the route */}
      <Outlet />
    </div>
  );
}