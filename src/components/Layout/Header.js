import s from './Header.module.scss';

import Form from '../Input/Form';

function Header() {
  return (
    <header className={s.header}>
        <div className="row">
            <div className={s['header__text']}>
                <h1 className='heading-primary heading-primary--main'><a href="/">Get the hell away</a></h1>
                <p className={s['header__sub-text']}>Choose your holiday destination based on flight prices</p>
            </div>
        </div>

        <div className={s['header__search']}>
            <Form/>
        </div>
    </header>
  )
}
export default Header