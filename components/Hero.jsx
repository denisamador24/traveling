const Hero = () => {
  return (
    <div className="mt-4 flex gap-4 flex-col-reverse md:flex-row">

      <div className=" flex-1 flex flex-col justify-center">

        {/* content */}
        <h1 className="max-w-[600px] text-[44px] lg:text-[56px] font-bold font-Poppins leading-[70px] text-gray-800">
          Start your journey by one click, explore beautiful world!
        </h1>
        <p className="max-w-[500px] mt-4 text-[16px] font-Poppins font-normal leading-[27px]">
          Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!
        </p>

        {/* card app */}
        <div className="mt-8 flex gap-6">
          <img src="/images/google-play-store-card.png" alt="play store" />
          <img src="/images/app-store-card.png" alt="app store" />
        </div>
      </div>

      {/* image */}
      <div className="flex-1">
        <img src="/images/turist-person.png" alt="turist woman with a camera" />
      </div>
    </div>
  );
};

export default Hero;
