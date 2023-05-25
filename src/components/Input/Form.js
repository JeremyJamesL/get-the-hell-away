import s from './Form.module.scss';

function Form() {
  return (
    <form className={s.form}>
        <div className={s['form__group']}>
            <label htmlFor="" className={s['form__label']}>From</label>
            <input type="text" className={`${s['form__input']} ${s['form__input--first']}`}/>
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