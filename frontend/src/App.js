import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={darkMode ? "app dark" : "app"}>

        <div className="navbar">
          <h2 className="logo">Caca’s Food Logger</h2>

          <div className="nav-right">
            <NavLink to="/" end>Form</NavLink>
            <NavLink to="/list">List</NavLink>

            <span
              className="mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light" : "Dark"}
            </span>
          </div>
        </div>

        <div className="content">
          <div className="main">
            
            <div className="hero-bg">
              <h1>Welcome to My Food Logger</h1>
              <p>Track meals, stay healthy, and keep wallets happy</p>
            </div>

            <div className="container">
              <Routes>
                <Route path="/" element={<FormPage />} />
                <Route path="/list" element={<ListPage />} />
              </Routes>
            </div>

          </div>
        </div>

        <footer className="footer">
          © 2026 Caca’s Food Logger  By SMM
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;