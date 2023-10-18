import photo from "../../assets/handsonmobile.8e1693ae.jpg";
import google from "../../assets/download (1).png";
import playStore from "../../assets/download (2).png";
const MobileApp = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 items-center mt-20">
        <div>
          <img className="rounded-md" src={photo} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold font-mono md:text-4xl mb-3">
            Mobile Apps available on App Stores
          </h1>
          <p>
            In today's fast-paced world, convenience and accessibility are
            paramount. That's why we offer mobile apps available on leading app
            stores, ensuring that you can access our extensive range of vehicles
            and services anytime, anywhere. Our user-friendly mobile apps make
            car shopping a breeze, allowing you to browse through our extensive
            inventory, schedule test drives, and receive instant updates on the
            latest arrivals and exclusive deals. Whether you're a buyer or a
            seller, our mobile apps provide a seamless experience, making it
            easier than ever to connect with the world of automotive excellence.
            Download our app today and drive your car-buying journey forward
            with confidence and ease.
          </p>
          <div className="flex mt-10 gap-2">
            <img src={google} alt="" />
            <img src={playStore} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
