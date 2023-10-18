import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandsCard = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-2xl md:text-4xl w-1/2 md:w-1/4 mx-auto font-bold font-mono text-center border-b-2 border-black">
        All Brands
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center  mt-10">
        {brands.map((brand) => (
          <Link to={`/brandDetails/${brand.carBrand}`} key={brand.id}>
            <div className="bg-slate-100 rounded-md p-5 flex items-center justify-center gap-10">
              <img className="w-20" src={brand.imgUrl} alt="" />
              <h1 className="text-2xl font-bold font-mono">{brand.carBrand}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandsCard;
