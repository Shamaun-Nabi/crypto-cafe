import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import Coins from "./Components/Coins/Coins";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Notfound from "./Components/NotFound/Notfound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="coins" element={<Coins />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
