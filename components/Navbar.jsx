"use client"
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = (
    <>
      <li>Products</li>
      <li>Contact Us</li>
      <li>About Us</li>
    </>
  )
  return (
    <nav className="pt-5 flex justify-between items-center">

      {/* title logo */}
      <div>
        <p className="text-primary-600 text-[36px] font-bold font-Roboto">Traveling!</p>
      </div>

      {/* desktop links */}
      <div className="hidden md:block">
        <ul className="flex flex-row gap-20 font-Lato font-normal text-gray-800 text-[16px]">
          {links}
        </ul>
      </div>

      {/* right side */}
      <div className="flex gap-4">

        {/* login button */}
        <button className="btn btn--primary w-[88px]">Sing up</button>

        {/* mobile links */}
        <div className="md:hidden relative">

          {/* icon */}
          <div onClick={() => setToggle(prev => !prev)}>
            <img width={34} src={toggle ? '/icons/close.svg' : '/icons/menu.svg'} />
          </div>

          {/* links */}
          <div className={`w-[150px] absolute top-12 right-0 bg-white rounded shadow ${toggle ? '' : 'hidden'}`}>
            <ul className="flex flex-col gap-2 items-center py-4">
              {links}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
