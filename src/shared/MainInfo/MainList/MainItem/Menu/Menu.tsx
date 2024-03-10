import './menu.css';
import { EIcons, Icon } from '../../../../../components/Icon';
import { Text } from '../../../../../components/Text';
import { Task } from '../../../../../store/store';

export function Menu({element, onClose}: {element: Task, onClose: () => void}) {
  const handleClick = () => {
    console.log(event?.target, element);
    onClose();
  }
  return (
    <div className='menu'>
      <ul className='menu__list'>
        <li className='menuItem'>
          <button className='menuItem__btn' data-type={"menuPlus"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.plus} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Увеличить
            </Text>
          </button>
        </li>
        <li className='menuItem'>
          <button className='menuItem__btn' data-type={"menuMinus"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.minus} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Уменьшить
            </Text>
          </button>
        </li>
        <li className='menuItem'>
          <button className='menuItem__btn' data-type={"menuChange"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.pen} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Редактировать
            </Text>
          </button>
        </li>
        <li className='menuItem'>
          <button className='menuItem__btn' data-type={"menuDelete"} onClick={handleClick}>
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
