import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Category from "./components/Category";
import Session from "./components/Session";
import Register from "./components/Register";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <div className="app">
      {/* Header component */}
      <Header />

      {/* Routing configuration */}
      <Routes>
        {/* Route for the root URL */}
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />

        {/* Route for the "/about" URL */}
        <Route path="about" element={<About />} />

        {/* Route for the "/categories" URL */}
        <Route path="categories" element={<Categories />}>
          {/* Nested route for category pages */}
          <Route path=":catId" element={<Category />}>
            {/* Nested route for session pages */}
            <Route path=":sessionId" element={<Session />} />
          </Route>
          {/* Catch-all route for category pages without a catId */}
          <Route />

          {/* Default route for the "/categories" URL */}
          <Route index element={<h3>Select a category from above</h3>} />
        </Route>
        {/*Register Main Route */}
        <Route path="register" element={<Register />}/>
        <Route path="confirmation" element={< Confirmation/>}/>
        {/* Catch-all route for undefined routes */}
        <Route
          path="*"
          element={<h1 className="not-found">Page not found!</h1>}
        />
      </Routes>

      {/* Footer */}
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
