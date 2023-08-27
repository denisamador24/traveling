

const Footer = () => {
  return (
    <footer className="min-h-[600px] w-full flex flex-col bg-primary-600 relative rounded-t-2xl overflow-hidden">
      {/* ellipse container*/}
      <div className="absolute z-[0] top-14 -left-[300px] w-[800px] h-[800px]">

        {/* ellipse and background, paddind works as width of ellipse */}
        <div className="ellipse p-16 bg-[#8adcf085] backdrop-blur-[6px]">
          <div className="ellipse p-14 border-ellipse" >
            <div className=" ellipse p-16 border-ellipse">
              <div className="ellipse bg-primary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="section_padding-x z-[1]">

        {/* login */}
        <div className="mt-[80px] p-14 flex justify-between items-center rounded-2xl border-[1px] border-white bg-[#8adcf07d] backdrop-blur-sm">
          <div>
            <p className="font-Lato text-white">Prepare yourself to be a part of exploration of</p>
            <h2 className="text-white">The Beauty of Indonesia</h2>
          </div>
          <div className="flex flex-col gap-4 w-[200px]">
            <button className="btn btn--primary h-12">Sing in</button>
            <button className="btn btn--secondary h-12">Sing up</button>
          </div>
        </div>

        {/* links and app store */}
        <div className="flex justify-between mt-16">
          <div className="">
            <p className="font-Roboto text-[32px] text-white">Travlig!</p>
            <ul className="mt-4 flex gap-8 text-[16px] text-white">
              <li>Product</li>
              <li>Contact US</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <p className="font-Lato text-[18px] text-white">Get the App</p>
            <div className="mt-4 flex gap-4">
              <img src="/images/google-play-store-card.png" alt="google play store" />
              <img src="/images/app-store-card.png" alt="app store" />
            </div>
          </div>
        </div>

        {/* copyright and social media */}
        <div className="mt-8 py-6 flex justify-between border-t border-white">
          <p className="text-white font-Lato font-normal">© 2023 travling.verel.app</p>
          <div className="h-8 flex gap-6">
            <img src="/icons/facebook.png" alt="facebook logo" />
            <img src="/icons/instagram.png" alt="instagtram logo" />
            <img src="/icons/twitter.png" alt="twitter logo" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer