import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList, { Navbar } from "./components/ProductList.jsx";
import AboutUs from "./components/AboutUs.jsx";
import CartItem from "./components/CartItem.jsx";

function Home() {
  return (
    <main className="hero">
      <div className="hero-shade" />
      <section className="hero-content">
        <p className="eyebrow">PARADISE NURSERY</p>
        <h1>Bring the beauty<br />of nature home.</h1>
        <p className="hero-copy">
          Thoughtfully chosen houseplants to make your space greener,
          calmer, and more alive.
        </p>
        <a className="primary-button" href="/plants">Get Started</a>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}