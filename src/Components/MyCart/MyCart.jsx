// import { useLoaderData } from "react-router-dom";
import CartList from "../CartList/CartList";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [data, setData] = useState([]);
  data;

  useEffect(() => {
    fetch("https://drive-master-pro-server.vercel.app/cartList")
      .then((res) => res.json())
      .then((data) => {
        const userData = data.filter((item) => item.email === email);
        setData(userData);
      });
  }, [email]);

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
