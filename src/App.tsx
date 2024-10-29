import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Navbar from "./components/Navbar";
import Contact from "./layouts/Contact";
import About from "./layouts/About";
import Menu from "./layouts/Menu";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
