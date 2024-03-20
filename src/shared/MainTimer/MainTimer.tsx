import { useSelector } from 'react-redux';
import  './maintimer.css';
import { RootState, ToLocalType } from '../../store/store';
import { MainTimerHeader } from './MainTimerHeader';
import { MainTimerBody } from './MainTimerBody';

export function MainTimer() {
 const local = useSelector<RootState, ToLocalType>(state => state.Local)
  return (
    <>
    {local.arrayOfTasks.length !== 0 && <div className='MainTimer'>
      <MainTimerHeader active={local.arrayOfTasks[0]} />
    <MainTimerBody active={local.arrayOfTasks[0]} />
    </div>}
    </>
  );
}
