import React from "react";
import bgimage from "../assets/images/bg-image.jpg";

const Signup = () => {
  return (
    <>
      <div
        className="flex justify-center  bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="bg-white opacity-80 w-96 h-[500px] pr-4 pl-12 rounded-md mt-10 ">
          <p className="font-black text-4xl font-serif text-center mt-6	">
            SignUp
          </p>

          <label className="text-xl font-serif mt-6	">Name :</label>
          <input
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6"
            type="text"
          />

          <label className="text-xl font-serif mt-6	">Email :</label>
          <input
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6"
            type="email"
          />

          <label className="text-xl font-serif ">Password :</label>
          <input
            type="password"
            className="rounded-md ring ring-black w-[290px] h-[30px] mt-4 mb-6"
          />

          <button
            className=" bg-red-900 text-white font-bold rounded-3xl w-[290px] h-[35px] mt-6 mx-auto"
            type="submit"
          >
            Sign Up
          </button>

          <div className="mt-6 mb-6">
            <p className="text-xl font-serif	">
              Already have a account ?{" "}
              <a className="text-red-900 font-serif	" href="Login.html">
                Login
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
