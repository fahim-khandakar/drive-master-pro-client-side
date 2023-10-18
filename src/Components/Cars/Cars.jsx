import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Cars = ({ car }) => {
  const {
    _id,
    photo,
    name,
    brandName,
    productType,
    price,
    description,
    rating,
  } = car;
  return (
    <div>
      <div className="flex justify-center items-center gap-5 bg-slate-200 p-5 rounded-lg h-72">
        <div className="w-1/2 h-[150px] ">
          <img className="w-full h-full rounded-md" src={photo} alt="" />
        </div>
        <div className="w-1/2 space-y-2">
          <h1>
            <span className="font-semibold">Name:</span> {name}
          </h1>
          <h3>
            <span className="font-semibold">Brand:</span> {brandName}
          </h3>
          <h4>
            <span className="font-semibold">Type:</span> {productType}
          </h4>
          <p>
            <span className="font-semibold">Description:</span> {description}
          </p>
          <div className="flex gap-5  items-center">
            <h5>
              <span className="font-semibold">Price:</span> {price}
            </h5>
            <p>
              <span className="font-semibold">Rating:</span> {rating}
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <Link to={`/carDetails/${_id}`}>
              <button className="py-2 px-4 bg-green-400 rounded-md hover:bg-green-300">
                Details
              </button>
            </Link>
            <Link to={`/updateCar/${_id}`}>
              <button className="py-2 px-4 bg-cyan-400 rounded-md hover:bg-cyan-300">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
