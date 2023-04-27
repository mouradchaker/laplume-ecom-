import React, { useState } from "react";
import Header from "../components/Header";
import user from "../assets/user.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../app/userSlice.js";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch("https://laplume-3llv.onrender.com/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataRes = await fetchData.json();

      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } else {
      alert("Please Enter required fields");
    }
  };
  return (
    <div className="bg-black h-screen">
      <Header />
      <div className="h-40">hi</div>
      <div className=" p-3 md:p-4">
        <div className="w-full max-w-sm bg-black m-auto flex  flex-col p-4">
          {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
          <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
            <img src={user} className="w-full h-full" />
          </div>

          <form
            className="w-full py-3 text-white flex flex-col"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email">Email</label>
            <input
              type={"email"}
              id="email"
              name="email"
              className="mt-1 mb-2 w-full bg-black border-2 border-green-500 focus-within:outline-green-500 px-2 py-1 rounded "
              value={data.email}
              onChange={handleOnChange}
            />

            <label htmlFor="password">Mot de Pass</label>
            <div className="flex px-2 py-1  rounded mt-1 mb-2 focus-within:outline bg-black border-2 border-green-500 focus-within:outline-green-500">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className=" w-full bg-black border-none outline-none "
                value={data.password}
                onChange={handleOnChange}
              />
              <span
                className="flex text-xl cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </span>
            </div>

            <button className="w-full max-w-[150px] m-auto  bg-green-600 hover:bg-green-800 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
              Connecter
            </button>
          </form>
          <p className="text-left text-white text-sm mt-2">
            Vous n'avez pas de compte ?{" "}
            <Link to={"/signup"} className="text-green-500 underline">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
