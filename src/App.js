import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import Coins from "./Components/Coins/Coins";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Notfound from "./Components/NotFound/Notfound";
import CoinDetails from "./Components/CoinDetails/CoinDetails";
import BdAdress from "./Components/Contact/BdAdress";
import UsAdress from "./Components/Contact/UsAdress";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="coins" element={<Coins />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />}>
          <Route path="bd-adress" element={<BdAdress />}></Route>
          <Route path="us-adress" element={<UsAdress />}></Route>
        </Route>
        <Route path="/coindetails/:id" element={<CoinDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
