import Footer from "../components/Footer";
import HomeCategory from "../components/HomeCategory";
import HomeHeader from "../components/HomeHeader";
import HomeInfo from "../components/HomeInfo";
import HomeProduct from "../components/HomeProduct";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeCategory />
      <HomeProduct />
      <HomeInfo />
      <Footer />
    </div>
  );
};
export default Home;
