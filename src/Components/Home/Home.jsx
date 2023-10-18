import Banner from "../Banner/Banner";
import BestServices from "../BestServiceProvided/BestServices";
import BrandsCard from "../BrandsCard/BrandsCard";
import MobileApp from "../MobileApp/MobileApp";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto max-w-6xl px-5 md:px-0">
        <BrandsCard></BrandsCard>
        <BestServices></BestServices>
        <MobileApp></MobileApp>
      </div>
    </div>
  );
};

export default Home;
