const Banner = () => {
  return (
    <div className=" mt-10">
      <div className="flex flex-col md:flex-row-reverse justify-around items-center gap-10">
        <div className="w-full md:w-1/2">animation</div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-serif  font-bold text-[#1dc7bdaf]   py-5">
            title
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
