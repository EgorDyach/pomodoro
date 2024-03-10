import './mainItem.css';
import { RootState, Task } from '../../../../store/store';
import { EIcons, Icon } from '../../../../components/Icon';
import { useDispatch } from 'react-redux';
import { Menu } from './Menu';
import { useSelector } from 'react-redux';
import { Text } from '../../../../components/Text';

export function MainItem({ e }: { e: Task }) {

  const dispatch = useDispatch();
  const activeMenuID = useSelector<RootState>(state => state.activeMenuID);
  const handleClick = () => {
    if (e.id === activeMenuID) {
      dispatch({ type: 'SET_ACTIVE_MENU_ID', activeMenuID: 0 });
    } else {
      dispatch({ type: 'SET_ACTIVE_MENU_ID', activeMenuID: e.id });
    }
  }
  return (
    <li key={e.id} className='mainItem' id={String(e.id)}>
      <div className="mainItem__info">
        <Text size={16} color='#333333' weight={300} As='h3' className='mainItem__count'>{e.count}</Text>
        <Text size={16} color='#333333' weight={300} As='p' className='mainItem__title'>{e.title}</Text>
      </div>
      <button className='mainItem__btn' onClick={handleClick}>
        <Icon typeOfIcon={EIcons.menu} size={26} />
      </button>
        {e.id === activeMenuID && <Menu count={e.count}/>}
    </li>
  );
}
