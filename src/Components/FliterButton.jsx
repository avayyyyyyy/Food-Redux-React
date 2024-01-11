const FliterButton = () => {
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks"];

  return (
    <div className="w-screen px-10 py-5 flex flex-col gap-3  ">
      <h4 className="text-xl text-zinc-700">Find the best food</h4>
      <div className="flex gap-4 overflow-x-scroll scroll-smooth">
        {categories.map((e, i) => (
          <button
            key={i}
            className="rounded-md font-medium hover:bg-blue-600 bg-zinc-300 hover:text-white p-2  text-xl text-black"
          >
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FliterButton;
