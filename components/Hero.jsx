const Hero = () => {
  return (
    <div className="flex gap-4">
      <div className=" flex-1 flex flex flex-col justify-center">
        <h1 className="max-w-[600px] text-[56px] font-bold font-Poppins leading-[70px] text-gray-800">Start your journey by one click, explore beautiful world!</h1>
        <p className="max-w-[500px] mt-4 text-[16px] font-Poppins font-normal leading-[27px]">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!</p>
        <div className="mt-8 flex gap-6">
          <img src="/images/google-play-store-card.png" alt="play store" />
          <img src="/images/app-store-card.png" alt="app store" />
        </div>
      </div>
      <div className="flex-1">
        <img src="/images/turist-person.png" alt="turist woman with a camera" />
      </div>
    </div>
  );
};

export default Hero;
