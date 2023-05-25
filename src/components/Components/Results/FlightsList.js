import s from './FlightsList.module.scss';
import Flight from './Flight';
import dummyData from '../../../assets/data/dummy-data';

function FlightsList() {

  const list = dummyData.map((el, i) => {
    return <Flight
      key={i}
      flightNumber={el.flightNumber} 
      airline={el.airline} 
      departureCity={el.departureCity}
      departureCountry={el.departureCountry}
      departureTime={el.departureTime}
      departureAirport={el.departureAirport}
      arrivalCity={el.arrivalCity}
      arrivalCountry={el.arrivalCountry}
      arrivalTime={el.arrivalTime}
      arrivalAirport={el.arrivalAirport}
      price={el.price}
      destinationWeather={el.destinationWeather}
      destinationTemperature={el.destinationTemperature}
      destinationImage={el.destinationImage}
    />
  })

  return (
    <div className={s['flights-list']}>
      {list}
    </div>
  ) 
}
export default FlightsList