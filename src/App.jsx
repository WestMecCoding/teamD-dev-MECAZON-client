// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import Modal from "./components/Modal";
import Item from "./components/Item";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/Item" element={<Item />} />
        </Routes>
      </Router>
      <Modal></Modal>
    </>
  );
}
