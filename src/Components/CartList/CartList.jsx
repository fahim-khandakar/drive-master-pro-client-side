import { ImCancelCircle } from "react-icons/im";
/* eslint-disable react/prop-types */
const CartList = ({ item, data, setData }) => {
  const { _id, photo, name, brandName, productType, price, rating } = item;
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://drive-master-pro-server.vercel.app/cartList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          const remaining = data.filter((prod) => prod._id !== _id);
          setData(remaining);
          swal("Delete!", "You deleted this cart.", "success");
        } else {
          swal("Ohho..!", "Something is wrong", "error");
        }
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-5 md:px-0 mb-5">
      <div className="w-full  flex items-center gap-5  text-lg md:text-2xl font-semibold justify-center">
        <div className=" w-[80px] md:w-[100px]">
          <img className="rounded-md" src={photo} alt="" />
        </div>
        <h1>
          <span>Name:</span>
          {name}
        </h1>
        <h1>
          <span>Name:</span>
          {brandName}
        </h1>
        <h1 className="hidden md:block">
          <span>Name:</span>
          {productType}
        </h1>
        <h1 className="hidden md:block">
          <span>Name:</span>
          {rating}
        </h1>
        <h1 className="hidden md:block">
          <span>Price:</span>
          {price}
        </h1>
        <button
          onClick={() => handleDelete(_id)}
          className="text-red-600 w-[25px]"
        >
          <ImCancelCircle className="active:text-xl"></ImCancelCircle>
        </button>
      </div>
    </div>
  );
};

export default CartList;
