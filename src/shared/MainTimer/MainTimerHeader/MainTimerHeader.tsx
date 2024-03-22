import  './maintimerheader.css';
import { RootState, Task } from '../../../store/store';
import { Text } from '../../../components/Text';
import { useSelector } from 'react-redux';

export function MainTimerHeader({active}: {active: Task;}) {
const isStarted = useSelector<RootState, boolean>(state => state.isStartedTimer)
const isBreakTimer = useSelector<RootState, boolean>(state => state.isBreakTimer)
  return (
    <div className={isBreakTimer ? 'mainTimer__header mainTimer__header-break' : (isStarted ? 'mainTimer__header mainTimer__header-playing' :'mainTimer__header')}>
      <Text As='h3' size={16} color='#fff' className='mainTimer__header-title' weight={500}>{active.title}</Text>
      <Text As='h3' size={16} color='#fff' className='mainTimer__header-count' weight={300}>Помидор {active.activeTomato}</Text>
    </div>
  );
}
