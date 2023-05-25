import s from './Result.module.scss';
import FlightsList from './FlightsList';

function Result(props) {

  const renderWeather = (w) => {
    switch(w) {
        case 'Overast':
          return '☁️'
          break;
        case 'Sunny':
          return '☀️'
          break;
        default:
         return '🌧️'
      }
  }

  return (
    <li className={s.result} style={{ backgroundImage: `url(${props.destinationImage})`}}>
    <div className={s['result__overlay']}></div>

    <div className={s['result__header']}>
        <h2 className={s['result__title']}>{props.departureCity} ⇄ {props.arrivalCity}</h2>
        <div className={s['result__weather']}>
            <span>{props.destinationTemperature}°C</span>
            <span>{renderWeather(props.destinationWeather)}</span>
        </div>
    </div>

    <div className={s['result__body']}>
        <FlightsList/>
    </div>

    <div className={s['result__footer']}>
        <ul className={s['result__prices']}>
            <li className={`${s['result__price']} ${s['result__price--average']}`}>
                <div className={s['result__cost-type']}>average</div>
                <div className={`${s['result__cost']} ${s['result__cost--average']}`}>
                <span>➜</span>
                    $320.00
                </div>
            </li>
            <li className={`${s['result__price']} ${s['result__price--high']}`}>
                <div className={s['result__cost-type']}>high</div>
                <div className={`${s['result__cost']} ${s['result__cost--high']}`}>
                    <span>➜</span>
                    $320.00
                </div>
            </li>
            <li className={`${s['result__price']} ${s['result__price--low']}`}>
                <div className={s['result__cost-type']}>low</div>
                <div className={`${s['result__cost']} ${s['result__cost--low']}`}>
                    <span>➜</span>
                    $320.00
                    </div>
            </li>
        </ul>
    </div>

    </li> 
  )
}
export default Result