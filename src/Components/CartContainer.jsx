import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import CartItemContainer from "./CartItemContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CarButton from "./CartButton";
import "react-toastify/dist/ReactToastify.css";

const CartContainer = () => {
  const CartItems = useSelector((state) => state.CartStore.value);
  const navigate = useNavigate();

  const [isCartActive, setisCartActive] = useState(false);

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-screen lg:w-[20vw] shadow-lg py-2  px-4 bg-white duration-200 transition-all ${
          isCartActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex text-xl mt-5 justify-between items-center p-5 lg:p-0">
          <div className="font-medium">My Orders</div>
          <button
            onClick={() => setisCartActive(!isCartActive)}
            className="bg-blue-600 hover:bg-white hover:text-blue-600    p-1 text-xl text-white rounded-full"
          >
            <IoMdCloseCircle />
          </button>
        </div>
        <div className="mr-4 lg:m-0 ">
          <CartItemContainer />
        </div>

        <div className="flex sm:w-[100%] absolute bottom-4 w-[18vw] flex-col">
          <div className="text-left">
            <h3>
              Items:{" "}
              <span className="text-blue-600 font-medium">
                {CartItems.length > 0
                  ? CartItems.reduce((acc, i) => i.qty + acc, 0)
                  : 0}
              </span>
            </h3>
            <h3>
              Total Amount:
              <span className="text-blue-600 font-medium">
                {" ₹"}
                {CartItems.reduce((acc, e) => acc + e.price * e.qty, 0)}
              </span>
            </h3>
          </div>
          <hr className="w-[90vw] lg:w-[18vw] my-2 " />
          <button
            onClick={() => navigate("/success")}
            className="bg-blue-600 mb-5 w-[85vw] lg:w-full m-auto rounded-md text-white p-2"
          >
            Checkout
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          setisCartActive(!isCartActive);
        }}
      >
        <CarButton />
      </div>
    </>
  );
};

export default CartContainer;
