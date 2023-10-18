import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero h-[300px] md:min-h-screen"
      style={{
        backgroundPosition: "cover",
        backgroundImage:
          "url(https://i.ibb.co/gtbpHZf/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-5"></div>
      <div className="hero-content justify-start text-left text-neutral-content mx-auto max-w-6xl px-5 md:px-0">
        <div className="w-full md:w-1/3">
          <h1 className="mb-5 text-lg md:text-5xl font-bold">
            Welcome to Drive Master Pro{" "}
          </h1>
          <p className="mb-5 text-xs md:text-base">
            The ultimate destination for car enthusiasts. Discover a wide
            selection of quality cars, from sleek sedans to powerful SUVs, and
            find the perfect vehicle to match your style and needs. Our
            exceptional deals and dedicated service make buying your dream car a
            seamless experience.
          </p>
          <Link to="/register">
            <button className="md:btn bg-white text-black font-medium rounded-md py-1 px-4 hover:bg-slate-400">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div className=" mt-10">
      <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-10">
        <div className="w-full md:w-1/2">animation</div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-serif  font-bold text-[#1dc7bdaf]   py-5">
            title
          </h1>
        </div>
      </div>
    </div> */
}
