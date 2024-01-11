import { MdDelete } from "react-icons/md";
import { deleteItem } from "../Store/CartStore";
import { useDispatch } from "react-redux";

const CartItem = ({ id, title, price, image }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex w-[100%] mr-6 justify-between items-center m-auto border-2 border-blue-600  p-3 rounded-md bg-white shadow-lg my-4">
      <div>
        <img className="h-[60px] w-[60px]" src={`${image}`} alt="food img" />
      </div>
      <div className="font-medium">
        <h6>{title.slice(0,12)}...</h6>
        <h6 className="text-blue-600">₹{price}</h6>
      </div>
      <div className="flex flex-col justify-between items-end gap-3">
        <button
          onClick={() => dispatch(deleteItem(id))}
          className="text-right text-blue-600 hover:text-blue-800 text-lg cursor-pointer"
        >
          <MdDelete />
        </button>
        <div className="flex">
          <button className="border border-blue-600 hover:bg-blue-600 hover:text-white px-1 rounded-md">
            +
          </button>
          <div className="mx-2">1</div>
          <button className="border border-blue-600 hover:bg-blue-600 hover:text-white px-1 rounded-md">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
