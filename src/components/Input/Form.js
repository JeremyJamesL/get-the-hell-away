import { useEffect, useState } from 'react';
import s from './Form.module.scss';

function Form() {
  const [nameInput, updateNameInput] = useState('');
  const [citiesList, updateCitiesList] = useState([]);
  const [selectedCities, updateSelectedCities] = useState([]);
  
  console.log(selectedCities);

  const handleCitySelect = (e) => {
    updateSelectedCities(current => [...current, `${e.target.dataset.city}, ${e.target.dataset.countryCode}`])
  }

  const citiesDropdown = () => {
    return citiesList.map((city) => {
        return (
            <li className={s['form__dropdown-item']} onClick={handleCitySelect} data-city={city.city} data-country-code={city.countryCode}>{city.city}, {city.country}</li>
        )
    })

  }

  const retrieveCities = (n) => {
    if(n.length === 0) {
        updateCitiesList([]);
        return;
    }

    fetch(`https://api.tequila.kiwi.com/locations/query?term=${nameInput}&location_types=airport`, {
      headers: {
          apikey: 'HBXWUq8kn8Og9qZqXd_0iza3L0S81ugh'
      }
    })
    .then(response => response.json())
    .then(result => {
        const newArr = result.locations.map((el) => {
            return {
                id: el.city.id,
                city: el.city.name,
                country: el.city.country.name,
                countryCode: el.city.country.code
            }
        })

        const uniqueArr = newArr.filter((obj, index) => {
            return index === newArr.findIndex(o => obj.id === o.id);
        })
        updateCitiesList(uniqueArr);
    })
  }
  
  useEffect(() => {
    const validator = setTimeout(() => {
        retrieveCities(nameInput);
    }, 200)

    return () => {
        clearTimeout(validator);
    }
  }, [nameInput, updateNameInput])

  return (
    <form className={s.form}>
        <div className={s['form__group']}>
            <label htmlFor="" className={s['form__label']}>From</label>
            <input type="text" className={`${s['form__input']} ${s['form__input--first']}`} onChange={(e) => updateNameInput(e.target.value)}/>
            <ul className={s['form__dropdown']}>
                {citiesDropdown()}
            </ul>
        </div>
        <div className={s['form__group']}>
            <label htmlFor="" className={s['form__label']}>To</label>
            <input type="text" className={s['form__input']}/>
        </div>
        <div className={s['form__group']}>
            <label htmlFor="" className={s['form__label']}>Depart</label>
            <input type="text" className={`${s['form__input']}`}/>
        </div>
        <div className={s['form__group']}>
            <label htmlFor="" className={s['form__label']}>Return</label>
            <input type="text" className={`${s['form__input']} ${s['form__input--last']}`}/>
        </div>
        <button type='submit' className={s['form__button']}>Submit</button>
    </form>
  )
}
export default Form