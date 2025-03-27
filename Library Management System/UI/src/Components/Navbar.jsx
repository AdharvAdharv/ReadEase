import React from 'react';
import Logo from "../assets/images/Logo1.webp"

const Navbar = () => {
  return (
    <>
        <nav className="w-auto h-[100px] bg-red-900 flex justify-between ">
                <img className="w-[110px] h-[100px] ml-12" src={Logo} alt="logo" />
                <div className="text-white font-medium text-2xl my-auto">
                <a className="mr-[50px]" href="HomePage.html">Home</a>
                <a className="mr-[50px]" href="Books.html">Books</a>
                <a className="mr-[50px]" href="Cart.html">Cart</a>
                <a className="mr-[150px]" href="Login.html">Logout</a>
            </div>

            </nav>
    </>
  )
}

export default Navbar