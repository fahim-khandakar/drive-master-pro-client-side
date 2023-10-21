import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const CarDetails = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const loadedData = useLoaderData();
  const newId = loadedData._id + email;
  const data = { ...loadedData, email, _id: newId };
  const [cartList, setCartList] = useState([]);
  const { photo, name, brandName, productType, price, description, rating } =
    loadedData;
  useEffect(() => {
    fetch("https://drive-master-pro-server.vercel.app/cartList")
      .then((res) => res.json())
      .then((data) => setCartList(data));
  }, []);

  const handleAddCart = () => {
    data;
    let shouldContinue = true;

    if (cartList.length > 0) {
      for (let item of cartList) {
        if (item._id === data._id && email === item.email) {
          shouldContinue = false;
          swal("Sorry!", "You have already added this product", "error");
          break; // Exit the loop early
        }
      }

      if (shouldContinue) {
        fetch("https://drive-master-pro-server.vercel.app/cartList", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((response) => {
            if (!(response.InsertedId > 0)) {
              // Corrected the condition here
              swal("Great!", "Added this cart", "success");
            } else {
              swal("Sorry!", "Something went wrong", "error");
            }
          });
      }
    } else {
      fetch("https://drive-master-pro-server.vercel.app/cartList", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          if (!(response.InsertedId > 0)) {
            // Corrected the condition here
            swal("Great!", "Added this cart", "success");
          } else {
            swal("Sorry!", "Something went wrong", "error");
          }
        });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-0">
      <div>
        <div>
          <img
            className="h-[500px] w-full object-cover relative rounded-b-lg"
            src={photo}
            alt=""
          />
          <div className=" w-full  md:bg-[#00000070] top-[430px] rounded-b-lg max-w-6xl mx-auto absolute left-0  right-0 bottom-0 h-[70px]     ">
            <button
              onClick={handleAddCart}
              className=" mt-3 ml-5 btn py-2 px-5   rounded-lg font-bold"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="space-y-3 mt-20">
          <h1>
            <span className="text-2xl font-semibold">Name:</span>{" "}
            <span className="text-3xl font-medium">{name}</span>
          </h1>
          <h1>
            <span className="text-2xl font-semibold">Brand:</span>{" "}
            <span className="text-3xl font-medium">{brandName}</span>
          </h1>
          <h1>
            <span className="text-2xl font-semibold">Type:</span>{" "}
            <span className="text-3xl font-medium">{productType}</span>
          </h1>
          <h1>
            <span className="text-2xl font-semibold">Price:</span>{" "}
            <span className="text-3xl font-medium">{price}</span>
          </h1>
          <h1 className="flex gap-5 ">
            <span className="text-2xl font-semibold">Description:</span>{" "}
            <span className="text-2xl font-medium">{description}</span>
          </h1>
          <h1>
            <span className="text-2xl font-semibold">Rating:</span>{" "}
            <span className="text-3xl font-medium">{rating}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
