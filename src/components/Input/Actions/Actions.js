import s from './Actions.module.scss';
import Button from '../../UI/Button';

function Actions() {
  return (
    <div className={`${s.actions} row row--large`}>
        <Button text="Reset grid" />
    </div>
  )
}
export default Actions