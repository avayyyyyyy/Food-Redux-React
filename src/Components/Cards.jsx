import Card from "./Card";
import { useSelector } from "react-redux";

const Cards = () => {
  //   const [data, setData] = useState(FoodData);

  const data = useSelector((state) => state.FoodDataStore.filteredData);
  console.log(data);

  //   console.log(data)

  //   console.log(FoodData);

  return (
    <div className="flex justify-center gap-10 items-center m-auto flex-wrap w-screen px-10">
      {data.map((e) => (
        <Card
          desc={e.desc}
          key={e.id}
          id={e.id}
          category={e.category}
          title={e.name}
          rating={e.rating}
          price={e.price}
          image={e.img}
        />
      ))}
    </div>
  );
};

export default Cards;
