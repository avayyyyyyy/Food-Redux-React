import Navbar from "../Components/Navbar";
import FliterButton from "../Components/FliterButton";
import Cards from "../Components/Cards";
import CartContainer from "../Components/CartContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FliterButton />
      <Cards />
      <CartContainer />
    </div>
  );
};

export default Home;
