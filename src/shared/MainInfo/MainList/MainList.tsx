import  './mainlist.css';
import { useSelector } from 'react-redux';
import { RootState, ToLocalType } from '../../../store/store';
import { MainItem } from './MainItem';
import { useEffect } from 'react';

export function MainList() {
  const tasks = useSelector<RootState, ToLocalType>(state => state.Local)
  useEffect(() => {
    
  }, [tasks])
  return (
    <ul className='mainlist'>
      {tasks.arrayOfTasks.map(e => {
        return (
          <MainItem e={e} key={e.id} />
        )
      })}
    </ul>
  );
}
