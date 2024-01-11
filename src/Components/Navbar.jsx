const Navbar = () => {
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
          placeholder="Search Here"
        />
        <h6 className="text-white mt-2 font-light pr-2">By Shubhankit Jain</h6>
      </div>
    </div>
  );
};

export default Navbar;
