// import { useLoaderData } from "react-router-dom";
import CartList from "../CartList/CartList";
import { useEffect, useState } from "react";

const MyCart = () => {
  // const loadedData = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cartList")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-28 max-w-6xl mx-auto px-5 md:px-0">
      {data.map((item) => (
        <CartList
          key={item._id}
          data={data}
          setData={setData}
          item={item}
        ></CartList>
      ))}
    </div>
  );
};

export default MyCart;
