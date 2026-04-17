import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <img src={item.image} alt={item.name} width="100" />
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Total: ₹{item.price * item.quantity}</p>

          <button onClick={() => handleDecrease(item)}>-</button>
          <span> {item.quantity} </span>
          <button onClick={() => handleIncrease(item)}>+</button>

          <br />

          <button onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total Amount: ₹{totalAmount}</h3>

      <button onClick={() => alert("Checkout successful!")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
