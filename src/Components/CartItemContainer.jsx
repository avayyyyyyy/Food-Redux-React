import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemContainer = () => {
  const CartItems = useSelector((state) => state.CartStore.value);

  return (
    <>
      {CartItems.length < 1 ? (
        <h1 className="text-xl font-base flex justify-center mt-14">
          Your cart is empty...
        </h1>
      ) : (
        CartItems.map((e, i) => (
          <CartItem
            key={i}
            id={e.id}
            title={e.title}
            price={e.price}
            image={e.image}
          />
        ))
      )}
    </>
  );
};

export default CartItemContainer;
