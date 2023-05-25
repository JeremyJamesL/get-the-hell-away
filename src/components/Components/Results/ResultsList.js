import s from './ResultsList.module.scss';
import Result from './Result';
import dummyData from '../../../assets/data/dummy-data';

function ResultsList() {
  const list = dummyData.map((el, i) => {
    return (
      <Result 
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
    )
  })

  return (
    <section className={`row row--large`}>
        <ul className={s.results}>
            {list}
        </ul>
    </section>
  )
}
export default ResultsList