import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ListPage } from "./pages/ListPage/ListPage.tsx";
import "./App.css";
import { Link } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage/CreatePage.tsx";
import { Footer } from "./layouts/Footer/Footer.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <div className="main">
        <Link to={"/"}>
          <h1>Workplace Management</h1>
        </Link>
        <Footer />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/workplace/:id" element={<CreatePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
