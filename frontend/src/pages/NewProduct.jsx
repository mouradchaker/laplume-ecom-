import React, { useState } from "react";
import { ImagetoBase64 } from "../utility/imagetoBase64";
import { toast } from "react-hot-toast";
import Header from "../components/Header";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        "https://laplume-3llv.onrender.com/uploadProduct",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter required Fields");
    }
  };
  return (
    <>
      <Header />
      <div className="p-4 pt-24 bg-black min-h-[calc(100vh)]">
        <form
          className="m-auto w-full max-w-md rounded-lg shadow flex flex-col p-5 border-green-500 border-2 bg-black text-white"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            placeholder="Product Name"
            type={"text"}
            name="name"
            className="bg-black border-green-500 border-2 p-1 my-1"
            onChange={handleOnChange}
            value={data.name}
          />

          <label htmlFor="category">Category</label>
          <select
            className="bg-black border-green-500 border-2 p-1 my-1"
            id="category"
            name="category"
            onChange={handleOnChange}
            value={data.category}
          >
            <option value={"other"}>Select Category</option>
            <option value={"Parfumes"}>Parfumes</option>
            <option value={"Soin de Visage"}>Soin de Visage</option>
            <option value={"Fond de Teint"}>Fond de Teint</option>
            <option value={"Poudre Libre"}>Poudre Libre</option>
          </select>

          <label htmlFor="image">
            Image
            <div className="h-40 w-full border-green-500 border-2 bg-black rounded flex items-center justify-center cursor-pointer">
              {data.image ? (
                <img src={data.image} className="h-full" />
              ) : (
                <span className="text-5xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </span>
              )}

              <input
                type={"file"}
                accept="image/*"
                id="image"
                onChange={uploadImage}
                className="hidden "
              />
            </div>
          </label>

          <label htmlFor="price" className="my-1">
            Price
          </label>
          <input
            placeholder="Prix"
            type={"text"}
            className="bg-black border-green-500 border-2 p-1 my-1"
            name="price"
            onChange={handleOnChange}
            value={data.price}
          />

          <label htmlFor="description">Description</label>
          <textarea
            placeholder="cest quoi ?"
            rows={2}
            value={data.description}
            className="bg-black border-green-500 border-2 p-1 my-1 resize-none"
            name="description"
            onChange={handleOnChange}
          ></textarea>

          <button className="bg-green-600 hover:bg-green-700 text-white text-lg font-medium my-2 drop-shadow">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
