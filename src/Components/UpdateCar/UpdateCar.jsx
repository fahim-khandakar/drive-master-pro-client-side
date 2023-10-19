import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdateCar = () => {
  const loadedData = useLoaderData();
  const [brandName, setBrandName] = useState();

  const { id } = useParams();
  const handleBrandName = (e) => {
    setBrandName(e.target.value);
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    // const brandName = brandName;
    const productType = form.productType.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const product = {
      photo,
      name,
      productType,
      brandName,
      price,
      description,
      rating,
    };
    fetch(`https://drive-master-pro-server.vercel.app/updateCar/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Congratulations!", "You Are Successfully Updated", "success");
        } else {
          swal("Opps!", "You are failed to update", "error");
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto p-5 md:p-0 mt-32">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold font-serif text-center">
          Update Product
        </h2>
        <form
          onSubmit={handleAddProduct}
          className="w-full md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              defaultValue={loadedData.photo}
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={loadedData.name}
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <select
              value={loadedData.brandName ? loadedData.brandName : "Toyota"}
              className="input input-bordered"
              onChange={handleBrandName}
            >
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes-Benz</option>
              <option value="Tesla">Tesla</option>
              <option value="Honda">Honda</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <input
              defaultValue={loadedData.productType}
              type="text"
              name="productType"
              placeholder="Product Type"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={loadedData.price}
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              defaultValue={loadedData.description}
              name="description"
              placeholder="Description"
              className="input input-bordered py-[10px]"
              required
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              defaultValue={loadedData.rating}
              type="number"
              name="rating"
              placeholder="(from 1 to 5)"
              className="input input-bordered"
              step="any"
              min={0}
              max={5}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#ffa500]">Update Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
