import  './mainlist.css';
import { useSelector } from 'react-redux';
import { RootState, Task } from '../../../store/store';
import { MainItem } from './MainItem';

export function MainList() {
  const tasks = useSelector<RootState, Task[]>(state => state.Local.arrayOfTasks)
  return (
    <ul className='mainlist'>
      {tasks.map(e => {
        return (
          <MainItem e={e} key={e.id} />
        )
      })}
    </ul>
  );
}
