import './menu.css';
import { EIcons, Icon } from '../../../../../components/Icon';
import { Text } from '../../../../../components/Text';
import { useDispatch } from 'react-redux';

export function Menu({ count}: {count: number}) {
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event?.target as HTMLElement;
    const btnType = target.closest('.menuItem__btn')?.getAttribute('data-type');
    switch (btnType) {
      case 'menuPlus':
        dispatch({type: "OPEN_MODAL_PLUS"})
        break;
      case 'menuMinus':
        dispatch({type: "OPEN_MODAL_MINUS"})
        break;
      case 'menuChange':
        dispatch({type: "OPEN_MODAL_CHANGE"})
        break;
      case 'menuDelete':
        dispatch({type: "OPEN_MODAL_DELETE"})
        break;
    
      default:
        break;
    }
  }
  return (
    <div className='menu'>
      <ul className='menu__list'>
        <li className={count < 99 ? 'menuItem' : 'menuItem menuItem-disabled'}>
          <button disabled={!(count<99)} className='menuItem__btn' data-type={"menuPlus"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.plus} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Увеличить
            </Text>
          </button>
        </li>
        <li className={count > 1 ? 'menuItem' : 'menuItem menuItem-disabled'}>
          <button disabled={!(count > 1)} className='menuItem__btn' data-type={"menuMinus"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.minus} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Уменьшить
            </Text>
          </button>
        </li>
        <li className={0 == 0 ? 'menuItem' : 'menuItem menuItem-disabled'}>
          <button disabled={!(count<99)} className='menuItem__btn' data-type={"menuChange"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.pen} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Редактировать
            </Text>
          </button>
        </li>
        <li className={ 0 == 0 ? 'menuItem' : 'menuItem menuItem-disabled'}>
          <button disabled={!(count<99)} className='menuItem__btn' data-type={"menuDelete"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.trash} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Удалить
            </Text>
          </button>
        </li>
      </ul>
    </div>
  );
}
