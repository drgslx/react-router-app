import { useParams } from "react-router";
import { getCategory } from "../api";
import { NavLink, Outlet } from "react-router-dom";

export default function Category() {
  // Extract the 'catId' parameter from the URL
  const { catId } = useParams();

  // Fetch category data based on the 'catId' parameter
  const category = getCategory(catId);

  return (
    <>
      {/* Display the name of the selected category */}
      <h2>{category.name} Sessions</h2>

      <ul className="session-list">
        {category?.sessions.map(session => (
          <li className="session" key={session.id}>
            {/* Create a NavLink for each session */}
            <NavLink
              // Highlight the NavLink if the route matches
              to={session.id}
              className={({ isActive }) => (isActive ? "session-active" : null)}
            >
              <p className="session-name">{session.name}</p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Render nested content (Session) based on the route */}
      <Outlet />
    </>
  );
}