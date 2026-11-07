import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">🌿 Paradise Nursery</NavLink>
      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-nav">Cart <span className="cart-count">{count}</span></NavLink>
      </nav>
    </header>
  );
}