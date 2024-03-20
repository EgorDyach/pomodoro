import './menu.css';
import { EIcons, Icon } from '../../../../../components/Icon';
import { Text } from '../../../../../components/Text';
import { useDispatch } from 'react-redux';
import { RootState, Task } from '../../../../../store/store';
import { useSelector } from 'react-redux';

export function Menu({ task }: { task: Task }) {
  const count = task.count
  const dispatch = useDispatch();
  const tasks = useSelector<RootState, Task[]>(state => state.Local.arrayOfTasks)
  const isPlaying = useSelector<RootState, boolean>(state => state.isPlayingTimer)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event?.target as HTMLElement;
    const btnType = target.closest('.menuItem__btn')?.getAttribute('data-type');
    switch (btnType) {
      case 'menuPlus':
        dispatch({ type: "OPEN_MODAL_PLUS" })
        break;
      case 'menuMinus':
        dispatch({ type: "OPEN_MODAL_MINUS" })
        break;
      case 'menuChange':
        dispatch({ type: "OPEN_MODAL_CHANGE" })
        break;
      case 'menuDelete':
        dispatch({ type: "OPEN_MODAL_DELETE" })
        break;
      case 'menuUpPriority':
        dispatch({ type: "CHANGE_PRIORITY_UP", activeMenuID: task.id});
        dispatch({ type: "SET_ACTIVE_MENU_ID", activeMenuID: 0 })
        break;
      case 'menuDownPriority':
        dispatch({ type: "CHANGE_PRIORITY_DOWN", activeMenuID: task.id});
        dispatch({ type: "SET_ACTIVE_MENU_ID", activeMenuID: 0 })
        break;
      default:
        break;
    }
  }


  return (
    <div className='menu'>
      <ul className='menu__list'>
        <li className={count < 99 ? 'menuItem' : 'menuItem menuItem-disabled'}>
          <button disabled={!(count < 99)} className='menuItem__btn' data-type={"menuPlus"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.plus} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Увеличить помидорки
            </Text>
          </button>
        </li>
        <li className={(count > task.activeTomato) ? 'menuItem' : 'menuItem menuItem-disabled'}>
          <button disabled={!(count > task.activeTomato)} className='menuItem__btn' data-type={"menuMinus"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.minus} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Уменьшить помидорки
            </Text>
          </button>
        </li>
        <li className={'menuItem'}>
          <button className='menuItem__btn' data-type={"menuChange"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.pen} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Редактировать
            </Text>
          </button>
        </li>
        <li className={(tasks[0]?.id === task.id) || isPlaying ? 'menuItem menuItem-disabled' : "menuItem"}>
          <button disabled={tasks[0].id === task.id || isPlaying} className='menuItem__btn' data-type={"menuUpPriority"} onClick={handleClick}>
            <Icon fill='#A8B64F' typeOfIcon={EIcons.up} size={18} />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Поднять приоритет
            </Text>
          </button>
        </li>
        <li className={tasks[tasks.length-1]?.id === task.id || isPlaying ? 'menuItem menuItem-disabled' : "menuItem"}>
          <button className='menuItem__btn' disabled={tasks[tasks.length-1].id === task.id || isPlaying} data-type={"menuDownPriority"} onClick={handleClick}>
            <Icon typeOfIcon={EIcons.up} size={18} className='rotate180' fill='#A8B64F' />
            <Text As='span' size={16} weight={300} className='menuItem__text' color='#999999'>
              Опустить приоритет
            </Text>
          </button>
        </li>
        <li className={isPlaying ? 'menuItem menuItem-disabled' : 'menuItem'}>
          <button disabled={isPlaying} className='menuItem__btn' data-type={"menuDelete"} onClick={handleClick}>
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
