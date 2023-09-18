import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Category from "./components/Category";


function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />} >
          <Route path=":catId" element={<Category />}/>
        </Route>
        <Route path="*" element={<h1 className="not-found">Page not found!</h1>}/> {/* path="*" means that it will handle a non existing route */}
         
        
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;