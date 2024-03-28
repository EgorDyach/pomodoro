import  './mainlist.css';
import { useSelector } from 'react-redux';
import { RootState, ToLocalType } from '../../../store/store';
import { MainItem } from './MainItem';
import { useLayoutEffect } from 'react';

export function MainList() {
  const tasks = useSelector<RootState, ToLocalType>(state => state.Local)
  useLayoutEffect(() => {
    
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
