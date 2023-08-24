const Navbar = () => {
  return (
    <nav className="pt-5 flex justify-between items-center">
      <div>
        <p className="text-primary-600 text-[36px] font-bold font-Roboto">Traveling!</p>
      </div>
      <div>
        <ul className="flex gap-20 font-Lato font-normal text-gray-800 text-[16px]">
          <li>Products</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <button className="w-[88px] h-[34px] font-Lato font-normal bg-orange text-white text-[16px] rounded-[8px]">Sing up</button>
      </div>
    </nav>
  );
};

export default Navbar;
