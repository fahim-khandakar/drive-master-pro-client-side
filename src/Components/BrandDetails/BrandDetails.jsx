import { Link, useLoaderData, useParams } from "react-router-dom";
import "./BrandDetails.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Cars from "../Cars/Cars";

const BrandDetails = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState();
  const loadedData = useLoaderData();
  const { id } = useParams();
  const photoData = loadedData.find((data) => data.carBrand === id);
  useEffect(() => {
    fetch(
      `https://drive-master-pro-server.vercel.app/brandInfo/${photoData.carBrand}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.length > 0) {
          setError(
            "We're sorry, but the product information you are looking for is currently not available. This may be due to various reasons, such as updates, maintenance, or an issue with our data sources."
          );
        } else {
          setCars(data);
        }
      });
  }, [error, photoData.carBrand]);

  return (
    <div>
      <div>
        {cars.length > 0 ? (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(${photoData.img1})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                      Explore Our Premier Collection of Cars!
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(${photoData.img2})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                      Browse Our Wide Range of Quality Cars
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(${photoData.img3})`,
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                      Your Road to the Perfect Vehicle
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="max-w-6xl mx-auto px-5 md:p-0 flex flex-col justify-center items-center min-h-screen text-center md:text-3xl  text-lg">
            <h1>{error}</h1>
            <Link to="/">
              <button className="btn btn-ghost mt-16">Back To Home</button>
            </Link>
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto px-5 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-10 mt-32">
        {cars.map((car) => (
          <Cars key={car._id} car={car}></Cars>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
