

const WhyShooseUs = () => {
  return (
    <section className="section_padding-x flex items-center gap-8 flex-col md:flex-row">
      <div className="flex-1 relative">
        <div className="bg-gradient_shooseUs absolute -z-[1] w-[70%] h-[70%] top-[20%] -left-[10%]" />
        <img src="/images/turist-man-woman.png" alt="people" className="bg-shadow_image rounded-full" />
      </div>

      <div className="flex-1">
        <h2>Why Choose Us</h2>
        <p className="font-Lato text-[20px] text-gray-900">Enjoy different experiences in every place you visit and discover new and affordable adventures of course.</p>

        {/* products */}
        <ul className='products'>
          <li className='card'>

            {/* icon */}
            <div className="card__img">
              <img src="/icons/flight.svg" alt="fligth icon" />
            </div>

            {/* content */}
            <div>
              <h3>Flight Ticket</h3>
              <p>Vitae donec pellentesque a aliquam et ultricies auctor.</p>
            </div>
          </li>
          <li className='card'>
            <img src='/icons/hotel.svg' alt="hotel icon" />
            <div>
              <h3>Accomodation</h3>
              <p>Vitae donec pellentesque a aliquam et ultricies auctor.</p>
            </div>
          </li>
          <li className='card'>
            <img src='/icons/suitcases.svg' alt="suitcases icon" />
            <div>
              <h3>Packaged Tour</h3>
              <p>Vitae donec pellentesque a aliquam et ultricies auctor.</p>
            </div>
          </li>
        </ul>

        <div className="m-6 flex gap-2">
          <p className="font-Lato font-bold text-[20px] text-gray-900">Another Product</p>
          <img src="/icons/chevron-right.svg" alt="arrow icons" className="w-[20px] p-[1px]" />
        </div>
      </div>
    </section>
  )
}

export default WhyShooseUs