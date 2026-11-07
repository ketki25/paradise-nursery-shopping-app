import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/CartSlice.jsx";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => window.alert("Coming Soon! Checkout will be available soon.");

  return (
    <main className="page-shell">
      <h1 className="page-heading">Your Shopping Cart</h1>
      <p className="page-intro">Review your plants and update quantities before checkout.</p>
      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is looking a little empty.</h2>
          <p>Find a plant you love and add it to your cart.</p>
          <Link className="continue-button" to="/plants">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <section className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button className="quantity-button" aria-label={`Decrease ${item.name}`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <strong>{item.quantity}</strong>
                    <button className="quantity-button" aria-label={`Increase ${item.name}`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button className="delete-button" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                </div>
                <div><strong>${(item.price * item.quantity).toFixed(2)}</strong></div>
              </article>
            ))}
          </section>
          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-line"><span>Total items</span><strong>{totalItems}</strong></div>
            <div className="summary-line"><span>Total amount</span><strong>${totalAmount.toFixed(2)}</strong></div>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            <Link className="continue-button" to="/plants">Continue Shopping</Link>
          </aside>
        </>
      )}
    </main>
  );
}