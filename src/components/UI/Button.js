import s from './Button.module.scss';

function Button(props) {
  return (
    <button className={s.button}>
        {props.text}
    </button>
  )
}
export default Button