import { useDispatch } from "react-redux";
import { filterThroughSearch } from "../Store/FoodDataStore";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-screen shadow-sm font-medium bg-blue-800   items-center  flex px-10 py-3 justify-between">
      <div className="flex flex-col  ">
        <div className="text-xl text-white">
          {new Date().toUTCString().slice(0, 16)}
        </div>
        <div className="text-2xl text-white ">Food - App</div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <input
          className="w-72 p-4 h-3 rounded-md bg-transparent text-white outline-none border-white border-2 "
          type="text"
          onChange={(e) => dispatch(filterThroughSearch(e.target.value))}
          placeholder="Search Here"
        />
        <a
          href="https://avayyyyyyy.github.io/shubhlovesweb3/"
          className="text-white mt-2 font-light pr-2 hover:text-zinc-200"
        >
          By Shubhankit Jain
        </a>
      </div>
    </div>
  );
};

export default Navbar;
