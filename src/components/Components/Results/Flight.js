import s from './Flight.module.scss';

function Flight(props) {

  const renderTime = (t) => {
    const date = new Date(t);
    const hour = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const time = `${hour}:${minutes}`;

    return time;
  }


  return (
    <li className={s.flight}>
        <div className={s['flight__header']}>

            <div className={s['flight__schedule']}>
                <div className={s['flight__out']}>
                    <img src="https://yt3.googleusercontent.com/XA94gGYSxZp9_Hkr_FaBBrDaObK487wi1n-LPmZiNR6HzZd-tbuk7f292g47mVQw6ig4b5_g0w=s900-c-k-c0x00ffffff-no-rj" alt={props.airline} className={s['flight__logo']}/>

                    <div className={s['flight__info']}>
                        <div className={s['flight__time']}>{renderTime(props.departureTime)} - {renderTime(props.arrivalTime)}</div>
                        <div className={s['flight__airport']}><span>{props.departureAirport}</span> - <span>{props.arrivalAirport}</span></div>
                    </div>

                </div>
                
                <div className={s['flight__return']}>
                    <img src="https://e7.pngegg.com/pngimages/502/989/png-clipart-flight-ryanair-bus-quick-click-fare-harp-blue-logo.png" alt={props.airline} className={s['flight__logo']}/>
                   
                    <div className={s['flight__info']}>
                        <div className={s['flight__time']}>{renderTime(props.departureTime)} - {renderTime(props.arrivalTime)}</div>
                        <div className={s['flight__airport']}><span>{props.arrivalAirport}</span> - <span>{props.departureAirport}</span></div>
                    </div>

                </div>
            </div>
        
        </div>
        <div className={s['flight__footer']}>
            {props.price}
        </div>
    </li>
  )
}
export default Flight