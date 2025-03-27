import React from "react";
import bgimage from '../assets/images/bg-image.jpg'

const Login = () => {
  return (
    <>
      <div className="flex justify-center   bg-cover bg-center h-screen" 
      style={{backgroundImage: `url(${bgimage})`}}>
        <div className="bg-white opacity-80 w-96 h-[500px] pr-4 pl-12 rounded-md mt-10 ">
          <p className="font-black text-4xl font-serif text-center mt-6	">
            Login
          </p>

          <label className="text-xl font-serif mt-6	">Email :</label>

          <input
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-6 mb-6"
            type="email"
          />

          <label className="text-xl font-serif ">Password :</label>

          <input
            type="password"
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-6 mb-6"
          />

          <select
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-6 mb-6 "
            name=""
            id=""
          >
            <option value="">User</option>
            <option value="">Admin</option>
          </select>

          <div className="mt-6 ">
            <a href="" className="text-xl font-serif ">
              {" "}
              Forgot password ?
            </a>

            <div className="inline ml-12">
              <button
                className=" bg-red-900 text-white font-bold rounded w-[110px] h-[35px]"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>

          <div className="mt-6 mb-6">
            <p className="text-xl font-serif	">
              Don't have a account ?{" "}
              <a className="text-red-900 font-serif	" href="Signup.html">
                Sign Up
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
