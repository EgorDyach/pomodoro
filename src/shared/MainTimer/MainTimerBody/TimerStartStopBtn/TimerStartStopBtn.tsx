import { Text } from '../../../../components/Text';
import './timerstartstopbtn.css';

export function TimerStartStopBtn({handleClick, isStarted, isPlaying}: {handleClick: () => void; isStarted: boolean; isPlaying: boolean;}) {

  return (
      <button className='timerStartStop__btn' onClick={handleClick}>
        <Text As='span' size={16} color='#fff'>
          {isPlaying ? 'Пауза' : (isStarted ? 'Продолжить' : "Старт")}
        </Text>
    </button>
  );
}
