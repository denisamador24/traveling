
const PlaceCard = ({ image, name, days, location, price }) => {
  return (
    <article className="w-full h-full bg-gray-100 rounded-xl overflow-hidden border-[1px] border-white">
      {/* place image */}
      <img src={image} alt="place" className='w-full h-[200px] object-cover' />

      <div className="p-4">
        {/* location icon and text */}
        <div className="mt-4 flex gap-1">
          <img width={16} src='/icons/location.svg' alt="location" />
          <p className='font-Lato text-[14px] text-gray-400 font-normal'>{location}</p>
        </div>

        {/* name */}
        <p className="mt-2 font-Lato text-[16px] font-bold">{name}</p>

        {/* days */}
        <p className="mt-1 font-Lato text-[14px] text-gray-600">{days ? days + ' Days' : ' _'}</p>

        {/* price */}
        <p className="mt-4 font-Lato text-[14px] font-bold text-primary-600">
          {price.value + " "}
          <span className="text-[12px] font-normal">{price.type}</span>
        </p>
      </div>
    </article>
  )
}

export default PlaceCard