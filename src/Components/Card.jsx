import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/CartStore";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ id, title, rating, price, image, desc }) => {
  const cartItems = useSelector((state) => state.CartStore.value);
  const dispatch = useDispatch();

  function handleClick(e) {
    console.log({ title, price, image, id });
    dispatch(addToCart({ title, price, image, id }));
    toast.success("Item Added Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className="w-72 py-3 px-3 mb-4 bg-white border border-gray-200 rounded-lg shadow text-zinc-700">
      <div className="overflow-hidden h-48 w-64">
        <img
          className="rounded px-5 h-48 w-full hover:scale-110 transition-all my-2 py-1"
          src={`${image}`}
          alt="food imdage"
        />
      </div>
      <div className="pb-3">
        <div className="flex my-3 justify-between items-center px-5">
          <a href="#">
            <h5 className="text-sm my-1 font-medium tracking-tight text-gray-900">
              {title}
            </h5>
            <h6 className="text-sm">{desc.slice(0, 40)}...</h6>
          </a>
          <div className="flex items-center mb-5">
            <svg
              className="w-4 h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>

            <span className="text-sm font-semibold  text-black ms-3">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex px-4 items-center justify-between">
          <span className="text-xl font-bold text-gray-900">₹{price}</span>
          <Link
            path="/success"
            onClick={handleClick}
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs py-2 px-3 text-center  bg-blue-600  hover:bg-blue-700  focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
        <ToastContainer className="shadow-none" />
      </div>
    </div>
  );
};

export default Card;
