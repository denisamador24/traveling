import PlaceCard from './PlaceCard';

const placesData = [
  {
    image: '/images/place-1.jpg',
    name: 'Flores Road Trip 3D3N',
    location: 'Managgarai Barat',
    days: 3,
    price: {
      value: '6.706.000',
      type: 'orang'
    }
  },
  {
    image: '/images/place-2.jpg',
    name: 'Forrester Gramping Co Bogor',
    location: 'Bogor',
    days: 1,
    price: {
      value: '1.205.000',
      type: 'malam'
    }
  },
  {
    image: '/images/place-3.jpg',
    name: 'Paket Tiket Pesawat Jakarta Bali',
    location: 'Jakarta',
    days: undefined,
    price: {
      value: '605.000',
      type: 'person'
    }
  },
  {
    image: '/images/place-4.jpg',
    name: 'Desa wisata Kandri',
    location: 'Kota Semarang',
    days: 14,
    price: {
      value: '1.400.00',
      type: 'person'
    }
  }
];

const Trend = () => {

  return (
    <section className='section_padding-x my-[105px]'>
      <div>

        {/* title */}
        <h2 className='font-Lato text-[36px] font-bold'>Popular Destinations</h2>
        <p className='font-Lato text-[16px]'>Vacaions to make your experience enjoyable in Indonesia!</p>

        {/* place list */}
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[60px]'>
          {placesData.map((place, index) => (
            <li key={index}>
              <PlaceCard
                image={place.image}
                name={place.name}
                location={place.location}
                days={place.days}
                price={place.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Trend